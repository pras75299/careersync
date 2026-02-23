use axum::{
    extract::{Path, State},
    routing::get,
    Json, Router,
};
use sqlx::PgPool;
use uuid::Uuid;

use crate::models::Internship;

pub fn app_router() -> Router<PgPool> {
    Router::new()
        .route("/internships", get(list_internships))
        .route("/internships/:id", get(get_internship))
}

async fn list_internships(
    State(pool): State<PgPool>,
) -> Result<Json<Vec<Internship>>, (axum::http::StatusCode, String)> {
    // In reality, we'd add search/filter query params here. For now, just return all.
    let internships = sqlx::query_as::<_, Internship>(
        r#"
        SELECT id, title, company, location, job_type, duration, stipend,
               description, html_description, category, tags, external_url,
               created_at, application_deadline
        FROM internships
        ORDER BY created_at DESC
        "#
    )
    .fetch_all(&pool)
    .await
    .map_err(|e| {
        (
            axum::http::StatusCode::INTERNAL_SERVER_ERROR,
            format!("Database error: {}", e),
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
        (
            axum::http::StatusCode::INTERNAL_SERVER_ERROR,
            format!("Database error: {}", e),
        )
    })?;

    match internship {
        Some(i) => Ok(Json(i)),
        None => Err((axum::http::StatusCode::NOT_FOUND, "Internship not found".into())),
    }
}
