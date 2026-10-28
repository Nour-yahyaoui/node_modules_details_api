//! Data layer for the Node Modules Details API.
//!
//! The dataset (`data.json`, 779 library documentation entries) is embedded
//! into the binary at compile time and indexed once at startup: slug lookups,
//! category/tag counts, relevance search, sorting and pagination are all
//! derived automatically — same behaviour as the original Node implementation.

use std::collections::{HashMap, HashSet};

use serde::{Deserialize, Serialize};
use serde_json::{json, Value};

pub const DEFAULT_LIMIT: usize = 20;
pub const MAX_LIMIT: usize = 100;

/// A dataset entry as it appears in data.json.
#[derive(Debug, Deserialize)]
struct RawLibrary {
    title: String,
    description: String,
    usage: String,
    tags: Vec<String>,
    category: String,
}

/// A dataset entry enriched with a stable id and a URL-friendly slug.
#[derive(Debug, Clone, Serialize)]
pub struct Library {
    pub title: String,
    pub description: String,
    pub usage: String,
    pub tags: Vec<String>,
    pub category: String,
    pub id: u32,
    pub slug: String,
}

/// `{ name, count }` pairs for categories and tags.
#[derive(Debug, Clone, Serialize)]
pub struct Count {
    pub name: String,
    pub count: u32,
}

/// Supported `?sort=` values.
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum SortKey {
    Title,
    TitleDesc,
    Category,
    CategoryDesc,
    Id,
    IdDesc,
}

impl SortKey {
    pub fn parse(value: &str) -> Option<SortKey> {
        match value {
            "title" => Some(SortKey::Title),
            "-title" => Some(SortKey::TitleDesc),
            "category" => Some(SortKey::Category),
            "-category" => Some(SortKey::CategoryDesc),
            "id" => Some(SortKey::Id),
            "-id" => Some(SortKey::IdDesc),
            _ => None,
        }
    }

    pub fn supported() -> [&'static str; 6] {
        ["title", "-title", "category", "-category", "id", "-id"]
    }

    pub fn label(&self) -> &'static str {
        match self {
            SortKey::Title => "title",
            SortKey::TitleDesc => "-title",
            SortKey::Category => "category",
            SortKey::CategoryDesc => "-category",
            SortKey::Id => "id",
            SortKey::IdDesc => "-id",
        }
    }

    /// Stable in-place sort of borrowed entries.
    fn sort_items(&self, items: &mut [&Library]) {
        match self {
            SortKey::Title => items.sort_by(|a, b| a.title.cmp(&b.title)),
            SortKey::TitleDesc => items.sort_by(|a, b| b.title.cmp(&a.title)),
            SortKey::Category => items.sort_by(|a, b| {
                a.category
                    .cmp(&b.category)
                    .then_with(|| a.title.cmp(&b.title))
            }),
            SortKey::CategoryDesc => items.sort_by(|a, b| {
                b.category
                    .cmp(&a.category)
                    .then_with(|| a.title.cmp(&b.title))
            }),
            SortKey::Id => items.sort_by(|a, b| a.id.cmp(&b.id)),
            SortKey::IdDesc => items.sort_by(|a, b| b.id.cmp(&a.id)),
        }
    }
}

/// URL-friendly slug, mirroring the original JS slugify:
/// lowercase, runs of non-alphanumerics become '-', edges trimmed.
pub fn slugify(title: &str) -> String {
    let mut out = String::new();
    let mut prev_dash = false;
    for ch in title.trim().chars() {
        let c = ch.to_ascii_lowercase();
        if c.is_ascii_alphanumeric() {
            out.push(c);
            prev_dash = false;
        } else if !out.is_empty() && !prev_dash {
            out.push('-');
            prev_dash = true;
        }
    }
    while out.ends_with('-') {
        out.pop();
    }
    out
}

/// Relevance score for one entry against the search tokens:
/// title matches weigh the most, then tags, then description.
fn score_entry(entry: &Library, tokens: &[String]) -> u64 {
    let title = entry.title.to_lowercase();
    let description = entry.description.to_lowercase();
    let tags: Vec<String> = entry.tags.iter().map(|t| t.to_lowercase()).collect();
    let mut score = 0u64;

    for token in tokens {
        if title == *token {
            score += 10;
        } else if title.starts_with(token.as_str()) {
            score += 6;
        } else if title.contains(token.as_str()) {
            score += 4;
        }

        if tags.iter().any(|t| *t == *token) {
            score += 3;
        } else if tags.iter().any(|t| t.contains(token.as_str())) {
            score += 1;
        }

        if description.contains(token.as_str()) {
            score += 1;
        }
    }
    score
}

/// Query options for [`Store::list`].
pub struct ListArgs<'a> {
    pub q: Option<&'a str>,
    pub category: Option<&'a str>,
    pub tag: Option<&'a str>,
    pub sort: Option<&'a str>,
    pub page: usize,
    pub limit: usize,
}

/// The result of [`Store::list`] — items plus everything the `meta` envelope needs.
pub struct ListResult<'a> {
    pub items: Vec<&'a Library>,
    pub total: usize,
    pub page: usize,
    pub limit: usize,
    pub pages: usize,
    pub sort: &'static str,
    pub query: Option<String>,
    pub category: Option<String>,
    pub tag: Option<String>,
}

pub struct Store {
    libraries: Vec<Library>,
    /// slug -> ids of every entry with that slug (some titles collide).
    by_slug: HashMap<String, Vec<u32>>,
    categories: Vec<Count>,
    tags: Vec<Count>,
    category_set: HashSet<String>,
}

fn count_and_sort<F>(libraries: &[Library], key: F) -> Vec<Count>
where
    F: Fn(&Library) -> Vec<String>,
{
    let mut counts: HashMap<String, u32> = HashMap::new();
    for lib in libraries {
        for name in key(lib) {
            *counts.entry(name).or_insert(0) += 1;
        }
    }
    let mut counts: Vec<Count> = counts
        .into_iter()
        .map(|(name, count)| Count { name, count })
        .collect();
    counts.sort_by(|a, b| b.count.cmp(&a.count).then_with(|| a.name.cmp(&b.name)));
    counts
}

impl Store {
    /// Parse the embedded dataset and build all indexes.
    pub fn load() -> Store {
        let raw: Vec<RawLibrary> =
            serde_json::from_str(include_str!("../data.json")).expect("embedded data.json is valid");

        let mut libraries = Vec::with_capacity(raw.len());
        for (i, r) in raw.into_iter().enumerate() {
            let slug = slugify(&r.title);
            libraries.push(Library {
                title: r.title,
                description: r.description,
                usage: r.usage,
                tags: r.tags,
                category: r.category,
                id: i as u32 + 1,
                slug,
            });
        }

        let mut by_slug: HashMap<String, Vec<u32>> = HashMap::new();
        for lib in &libraries {
            by_slug.entry(lib.slug.clone()).or_default().push(lib.id);
        }

        let categories = count_and_sort(&libraries, |lib| vec![lib.category.clone()]);
        let tags = count_and_sort(&libraries, |lib| lib.tags.clone());
        let category_set: HashSet<String> =
            categories.iter().map(|c| c.name.to_lowercase()).collect();

        Store {
            libraries,
            by_slug,
            categories,
            tags,
            category_set,
        }
    }

    pub fn total(&self) -> usize {
        self.libraries.len()
    }

    pub fn categories(&self) -> &[Count] {
        &self.categories
    }

    pub fn tags(&self) -> &[Count] {
        &self.tags
    }

    pub fn category_names(&self) -> Vec<String> {
        self.categories.iter().map(|c| c.name.clone()).collect()
    }

    pub fn has_category(&self, name: &str) -> bool {
        self.category_set.contains(&name.to_lowercase())
    }

    /// Core list/filter/search query with pagination.
    pub fn list<'a>(&'a self, args: &ListArgs) -> ListResult<'a> {
        let mut items: Vec<&Library> = self.libraries.iter().collect();

        if let Some(category) = args.category {
            let wanted = category.to_lowercase();
            items.retain(|lib| lib.category.to_lowercase() == wanted);
        }

        if let Some(tag) = args.tag {
            let wanted = tag.to_lowercase();
            items.retain(|lib| lib.tags.iter().any(|t| t.to_lowercase() == wanted));
        }

        let tokens: Vec<String> = args
            .q
            .map(|q| {
                q.to_lowercase()
                    .split_whitespace()
                    .map(str::to_string)
                    .collect()
            })
            .unwrap_or_default();

        let requested_sort = args.sort.and_then(SortKey::parse);

        let mut applied_sort: &'static str;
        if !tokens.is_empty() {
            let mut scored: Vec<(&Library, u64)> = items
                .into_iter()
                .map(|lib| (lib, score_entry(lib, &tokens)))
                .filter(|(_, score)| *score > 0)
                .collect();
            scored.sort_by(|a, b| b.1.cmp(&a.1).then_with(|| a.0.title.cmp(&b.0.title)));
            let mut items: Vec<&Library> = scored.into_iter().map(|(lib, _)| lib).collect();
            applied_sort = "relevance";
            if let Some(key) = requested_sort {
                key.sort_items(&mut items);
                applied_sort = key.label();
            }
            finish_list(items, args, applied_sort)
        } else {
            let key = requested_sort.unwrap_or(SortKey::Title);
            key.sort_items(&mut items);
            applied_sort = key.label();
            finish_list(items, args, applied_sort)
        }
    }

    /// Look up entries by slug (or numeric id). Returns the first hit plus
    /// the number of matches (some titles collide, e.g. "Nodemailer" ×2).
    pub fn find(&self, key: &str) -> Option<(&Library, usize)> {
        if let Some(ids) = self.by_slug.get(&key.to_lowercase()) {
            if let Some(first) = ids.first() {
                return Some((&self.libraries[(*first - 1) as usize], ids.len()));
            }
        }
        match key.parse::<u32>() {
            Ok(id) if id >= 1 && (id as usize) <= self.libraries.len() => {
                Some((&self.libraries[(id - 1) as usize], 1))
            }
            _ => None,
        }
    }

    /// Distinct random picks. Uses the OS-seeded hasher as a tiny shuffle —
    /// no external RNG crate needed.
    pub fn random(&self, count: usize) -> Vec<&Library> {
        use std::collections::hash_map::RandomState;
        use std::hash::{BuildHasher, Hasher};

        let n = count.clamp(1, MAX_LIMIT).min(self.libraries.len());
        let state = RandomState::new();
        let mut order: Vec<usize> = (0..self.libraries.len()).collect();
        order.sort_by_key(|i| {
            let mut hasher = state.build_hasher();
            hasher.write_usize(*i);
            hasher.finish()
        });
        order
            .into_iter()
            .take(n)
            .map(|i| &self.libraries[i])
            .collect()
    }

    /// Dataset statistics for `GET /api/stats`.
    pub fn stats(&self) -> Value {
        json!({
            "totalLibraries": self.libraries.len(),
            "totalCategories": self.categories.len(),
            "totalTags": self.tags.len(),
            "categories": self.categories,
            "topTags": self.tags.iter().take(25).collect::<Vec<_>>(),
        })
    }
}

fn finish_list<'a>(items: Vec<&'a Library>, args: &ListArgs, sort: &'static str) -> ListResult<'a> {
    let total = items.len();
    let pages = ((total + args.limit - 1) / args.limit).max(1);
    let page = args.page.min(pages).max(1);
    let start = (page - 1) * args.limit;
    let end = (start + args.limit).min(total);
    let page_items: Vec<&Library> = if start < total {
        items[start..end].to_vec()
    } else {
        Vec::new()
    };

    ListResult {
        items: page_items,
        total,
        page,
        limit: args.limit,
        pages,
        sort,
        query: args.q.map(str::to_string),
        category: args.category.map(str::to_string),
        tag: args.tag.map(str::to_string),
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn dataset_entries_have_all_fields() {
        let store = Store::load();
        assert_eq!(store.total(), 779);
        for lib in &store.libraries {
            assert!(!lib.title.is_empty(), "empty title on id {}", lib.id);
            assert!(!lib.description.is_empty(), "empty description on {}", lib.title);
            assert!(!lib.usage.is_empty(), "empty usage on {}", lib.title);
            assert!(!lib.category.is_empty(), "empty category on {}", lib.title);
            assert!(!lib.tags.is_empty(), "no tags on {}", lib.title);
            assert!(
                lib.slug
                    .chars()
                    .all(|c| c.is_ascii_lowercase() || c.is_ascii_digit() || c == '-'),
                "bad slug: {}",
                lib.slug
            );
        }
    }

    #[test]
    fn slugs_resolve_back_through_find() {
        let store = Store::load();
        for lib in store.libraries.iter().take(50) {
            let hit = store.find(&lib.slug);
            assert!(hit.is_some(), "slug {} not found", lib.slug);
            assert_eq!(hit.unwrap().0.slug, lib.slug);
        }
    }
}
