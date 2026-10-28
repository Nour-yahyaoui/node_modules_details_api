//! Integration tests — a 1:1 port of the original Node test suite, running
//! against the real Actix app via `actix_web::test`.

use std::collections::HashSet;

use actix_web::http::StatusCode;
use actix_web::web;
use actix_web::{test, App};
use node_modules_details_api::{configure, handlers, store::Store};
use serde_json::Value;

macro_rules! app {
    () => {
        test::init_service(
            App::new()
                .configure(configure)
                .default_service(web::to(handlers::ui_fallback)),
        )
        .await
    };
}

/// GET a URI from the test app and decode the JSON response.
/// A macro (rather than a generic fn) so we never have to name the
/// unnameable `impl Service` type returned by `init_service`.
macro_rules! get {
    ($app:expr, $uri:expr) => {{
        let req = test::TestRequest::get().uri($uri).to_request();
        let resp = test::call_service(&$app, req).await;
        let status = resp.status();
        let headers = resp.headers().clone();
        let bytes = test::read_body(resp).await;
        let body: Value = serde_json::from_slice(&bytes).expect("response should be JSON");
        (status, headers, body)
    }};
}

// ---------------------------------------------------------------------------
// Health & API index
// ---------------------------------------------------------------------------

#[actix_web::test]
async fn health_returns_ok() {
    let app = app!();
    let (status, _, body) = get!(app, "/api/health");
    assert_eq!(status, StatusCode::OK);
    assert_eq!(body["success"], true);
    assert_eq!(body["data"]["status"], "ok");
    assert!(body["data"]["uptime"].as_f64().unwrap() >= 0.0);
    assert!(body["data"]["timestamp"].as_str().unwrap().ends_with('Z'));
}

#[actix_web::test]
async fn api_index_lists_all_endpoints() {
    let app = app!();
    let (status, _, body) = get!(app, "/api");
    assert_eq!(status, StatusCode::OK);
    let endpoints = body["data"]["endpoints"].as_array().unwrap();
    assert!(endpoints.len() >= 8);
    assert_eq!(body["data"]["name"], "Node Modules Details API");
}

// ---------------------------------------------------------------------------
// Stats, categories, tags
// ---------------------------------------------------------------------------

#[actix_web::test]
async fn stats_match_the_dataset() {
    let app = app!();
    let store = Store::load();
    let (status, _, body) = get!(app, "/api/stats");
    assert_eq!(status, StatusCode::OK);
    assert_eq!(body["data"]["totalLibraries"], store.total() as u64);
    assert_eq!(body["data"]["totalCategories"], 17);
    let category_total: u64 = body["data"]["categories"]
        .as_array()
        .unwrap()
        .iter()
        .map(|c| c["count"].as_u64().unwrap())
        .sum();
    assert_eq!(category_total, store.total() as u64);
}

#[actix_web::test]
async fn categories_return_sorted_counts() {
    let app = app!();
    let (status, _, body) = get!(app, "/api/categories");
    assert_eq!(status, StatusCode::OK);
    assert_eq!(body["meta"]["total"], 17);
    let categories = body["data"].as_array().unwrap();
    for pair in categories.windows(2) {
        assert!(pair[0]["count"].as_u64().unwrap() >= pair[1]["count"].as_u64().unwrap());
    }
}

#[actix_web::test]
async fn tags_are_unique() {
    let app = app!();
    let (_, _, body) = get!(app, "/api/tags");
    let names: HashSet<&str> = body["data"]
        .as_array()
        .unwrap()
        .iter()
        .map(|t| t["name"].as_str().unwrap())
        .collect();
    assert_eq!(names.len(), body["data"].as_array().unwrap().len());
    assert!(names.len() > 1000);
}

// ---------------------------------------------------------------------------
// Library listing & pagination
// ---------------------------------------------------------------------------

#[actix_web::test]
async fn libraries_paginate_with_sensible_defaults() {
    let app = app!();
    let (status, _, body) = get!(app, "/api/libraries");
    assert_eq!(status, StatusCode::OK);
    assert_eq!(body["data"].as_array().unwrap().len(), 20);
    assert_eq!(body["meta"]["total"], 779);
    assert_eq!(body["meta"]["page"], 1);
    assert_eq!(body["meta"]["hasNext"], true);
    assert_eq!(body["meta"]["hasPrev"], false);
}

#[actix_web::test]
async fn libraries_respect_page_and_limit() {
    let app = app!();
    let (status, _, body) = get!(app, "/api/libraries?page=2&limit=5");
    assert_eq!(status, StatusCode::OK);
    assert_eq!(body["meta"]["page"], 2);
    assert_eq!(body["data"].as_array().unwrap().len(), 5);
    let items = body["data"].as_array().unwrap();
    assert!(items[0]["title"].as_str().unwrap() <= items[1]["title"].as_str().unwrap());
}

#[actix_web::test]
async fn libraries_cap_limit_at_100() {
    let app = app!();
    let (_, _, body) = get!(app, "/api/libraries?limit=10000");
    assert_eq!(body["meta"]["limit"], 100);
    assert_eq!(body["data"].as_array().unwrap().len(), 100);
}

#[actix_web::test]
async fn out_of_range_page_clamps_to_last_page() {
    let app = app!();
    let (_, _, body) = get!(app, "/api/libraries?page=9999&limit=50");
    assert_eq!(body["meta"]["page"], body["meta"]["pages"]);
    assert!(!body["data"].as_array().unwrap().is_empty());
}

#[actix_web::test]
async fn junk_pagination_is_rejected() {
    let app = app!();
    let (status, _, body) = get!(app, "/api/libraries?page=potato");
    assert_eq!(status, StatusCode::BAD_REQUEST);
    assert_eq!(body["success"], false);
    assert_eq!(body["error"]["code"], "BAD_REQUEST");
}

#[actix_web::test]
async fn unknown_category_is_rejected_with_valid_list() {
    let app = app!();
    let (status, _, body) = get!(app, "/api/libraries?category=Nope");
    assert_eq!(status, StatusCode::BAD_REQUEST);
    assert_eq!(body["error"]["code"], "BAD_CATEGORY");
    let supported: Vec<&str> = body["error"]["supported"]
        .as_array()
        .unwrap()
        .iter()
        .map(|v| v.as_str().unwrap())
        .collect();
    assert!(supported.contains(&"Web Framework"));
}

#[actix_web::test]
async fn category_filter_is_case_insensitive() {
    let app = app!();
    let (_, _, body) = get!(app, "/api/libraries?category=web%20framework&limit=100");
    assert!(body["meta"]["total"].as_u64().unwrap() > 0);
    for lib in body["data"].as_array().unwrap() {
        assert_eq!(lib["category"], "Web Framework");
    }
}

#[actix_web::test]
async fn tag_filter_works() {
    let app = app!();
    let (_, _, body) = get!(app, "/api/libraries?tag=websocket");
    assert!(body["meta"]["total"].as_u64().unwrap() >= 3);
    for lib in body["data"].as_array().unwrap() {
        let tags: Vec<&str> = lib["tags"]
            .as_array()
            .unwrap()
            .iter()
            .map(|t| t.as_str().unwrap())
            .collect();
        assert!(tags.contains(&"websocket"));
    }
}

#[actix_web::test]
async fn sort_descending_title_works() {
    let app = app!();
    let (_, _, body) = get!(app, "/api/libraries?sort=-title&limit=30");
    let items = body["data"].as_array().unwrap();
    for pair in items.windows(2) {
        assert!(pair[0]["title"].as_str().unwrap() >= pair[1]["title"].as_str().unwrap());
    }
}

#[actix_web::test]
async fn unknown_sort_is_rejected() {
    let app = app!();
    let (status, _, _) = get!(app, "/api/libraries?sort=bogus");
    assert_eq!(status, StatusCode::BAD_REQUEST);
}

// ---------------------------------------------------------------------------
// Search
// ---------------------------------------------------------------------------

#[actix_web::test]
async fn search_requires_q() {
    let app = app!();
    let (status, _, body) = get!(app, "/api/search");
    assert_eq!(status, StatusCode::BAD_REQUEST);
    assert_eq!(body["error"]["code"], "MISSING_QUERY");
}

#[actix_web::test]
async fn search_finds_express_first() {
    let app = app!();
    let (status, _, body) = get!(app, "/api/search?q=express");
    assert_eq!(status, StatusCode::OK);
    assert_eq!(body["meta"]["sort"], "relevance");
    assert_eq!(body["data"][0]["slug"], "express");
}

#[actix_web::test]
async fn search_matches_tags() {
    let app = app!();
    let (_, _, body) = get!(app, "/api/search?q=websocket&limit=100");
    assert!(body["meta"]["total"].as_u64().unwrap() >= 3);
    let slugs: Vec<&str> = body["data"]
        .as_array()
        .unwrap()
        .iter()
        .map(|l| l["slug"].as_str().unwrap())
        .collect();
    assert!(slugs.contains(&"socket-io"));
}

#[actix_web::test]
async fn search_with_no_hits_returns_empty_page() {
    let app = app!();
    let (status, _, body) = get!(app, "/api/search?q=zzzznotathing");
    assert_eq!(status, StatusCode::OK);
    assert!(body["data"].as_array().unwrap().is_empty());
    assert_eq!(body["meta"]["total"], 0);
}

// ---------------------------------------------------------------------------
// Single library
// ---------------------------------------------------------------------------

#[actix_web::test]
async fn library_by_slug_returns_the_entry() {
    let app = app!();
    let (status, _, body) = get!(app, "/api/libraries/express");
    assert_eq!(status, StatusCode::OK);
    assert_eq!(body["data"]["title"], "Express");
    assert_eq!(body["data"]["category"], "Web Framework");
    assert!(body["data"]["tags"].is_array());
    assert!(body["data"]["usage"].as_str().unwrap().contains("express"));
}

#[actix_web::test]
async fn library_by_numeric_id_works() {
    let app = app!();
    let (_, _, body) = get!(app, "/api/libraries/1");
    assert_eq!(body["data"]["id"], 1);
}

#[actix_web::test]
async fn duplicate_titles_report_match_count() {
    let app = app!();
    // "Nodemailer" appears twice in the dataset
    let (_, _, body) = get!(app, "/api/libraries/nodemailer");
    assert_eq!(body["meta"]["matches"], 2);
}

#[actix_web::test]
async fn unknown_library_key_404s() {
    let app = app!();
    let (status, _, body) = get!(app, "/api/libraries/definitely-not-here");
    assert_eq!(status, StatusCode::NOT_FOUND);
    assert_eq!(body["error"]["code"], "NOT_FOUND");
    assert!(body["error"]["hint"].as_str().is_some());
}

// ---------------------------------------------------------------------------
// Random & OpenAPI
// ---------------------------------------------------------------------------

#[actix_web::test]
async fn random_returns_distinct_entries() {
    let app = app!();
    let (_, _, body) = get!(app, "/api/random?count=5");
    let items = body["data"].as_array().unwrap();
    assert_eq!(items.len(), 5);
    let ids: HashSet<u64> = items.iter().map(|l| l["id"].as_u64().unwrap()).collect();
    assert_eq!(ids.len(), 5);
}

#[actix_web::test]
async fn random_rejects_non_numeric_counts() {
    let app = app!();
    let (status, _, _) = get!(app, "/api/random?count=many");
    assert_eq!(status, StatusCode::BAD_REQUEST);
}

#[actix_web::test]
async fn openapi_spec_is_served() {
    let app = app!();
    let (status, _, body) = get!(app, "/api/openapi.json");
    assert_eq!(status, StatusCode::OK);
    assert_eq!(body["openapi"], "3.0.3");
    assert!(body["paths"]["/api/libraries"].is_object());
}

// ---------------------------------------------------------------------------
// Cross-cutting concerns
// ---------------------------------------------------------------------------

#[actix_web::test]
async fn empty_query_params_are_treated_as_absent() {
    // Regression test: the docs UI sends `?q=&category=&sort=` on first load;
    // those must behave like missing params, not 400s.
    let app = app!();
    let (status, _, body) = get!(app, "/api/libraries?q=&category=&sort=&page=&limit=");
    assert_eq!(status, StatusCode::OK);
    assert_eq!(body["meta"]["total"], 779);
    assert_eq!(body["meta"]["sort"], "title");
    assert_eq!(body["data"].as_array().unwrap().len(), 20);
}

#[actix_web::test]
async fn unknown_api_routes_return_json_404_with_hint() {
    let app = app!();
    let (status, _, body) = get!(app, "/api/definitely/not/a/route");
    assert_eq!(status, StatusCode::NOT_FOUND);
    assert_eq!(body["error"]["code"], "NOT_FOUND");
    assert!(body["error"]["hint"].as_str().unwrap().contains("/api"));
}

#[actix_web::test]
async fn responses_are_cors_enabled_and_cacheable() {
    let app = app!();
    let (_, headers, _) = get!(app, "/api/libraries?limit=1");
    assert_eq!(
        headers
            .get("access-control-allow-origin")
            .and_then(|v| v.to_str().ok())
            .unwrap_or(""),
        "*"
    );
    assert!(headers
        .get("cache-control")
        .and_then(|v| v.to_str().ok())
        .unwrap_or("")
        .contains("max-age=300"));
}

#[actix_web::test]
async fn ui_is_served_at_root_and_as_fallback() {
    let app = app!();
    let req = test::TestRequest::get().uri("/").to_request();
    let resp = test::call_service(&app, req).await;
    assert_eq!(resp.status(), StatusCode::OK);
    let bytes = test::read_body(resp).await;
    let html = String::from_utf8(bytes.to_vec()).unwrap();
    assert!(html.contains("Node Modules"));

    let req = test::TestRequest::get().uri("/nope").to_request();
    let resp = test::call_service(&app, req).await;
    assert_eq!(resp.status(), StatusCode::NOT_FOUND);
    let bytes = test::read_body(resp).await;
    let html = String::from_utf8(bytes.to_vec()).unwrap();
    assert!(html.contains("Node Modules"));
}
