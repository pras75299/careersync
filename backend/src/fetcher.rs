use log::{info, error};
use reqwest::Client;
use serde::Deserialize;
use sqlx::PgPool;
use std::time::Duration;
use tokio::time::sleep;
use uuid::Uuid;
use chrono::{DateTime, Utc, TimeZone};

use crate::models::Internship;

#[derive(Deserialize, Debug)]
struct RemotiveResponse {
    #[serde(rename = "job-count")]
    job_count: usize,
    jobs: Vec<RemotiveJob>,
}

#[derive(Deserialize, Debug)]
struct RemotiveJob {
    id: u64,
    url: String,
    title: String,
    company_name: String,
    category: String,
    tags: Vec<String>,
    job_type: String,
    publication_date: String,
    candidate_required_location: String,
    salary: String,
    description: String,
}

pub async fn start_background_fetcher(pool: PgPool) {
    tokio::spawn(async move {
        let client = Client::new();
        loop {
            info!("Starting background sync from Remotive API...");
            match fetch_and_save_jobs(&client, &pool).await {
                Ok(count) => info!("Successfully synced {} jobs from Remotive.", count),
                Err(e) => error!("Error syncing from Remotive: {}", e),
            }
            // Fetch every 6 hours
            sleep(Duration::from_secs(6 * 3600)).await;
        }
    });
}

async fn fetch_and_save_jobs(client: &Client, pool: &PgPool) -> Result<usize, Box<dyn std::error::Error>> {
    // Fetch specifically Software Dev / Engineering etc. 
    // We'll fetch from remotive software-dev category
    let res = client
        .get("https://remotive.com/api/remote-jobs?category=software-dev&limit=50")
        .send()
        .await?
        .json::<RemotiveResponse>()
        .await?;

    let mut saved_count = 0;
    for job in res.jobs {
        // Simple mapping
        let parsed_date = DateTime::parse_from_rfc3339(&job.publication_date)
            .map(|dt| dt.with_timezone(&Utc))
            .unwrap_or_else(|_| Utc::now());

        let internship = Internship {
            id: Uuid::new_v4(), // We will generate new UUIDs, but in reality we should UPSERT by external ID
            title: job.title.clone(),
            company: job.company_name.clone(),
            location: job.candidate_required_location.clone(),
            job_type: job.job_type.clone(),
            duration: "Not specific (Full/Part Time)".to_string(),
            stipend: if job.salary.is_empty() { None } else { Some(job.salary.clone()) },
            description: job.description.clone(), 
            html_description: Some(job.description.clone()),
            category: "technology".to_string(), // we map software-dev to our technology category
            tags: job.tags.clone(),
            external_url: Some(job.url.clone()),
            created_at: parsed_date,
            application_deadline: None,
        };

        // UPSERT logic: Insert if not exist, or conflict on something. For simplicity, we just insert if the title+company doesn't exist
        // to avoid duplicate spamming initially, or we can just ignore for now since it's just a demo compilation check
        // We will create the schema so let's write a simple insert.
        
        let result = sqlx::query(
            r#"
            INSERT INTO internships (
                id, title, company, location, job_type, duration, stipend,
                description, html_description, category, tags, external_url,
                created_at, application_deadline
            )
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
            ON CONFLICT (external_url) DO NOTHING
            "#
        )
        .bind(internship.id)
        .bind(internship.title.clone())
        .bind(internship.company.clone())
        .bind(internship.location.clone())
        .bind(internship.job_type.clone())
        .bind(internship.duration.clone())
        .bind(internship.stipend.clone())
        .bind(internship.description.clone())
        .bind(internship.html_description.clone())
        .bind(internship.category.clone())
        .bind(internship.tags.clone())
        .bind(internship.external_url.clone())
        .bind(internship.created_at)
        .bind(internship.application_deadline)
        .execute(pool)
        .await;

        match result {
            Ok(res) if res.rows_affected() > 0 => saved_count += 1,
            Err(e) => error!("Failed to insert job {}: {}", job.title, e),
            _ => {} // already exists
        }
    }

    Ok(saved_count)
}
