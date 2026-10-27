'use strict';

/**
 * Data layer for the Node Modules Details API.
 *
 * Wraps data.js (779 library documentation entries) with search,
 * filtering, pagination and lookup helpers.
 */

const raw = require('../../data.js');

const slugify = (title) =>
  String(title)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

/** Enriched entries with a stable id and a URL-friendly slug. */
const libraries = raw.map((entry, index) => ({
  ...entry,
  id: index + 1,
  slug: slugify(entry.title),
}));

/** slug -> all matching entries (some titles collide, e.g. "Nodemailer"). */
const bySlug = new Map();
for (const lib of libraries) {
  if (!bySlug.has(lib.slug)) bySlug.set(lib.slug, []);
  bySlug.get(lib.slug).push(lib);
}

/** category -> count, sorted by count descending then name. */
const categoryCounts = (() => {
  const counts = new Map();
  for (const lib of libraries) {
    counts.set(lib.category, (counts.get(lib.category) || 0) + 1);
  }
  return [...counts.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
})();

/** tag -> count, sorted by count descending then name. */
const tagCounts = (() => {
  const counts = new Map();
  for (const lib of libraries) {
    for (const tag of lib.tags || []) {
      counts.set(tag, (counts.get(tag) || 0) + 1);
    }
  }
  return [...counts.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
})();

const CATEGORY_NAMES = new Set(categoryCounts.map((c) => c.name.toLowerCase()));

const DEFAULT_LIMIT = 20;
const MAX_LIMIT = 100;

const SORTERS = {
  title: (a, b) => a.title.localeCompare(b.title),
  '-title': (a, b) => b.title.localeCompare(a.title),
  category: (a, b) =>
    a.category.localeCompare(b.category) || a.title.localeCompare(b.title),
  '-category': (a, b) =>
    b.category.localeCompare(a.category) || a.title.localeCompare(b.title),
  id: (a, b) => a.id - b.id,
  '-id': (a, b) => b.id - a.id,
};

/**
 * Relevance score for a single entry against search tokens.
 * Title matches weigh the most, then tags, then description.
 */
function scoreEntry(entry, tokens) {
  const title = entry.title.toLowerCase();
  const description = entry.description.toLowerCase();
  const tags = (entry.tags || []).map((t) => String(t).toLowerCase());
  let score = 0;

  for (const token of tokens) {
    if (title === token) score += 10;
    else if (title.startsWith(token)) score += 6;
    else if (title.includes(token)) score += 4;

    if (tags.includes(token)) score += 3;
    else if (tags.some((t) => t.includes(token))) score += 1;

    if (description.includes(token)) score += 1;
  }
  return score;
}

function parsePagination(query) {
  let page = Number.parseInt(String(query.page || '1'), 10);
  let limit = Number.parseInt(String(query.limit || String(DEFAULT_LIMIT)), 10);

  if (!Number.isFinite(page) || page < 1) page = 1;
  if (!Number.isFinite(limit) || limit < 1) limit = DEFAULT_LIMIT;
  if (limit > MAX_LIMIT) limit = MAX_LIMIT;

  return { page, limit };
}

/**
 * Core list/search query.
 *
 * Options:
 *  - q:        free-text search across title, tags and description
 *  - category: exact category filter (case-insensitive)
 *  - tag:      exact tag filter (case-insensitive)
 *  - page:     1-based page number
 *  - limit:    page size (capped at MAX_LIMIT)
 *  - sort:     title | -title | category | -category | id | -id
 *              (defaults to relevance when q is present, otherwise title)
 */
function listLibraries({ q, category, tag, page, limit, sort } = {}) {
  const tokens = String(q || '')
    .toLowerCase()
    .split(/\s+/)
    .filter((t) => t.length > 0);

  let results = libraries;

  if (category) {
    const wanted = String(category).toLowerCase();
    results = results.filter((lib) => lib.category.toLowerCase() === wanted);
  }

  if (tag) {
    const wanted = String(tag).toLowerCase();
    results = results.filter((lib) =>
      (lib.tags || []).some((t) => String(t).toLowerCase() === wanted)
    );
  }

  let appliedSort;
  if (tokens.length > 0) {
    const scored = results
      .map((lib) => ({ lib, score: scoreEntry(lib, tokens) }))
      .filter((s) => s.score > 0);
    scored.sort(
      (a, b) => b.score - a.score || a.lib.title.localeCompare(b.lib.title)
    );
    results = scored.map((s) => s.lib);
    appliedSort = 'relevance';
    if (sort && SORTERS[sort]) {
      results = [...results].sort(SORTERS[sort]);
      appliedSort = sort;
    }
  } else {
    appliedSort = sort && SORTERS[sort] ? sort : 'title';
    results = [...results].sort(SORTERS[appliedSort]);
  }

  const total = results.length;
  const pages = Math.max(1, Math.ceil(total / limit));
  const safePage = Math.min(page, pages);
  const start = (safePage - 1) * limit;

  return {
    data: results.slice(start, start + limit),
    meta: {
      total,
      page: safePage,
      limit,
      pages,
      sort: appliedSort,
      query: q || null,
      category: category || null,
      tag: tag || null,
      hasNext: safePage < pages,
      hasPrev: safePage > 1,
    },
  };
}

/** Look up entries by slug (or numeric id). Returns all matches + first hit. */
function getLibrary(key) {
  const entries = bySlug.get(String(key).toLowerCase());
  if (entries) {
    return { entry: entries[0], matches: entries.length };
  }
  const id = Number.parseInt(String(key), 10);
  if (Number.isFinite(id) && id >= 1 && id <= libraries.length) {
    return { entry: libraries[id - 1], matches: 1 };
  }
  return null;
}

function getRandomLibraries(count = 1) {
  const picks = [];
  const pool = [...libraries];
  const n = Math.min(Math.max(count, 1), MAX_LIMIT, pool.length);
  for (let i = 0; i < n; i += 1) {
    picks.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
  }
  return picks;
}

function getStats() {
  return {
    totalLibraries: libraries.length,
    totalCategories: categoryCounts.length,
    totalTags: tagCounts.length,
    categories: categoryCounts,
    topTags: tagCounts.slice(0, 25),
  };
}

function hasCategory(name) {
  return CATEGORY_NAMES.has(String(name).toLowerCase());
}

module.exports = {
  libraries,
  DEFAULT_LIMIT,
  MAX_LIMIT,
  SORTERS,
  parsePagination,
  listLibraries,
  getLibrary,
  getRandomLibraries,
  getStats,
  hasCategory,
  categoryCounts,
  tagCounts,
  slugify,
};
