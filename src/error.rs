//! Unified JSON error envelope: `{ "success": false, "error": { … } }`.
//!
//! `ApiError` implements Actix's `ResponseError`, so handlers can simply
//! return `Result<HttpResponse, ApiError>` and every failure — validation,
//! unknown routes, missing entries — comes out as consistent JSON.

use actix_web::http::StatusCode;
use actix_web::{HttpResponse, ResponseError};
use serde_json::{json, Map, Value};

use crate::handlers::json_response;

#[derive(Debug)]
pub struct ApiError {
    status: StatusCode,
    code: &'static str,
    message: String,
    hint: Option<String>,
    extra: Option<Map<String, Value>>,
}

impl ApiError {
    fn new(status: StatusCode, code: &'static str, message: impl Into<String>) -> Self {
        ApiError {
            status,
            code,
            message: message.into(),
            hint: None,
            extra: None,
        }
    }

    pub fn bad_request(message: impl Into<String>) -> Self {
        Self::new(StatusCode::BAD_REQUEST, "BAD_REQUEST", message)
    }

    /// A 400 that also carries an `error.supported` array (sort keys, categories).
    pub fn bad_request_with_supported(message: impl Into<String>, supported: &[&str]) -> Self {
        let mut err = Self::bad_request(message);
        let mut extra = Map::new();
        extra.insert("supported".to_string(), json!(supported));
        err.extra = Some(extra);
        err
    }

    pub fn bad_category(name: &str, supported: &[String]) -> Self {
        let mut err = Self::new(
            StatusCode::BAD_REQUEST,
            "BAD_CATEGORY",
            format!("Unknown category \"{name}\"."),
        );
        let mut extra = Map::new();
        extra.insert("supported".to_string(), json!(supported));
        err.extra = Some(extra);
        err
    }

    pub fn missing_query() -> Self {
        Self::new(
            StatusCode::BAD_REQUEST,
            "MISSING_QUERY",
            "Query parameter \"q\" is required for search.",
        )
    }

    pub fn library_not_found(key: &str) -> Self {
        let mut err = Self::new(
            StatusCode::NOT_FOUND,
            "NOT_FOUND",
            format!("No library found for \"{key}\"."),
        );
        err.hint =
            Some("Try /api/libraries to list entries, or /api/search?q=... to find one.".to_string());
        err
    }

    pub fn route_not_found(method: &str, path: &str) -> Self {
        let mut err = Self::new(
            StatusCode::NOT_FOUND,
            "NOT_FOUND",
            format!("Unknown API route: {method} {path}"),
        );
        err.hint = Some("GET /api lists every available endpoint.".to_string());
        err
    }
}

impl std::fmt::Display for ApiError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{}", self.message)
    }
}

impl std::error::Error for ApiError {}

impl ResponseError for ApiError {
    fn status_code(&self) -> StatusCode {
        self.status
    }

    fn error_response(&self) -> HttpResponse {
        let mut error = json!({
            "code": self.code,
            "message": self.message,
        });
        if let Some(hint) = &self.hint {
            error["hint"] = json!(hint);
        }
        if let Some(extra) = &self.extra {
            if let Some(obj) = error.as_object_mut() {
                for (k, v) in extra {
                    obj.insert(k.clone(), v.clone());
                }
            }
        }
        json_response(self.status, json!({ "success": false, "error": error }))
    }
}
