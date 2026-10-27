//! Server entry point. PORT (default 3000) and HOST (default 0.0.0.0) come
//! from the environment.

use actix_web::{web, App, HttpServer};

use node_modules_details_api::{configure, handlers, store::Store};

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let store = Store::load();
    let total = store.total();
    let categories = store.categories().len();

    let port: u16 = std::env::var("PORT")
        .ok()
        .and_then(|p| p.trim().parse().ok())
        .unwrap_or(3000);
    let host = std::env::var("HOST").unwrap_or_else(|_| "0.0.0.0".to_string());

    println!("📦 Node Modules Details API — Rust + Actix Web edition");
    println!("   → {total} libraries across {categories} categories");
    println!("   → UI:      http://{host}:{port}/");
    println!("   → API:     http://{host}:{port}/api");
    println!("   → Health:  http://{host}:{port}/api/health");

    HttpServer::new(move || {
        App::new()
            .configure(configure)
            .default_service(web::to(handlers::ui_fallback))
    })
    .bind((host.as_str(), port))?
    .run()
    .await
}
