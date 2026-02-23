use serde::{Deserialize, Serialize};
use sqlx::FromRow;
use uuid::Uuid;
use chrono::{DateTime, Utc};

#[derive(Debug, Serialize, Deserialize, FromRow)]
pub struct Internship {
    pub id: Uuid,
    pub title: String,
    pub company: String,
    pub location: String,
    pub job_type: String, // e.g. "Remote", "Hybrid", "On-site"
    pub duration: String, 
    pub stipend: Option<String>,
    pub description: String,
    pub html_description: Option<String>,
    pub category: String,
    pub tags: Vec<String>,
    pub external_url: Option<String>, // Apply link
    pub created_at: DateTime<Utc>,
    pub application_deadline: Option<DateTime<Utc>>,
}
