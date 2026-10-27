//! HTTP handlers for every route. All JSON responses flow through
//! [`json_response`]/[`ok`] so headers (CORS, nosniff, cache) stay consistent.

use std::sync::OnceLock;
use std::time::Instant;

use actix_web::http::header;
use actix_web::http::StatusCode;
use actix_web::web::{Data, Path, Query};
use actix_web::{HttpRequest, HttpResponse, ResponseError};
use serde::Deserialize;
use serde_json::{json, Value};

use crate::error::ApiError;
use crate::openapi;
use crate::store::{ListArgs, SortKey, Store, DEFAULT_LIMIT, MAX_LIMIT};

const INDEX_HTML: &str = include_str!("../public/index.html");

static STARTED_AT: OnceLock<Instant> = OnceLock::new();

// ---------------------------------------------------------------------------
// Response helpers
// ---------------------------------------------------------------------------

/// Every API response: CORS-open, nosniff, short client-side caching.
pub fn json_response(status: StatusCode, body: Value) -> HttpResponse {
    HttpResponse::build(status)
        .insert_header((header::ACCESS_CONTROL_ALLOW_ORIGIN, "*"))
        .insert_header((header::ACCESS_CONTROL_ALLOW_METHODS, "GET, OPTIONS"))
        .insert_header((header::X_CONTENT_TYPE_OPTIONS, "nosniff"))
        .insert_header((header::CACHE_CONTROL, "public, max-age=300"))
        .json(body)
}

fn ok(data: Value) -> HttpResponse {
    json_response(StatusCode::OK, json!({ "success": true, "data": data }))
}

fn ok_with_meta(data: Value, meta: Value) -> HttpResponse {
    json_response(
        StatusCode::OK,
        json!({ "success": true, "data": data, "meta": meta }),
    )
}

fn html(status: StatusCode, body: &'static str) -> HttpResponse {
    HttpResponse::build(status)
        .insert_header((header::ACCESS_CONTROL_ALLOW_ORIGIN, "*"))
        .insert_header((header::ACCESS_CONTROL_ALLOW_METHODS, "GET, OPTIONS"))
        .insert_header((header::X_CONTENT_TYPE_OPTIONS, "nosniff"))
        .content_type("text/html; charset=utf-8")
        .body(body)
}

// ---------------------------------------------------------------------------
// Query parsing helpers
// ---------------------------------------------------------------------------

#[derive(Debug, Deserialize)]
pub struct LibrariesQuery {
    pub q: Option<String>,
    pub category: Option<String>,
    pub tag: Option<String>,
    pub sort: Option<String>,
    pub page: Option<String>,
    pub limit: Option<String>,
}

#[derive(Debug, Deserialize)]
pub struct RandomQuery {
    pub count: Option<String>,
}

/// `None` for absent/empty values — mirrors the JS `q || null` echo in `meta`.
fn non_empty(s: &Option<String>) -> Option<&str> {
    s.as_deref().filter(|v| !v.is_empty())
}

/// Strict positive-integer parsing: junk input is a 400, not a silent default.
/// Empty values are treated as absent (clients often send `?page=`).
fn parse_positive_int(value: &Option<String>, name: &str) -> Result<Option<usize>, ApiError> {
    match value {
        None => Ok(None),
        Some(v) if v.is_empty() => Ok(None),
        Some(v) if v.chars().all(|c| c.is_ascii_digit()) => {
            Ok(Some(v.parse::<usize>().unwrap_or(usize::MAX)))
        }
        Some(_) => Err(ApiError::bad_request(format!(
            "Query parameter \"{name}\" must be a positive integer."
        ))),
    }
}

fn validate_sort(sort: Option<&str>) -> Result<(), ApiError> {
    if let Some(sort) = sort {
        if SortKey::parse(sort).is_none() {
            let supported = SortKey::supported();
            return Err(ApiError::bad_request_with_supported(
                format!(
                    "Invalid \"sort\" value. Supported: {}.",
                    supported.join(", ")
                ),
                &supported,
            ));
        }
    }
    Ok(())
}

fn run_list(store: &Store, args: ListArgs) -> HttpResponse {
    let result = store.list(&args);
    let meta = json!({
        "total": result.total,
        "page": result.page,
        "limit": result.limit,
        "pages": result.pages,
        "sort": result.sort,
        "query": result.query,
        "category": result.category,
        "tag": result.tag,
        "hasNext": result.page < result.pages,
        "hasPrev": result.page > 1,
    });
    ok_with_meta(json!(result.items), meta)
}

// ---------------------------------------------------------------------------
// Handlers
// ---------------------------------------------------------------------------

/// `GET /api` — endpoint directory.
pub async fn api_index() -> HttpResponse {
    ok(json!({
        "name": "Node Modules Details API",
        "version": env!("CARGO_PKG_VERSION"),
        "description": "Documentation for 779 Node.js libraries: descriptions, usage examples, tags and categories.",
        "endpoints": [
            { "method": "GET", "path": "/api/health", "description": "Liveness probe" },
            { "method": "GET", "path": "/api/stats", "description": "Dataset statistics (categories, tags)" },
            { "method": "GET", "path": "/api/libraries", "description": "List / filter / search libraries (paginated)" },
            { "method": "GET", "path": "/api/libraries/:slug", "description": "Get a single library by slug or id" },
            { "method": "GET", "path": "/api/categories", "description": "List all categories with counts" },
            { "method": "GET", "path": "/api/tags", "description": "List all tags with counts" },
            { "method": "GET", "path": "/api/search", "description": "Full-text search (same params as /api/libraries, q required)" },
            { "method": "GET", "path": "/api/random", "description": "Random libraries (?count=n)" },
            { "method": "GET", "path": "/api/openapi.json", "description": "OpenAPI 3.0 specification" }
        ],
        "docs": "/"
    }))
}

/// `GET /api/health` — liveness probe.
pub async fn health() -> HttpResponse {
    let started = STARTED_AT.get_or_init(Instant::now);
    ok(json!({
        "status": "ok",
        "uptime": started.elapsed().as_secs_f64(),
        "timestamp": chrono::Utc::now().to_rfc3339_opts(chrono::SecondsFormat::Millis, true),
    }))
}

/// `GET /api/stats` — dataset statistics.
pub async fn stats(store: Data<Store>) -> HttpResponse {
    ok(store.stats())
}

/// `GET /api/categories` — categories with counts.
pub async fn categories(store: Data<Store>) -> HttpResponse {
    let categories = store.categories();
    ok_with_meta(json!(categories), json!({ "total": categories.len() }))
}

/// `GET /api/tags` — tags with counts.
pub async fn tags(store: Data<Store>) -> HttpResponse {
    let tags = store.tags();
    ok_with_meta(json!(tags), json!({ "total": tags.len() }))
}

/// `GET /api/libraries` — list / filter / search, paginated.
pub async fn libraries(
    store: Data<Store>,
    query: Query<LibrariesQuery>,
) -> Result<HttpResponse, ApiError> {
    let page = parse_positive_int(&query.page, "page")?.unwrap_or(1);
    let limit = parse_positive_int(&query.limit, "limit")?
        .unwrap_or(DEFAULT_LIMIT)
        .clamp(1, MAX_LIMIT);

    validate_sort(non_empty(&query.sort))?;

    if let Some(category) = non_empty(&query.category) {
        if !store.has_category(category) {
            return Err(ApiError::bad_category(
                category,
                &store.category_names(),
            ));
        }
    }

    let args = ListArgs {
        q: non_empty(&query.q),
        category: non_empty(&query.category),
        tag: non_empty(&query.tag),
        sort: non_empty(&query.sort),
        page,
        limit,
    };

    Ok(run_list(&store, args))
}

/// `GET /api/search?q=...` — ranked full-text search (q required).
pub async fn search(
    store: Data<Store>,
    query: Query<LibrariesQuery>,
) -> Result<HttpResponse, ApiError> {
    let q = non_empty(&query.q).ok_or_else(ApiError::missing_query)?;

    let page = parse_positive_int(&query.page, "page")?.unwrap_or(1);
    let limit = parse_positive_int(&query.limit, "limit")?
        .unwrap_or(DEFAULT_LIMIT)
        .clamp(1, MAX_LIMIT);

    validate_sort(non_empty(&query.sort))?;

    let args = ListArgs {
        q: Some(q),
        category: non_empty(&query.category),
        tag: non_empty(&query.tag),
        sort: non_empty(&query.sort),
        page,
        limit,
    };

    Ok(run_list(&store, args))
}

/// `GET /api/libraries/{key}` — single entry by slug or numeric id.
pub async fn library(
    store: Data<Store>,
    path: Path<String>,
) -> Result<HttpResponse, ApiError> {
    let key = path.into_inner();
    match store.find(&key) {
        Some((lib, matches)) => {
            Ok(ok_with_meta(json!(lib), json!({ "matches": matches })))
        }
        None => Err(ApiError::library_not_found(&key)),
    }
}

/// `GET /api/random?count=n` — distinct random picks.
pub async fn random(
    store: Data<Store>,
    query: Query<RandomQuery>,
) -> Result<HttpResponse, ApiError> {
    let count = parse_positive_int(&query.count, "count")?.unwrap_or(1);
    let picks = store.random(count);
    let reported = count.clamp(1, MAX_LIMIT);
    Ok(ok_with_meta(json!(picks), json!({ "count": reported })))
}

/// `GET /api/openapi.json` — the raw OpenAPI spec (no success envelope).
pub async fn openapi() -> HttpResponse {
    json_response(StatusCode::OK, openapi::spec())
}

/// Fallback for unknown `/api/*` routes — JSON 404 with a hint.
pub async fn api_not_found(req: HttpRequest) -> HttpResponse {
    ApiError::route_not_found(req.method().as_str(), req.path()).error_response()
}

/// `GET /` — the browsable documentation UI.
pub async fn index() -> HttpResponse {
    html(StatusCode::OK, INDEX_HTML)
}

/// Fallback for unknown non-API routes — the UI with a 404 status.
pub async fn ui_fallback() -> HttpResponse {
    html(StatusCode::NOT_FOUND, INDEX_HTML)
}
