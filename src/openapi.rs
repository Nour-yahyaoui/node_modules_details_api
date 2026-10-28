//! Compact OpenAPI 3.0 description of the public API, served at
//! `GET /api/openapi.json`.

use serde_json::{json, Value};

pub fn spec() -> Value {
    json!({
        "openapi": "3.0.3",
        "info": {
            "title": "Node Modules Details API",
            "version": env!("CARGO_PKG_VERSION"),
            "description": "REST API over a curated dataset of Node.js library documentation — descriptions, usage examples, tags and categories for 779 libraries.",
            "license": { "name": "MIT" }
        },
        "servers": [{ "url": "/" }],
        "paths": {
            "/api/health": {
                "get": {
                    "summary": "Liveness probe",
                    "responses": { "200": { "description": "Service is up" } }
                }
            },
            "/api/stats": {
                "get": {
                    "summary": "Dataset statistics",
                    "description": "Totals plus per-category and top-tag counts.",
                    "responses": { "200": { "description": "Statistics object" } }
                }
            },
            "/api/libraries": {
                "get": {
                    "summary": "List, filter and search libraries",
                    "parameters": [
                        { "name": "q", "in": "query", "schema": { "type": "string" }, "description": "Free-text search across title, tags and description" },
                        { "name": "category", "in": "query", "schema": { "type": "string" }, "description": "Exact category filter (e.g. \"Web Framework\")" },
                        { "name": "tag", "in": "query", "schema": { "type": "string" }, "description": "Exact tag filter (e.g. \"websocket\")" },
                        { "name": "page", "in": "query", "schema": { "type": "integer", "minimum": 1, "default": 1 } },
                        { "name": "limit", "in": "query", "schema": { "type": "integer", "minimum": 1, "maximum": 100, "default": 20 } },
                        { "name": "sort", "in": "query", "schema": { "type": "string", "enum": ["title", "-title", "category", "-category", "id", "-id"] }, "description": "Defaults to relevance when q is given, otherwise title" }
                    ],
                    "responses": {
                        "200": { "description": "Paginated list of libraries" },
                        "400": { "description": "Invalid query parameter" }
                    }
                }
            },
            "/api/libraries/{slug}": {
                "get": {
                    "summary": "Get a single library by slug or numeric id",
                    "parameters": [
                        { "name": "slug", "in": "path", "required": true, "schema": { "type": "string" }, "description": "URL-friendly title, e.g. \"express\", or numeric id" }
                    ],
                    "responses": {
                        "200": { "description": "A single library entry" },
                        "404": { "description": "No library matches the key" }
                    }
                }
            },
            "/api/categories": {
                "get": {
                    "summary": "List categories with counts",
                    "responses": { "200": { "description": "Category list" } }
                }
            },
            "/api/tags": {
                "get": {
                    "summary": "List tags with counts",
                    "responses": { "200": { "description": "Tag list" } }
                }
            },
            "/api/search": {
                "get": {
                    "summary": "Full-text search (requires q)",
                    "parameters": [
                        { "name": "q", "in": "query", "required": true, "schema": { "type": "string" } }
                    ],
                    "responses": {
                        "200": { "description": "Ranked, paginated results" },
                        "400": { "description": "Missing q parameter" }
                    }
                }
            },
            "/api/random": {
                "get": {
                    "summary": "Random libraries",
                    "parameters": [
                        { "name": "count", "in": "query", "schema": { "type": "integer", "minimum": 1, "maximum": 100, "default": 1 } }
                    ],
                    "responses": { "200": { "description": "Random selection" } }
                }
            }
        }
    })
}
