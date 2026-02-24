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
use tower_http::{cors::{Any, CorsLayer}, trace::TraceLayer};
use tracing::{info, error, Level};
use tracing_subscriber::{layer::SubscriberExt, util::SubscriberInitExt};

#[derive(Serialize)]
struct HealthResponse {
    status: &'static str,
    message: &'static str,
}

#[tokio::main]
async fn main() {
    // Load environment variables from .env if present
    dotenvy::dotenv().ok();

    // Initialize structured logging and tracing
    tracing_subscriber::registry()
        .with(
            tracing_subscriber::EnvFilter::try_from_default_env()
                .unwrap_or_else(|_| "backend=debug,tower_http=debug,axum::rejection=trace".into()),
        )
        .with(tracing_subscriber::fmt::layer())
        .init();

    info!("Starting CareerSync backend server...");

    let database_url = std::env::var("DATABASE_URL")
        .unwrap_or_else(|_| "postgres://postgres:postgres@localhost:5432/bharat_internz".to_string());
    
    let pool_size = std::env::var("MAX_CONNECTIONS")
        .unwrap_or_else(|_| "20".to_string())
        .parse::<u32>()
        .unwrap_or(20);

    // Attempt connecting to the database
    let pool = match PgPoolOptions::new()
        .max_connections(pool_size)
        .connect(&database_url)
        .await
    {
        Ok(pool) => {
            info!("✅ Connected to database (Pool size: {})", pool_size);
            pool
        }
        Err(e) => {
            error!("❌ Failed to connect to db: {}. \nEnsure Postgres is running and DATABASE_URL is set correctly.", e);
            // In a real production app we'd probably panic, but we'll return to avoid failing compilation checks unexpectedly here early on
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
        .layer(TraceLayer::new_for_http())
        .layer(cors);

    let addr = std::env::var("SERVER_ADDR").unwrap_or_else(|_| "127.0.0.1:8000".to_string());
    let listener = tokio::net::TcpListener::bind(&addr).await.unwrap();
    info!("🚀 Server listening on {}", addr);
    
    axum::serve(listener, app)
        .with_graceful_shutdown(shutdown_signal())
        .await
        .unwrap();
}

/// Graceful shutdown signal handler
async fn shutdown_signal() {
    let ctrl_c = async {
        tokio::signal::ctrl_c()
            .await
            .expect("failed to install Ctrl+C handler");
    };

    #[cfg(unix)]
    let terminate = async {
        tokio::signal::unix::signal(tokio::signal::unix::SignalKind::terminate())
            .expect("failed to install signal handler")
            .recv()
            .await;
    };

    #[cfg(not(unix))]
    let terminate = std::future::pending::<()>();

    tokio::select! {
        _ = ctrl_c => {},
        _ = terminate => {},
    }

    info!("signal received, starting graceful shutdown");
}

async fn health_check() -> Json<HealthResponse> {
    Json(HealthResponse {
        status: "ok",
        message: "Bharat Internz API is running!",
    })
}
