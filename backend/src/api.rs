use axum::{
    extract::{Path, State, Query},
    routing::get,
    Json, Router,
};
use serde::Deserialize;
use sqlx::PgPool;
use tracing::error;
use uuid::Uuid;

use crate::models::Internship;

pub fn app_router() -> Router<PgPool> {
    Router::new()
        .route("/internships", get(list_internships))
        .route("/internships/:id", get(get_internship))
}

#[derive(Deserialize)]
pub struct InternshipFilter {
    pub limit: Option<i64>,
    pub offset: Option<i64>,
}

async fn list_internships(
    State(pool): State<PgPool>,
    Query(filter): Query<InternshipFilter>,
) -> Result<Json<Vec<Internship>>, (axum::http::StatusCode, String)> {
    let limit = filter.limit.unwrap_or(50).min(100);
    let offset = filter.offset.unwrap_or(0);

    let internships = sqlx::query_as::<_, Internship>(
        r#"
        SELECT id, title, company, location, job_type, duration, stipend,
               description, html_description, category, tags, external_url,
               created_at, application_deadline
        FROM internships
        ORDER BY created_at DESC
        LIMIT $1 OFFSET $2
        "#
    )
    .bind(limit)
    .bind(offset)
    .fetch_all(&pool)
    .await
    .map_err(|e| {
        error!("Database error while listing internships: {}", e);
        (
            axum::http::StatusCode::INTERNAL_SERVER_ERROR,
            "Internal Server Error".into(),
        )
    })?;

    Ok(Json(internships))
}

async fn get_internship(
    State(pool): State<PgPool>,
    Path(id): Path<Uuid>,
) -> Result<Json<Internship>, (axum::http::StatusCode, String)> {
    let internship = sqlx::query_as::<_, Internship>(
        r#"
        SELECT id, title, company, location, job_type, duration, stipend,
               description, html_description, category, tags, external_url,
               created_at, application_deadline
        FROM internships
        WHERE id = $1
        "#
    )
    .bind(id)
    .fetch_optional(&pool)
    .await
    .map_err(|e| {
        error!("Database error while fetching internship {}: {}", id, e);
        (
            axum::http::StatusCode::INTERNAL_SERVER_ERROR,
            "Internal Server Error".into(),
        )
    })?;

    match internship {
        Some(i) => Ok(Json(i)),
        None => Err((axum::http::StatusCode::NOT_FOUND, "Internship not found".into())),
    }
}
