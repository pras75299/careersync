pub mod models;
pub mod api;
pub mod fetcher;

use axum::{
    routing::get,
    Router,
    Json,
};
use serde::Serialize;
use sqlx::postgres::PgPoolOptions;
use std::net::SocketAddr;
use tower_http::cors::{Any, CorsLayer};

#[derive(Serialize)]
struct HealthResponse {
    status: &'static str,
    message: &'static str,
}

#[tokio::main]
async fn main() {
    env_logger::init();
    println!("Starting server...");

    let database_url = std::env::var("DATABASE_URL").unwrap_or_else(|_| "postgres://postgres:postgres@localhost:5432/bharat_internz".to_string());
    
    // Attempt connecting to the database
    let pool = match PgPoolOptions::new()
        .max_connections(5)
        .connect(&database_url)
        .await
    {
        Ok(pool) => {
            println!("✅ Connected to database");
            pool
        }
        Err(e) => {
            eprintln!("❌ Failed to connect to db: {}. \nEnsure Postgres is running and DATABASE_URL is set correctly.", e);
            // We'll return early or run without DB for now to let compilation pass
            // In a real app we'd probably panic
            return;
        }
    };

    // Spawn background fetcher
    fetcher::start_background_fetcher(pool.clone()).await;

    let cors = CorsLayer::new()
        .allow_origin(Any)
        .allow_methods(Any)
        .allow_headers(Any);

    let app = Router::new()
        .route("/api/health", get(health_check))
        .nest("/api", api::app_router())
        .with_state(pool)
        .layer(cors);

    let addr = SocketAddr::from(([127, 0, 0, 1], 8000));
    println!("🚀 Server listening on {}", addr);
    
    let listener = tokio::net::TcpListener::bind(addr).await.unwrap();
    axum::serve(listener, app).await.unwrap();
}

async fn health_check() -> Json<HealthResponse> {
    Json(HealthResponse {
        status: "ok",
        message: "Bharat Internz API is running!",
    })
}
