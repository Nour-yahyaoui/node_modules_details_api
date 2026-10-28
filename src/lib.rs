//! Node Modules Details API — a REST API + browsable documentation UI for
//! 779 Node.js libraries, rewritten in Rust with Actix Web.

pub mod error;
pub mod handlers;
pub mod openapi;
pub mod store;

use actix_web::web;

/// Shared route + dependency configuration, used by both the server binary
/// (`src/main.rs`) and the integration test suite (`tests/api_test.rs`).
pub fn configure(cfg: &mut web::ServiceConfig) {
    cfg.app_data(web::Data::new(store::Store::load()))
        .service(
            web::scope("/api")
                .route("", web::get().to(handlers::api_index))
                .route("/", web::get().to(handlers::api_index))
                .route("/health", web::get().to(handlers::health))
                .route("/stats", web::get().to(handlers::stats))
                .route("/categories", web::get().to(handlers::categories))
                .route("/tags", web::get().to(handlers::tags))
                .route("/libraries", web::get().to(handlers::libraries))
                .route("/libraries/{key}", web::get().to(handlers::library))
                .route("/search", web::get().to(handlers::search))
                .route("/random", web::get().to(handlers::random))
                .route("/openapi.json", web::get().to(handlers::openapi))
                .default_service(web::to(handlers::api_not_found)),
        )
        .route("/", web::get().to(handlers::index));
}
