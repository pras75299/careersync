# CareerSync

CareerSync (formerly Bharat Internz) is a premium, high-performance platform designed to bridge the gap between ambitious students and world-class companies across India by providing a streamlined, strictly-verified internship discovery experience.

## Features

- **Premium Modern UI**: A dark-mode inspired design system using TailwindCSS v4 and Framer Motion for top-tier glassmorphism effects and animations.
- **Advanced Search & Filtering**: Lightning-fast, dynamic search results powered by intelligent category tracking.
- **Robust Backend Architecture**: High-performance backend service built in Rust using Axum and SQLx.
- **Database Driven**: Clean PostgreSQL data layer managing structured internship data and application deadlines.
- **SEO & Performance Optimized**: Built with Next.js 16 (App Router) to ensure blazingly fast load times and optimized static rendering.

## Tech Stack

### Frontend (`/frontend`)
- Framework: Next.js 16.x (React 19)
- Styling: TailwindCSS 4
- Animations: Framer Motion
- Icons: Lucide React
- Components: Fully custom, mobile-responsive layout

### Backend (`/backend`)
- Language: Rust
- Framework: Axum
- Database ORM/Querying: SQLx
- Database: PostgreSQL

## Prerequisites

Before running the application locally, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Rust](https://rustup.rs/) (Cargo)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/) (Optional: for running the `docker-compose.yml` environment)

## Getting Started

### 1. Database Setup
Ensure PostgreSQL is running. Create a new database and apply the SQL schema. Ensure you update the `DATABASE_URL` environment variable for the backend.

### 2. Running the Backend
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Build and run the server:
   ```bash
   cargo run
   ```
The Rust Axum server will start listening on `http://127.0.0.1:3000`.

### 3. Running the Frontend
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Next.js development server:
   ```bash
   npm run dev
   ```
The frontend will be available at `http://localhost:3001`.

## Project Structure

```text
careersync/
├── backend/          # Rust Axum server & API logic
│   ├── src/          # Rust source files (api, models, fetcher)
│   ├── Cargo.toml    # Rust dependencies
├── frontend/         # Next.js 16 web application
│   ├── src/
│   │   ├── app/      # Next.js App Router pages (Home, Internships, About, Contact)
│   │   ├── components/ # Reusable UI components (Navbar, Hero, Footer, etc.)
│   ├── package.json  # NPM dependencies
│   ├── tailwind.config.js
├── docker-compose.yml # Container orchestration
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
MIT
