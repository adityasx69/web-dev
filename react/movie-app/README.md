<div align="center">

<img src="public/logo.png" alt="CineSearch Logo" width="120" />

# 🎬 CineSearch

### *The smarter way to discover movies — powered by what the world is actually watching*

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Appwrite](https://img.shields.io/badge/Appwrite-Cloud-FD366E?style=for-the-badge&logo=appwrite&logoColor=white)](https://appwrite.io)
[![TMDB](https://img.shields.io/badge/TMDB-API-01D277?style=for-the-badge&logo=themoviedatabase&logoColor=white)](https://www.themoviedb.org)

### 🌐 [Live Demo → movie.projects.adityasaraswat.me](https://movie.projects.adityasaraswat.me)

</div>

---

## ✨ What Makes This Different

Most movie apps show you what's "trending" by some algorithm you can't see or influence. **CineSearch flips that** — the Trending section is built entirely from what real users on the platform are actually searching for, tracked in real-time via Appwrite.

> **Search for "Inception"? It climbs the trending list.**
> **Everyone searching "Interstellar" tonight? It rises to the top.**

The trending section isn't curated — it's *crowdsourced* from live user behavior.


---

## 📸 Screenshots

<div align="center">

### Home Page
<img src="readme_assets/home-page-ss.png" alt="CineSearch Home Page" width="85%" style="border-radius: 12px; margin: 16px 0;" />

<br/>

### Trending Movies — Powered by Real Search Data
<img src="readme_assets/trending-movies.png" alt="CineSearch Trending Movies" width="85%" style="border-radius: 12px; margin: 16px 0;" />

> The top 5 most-searched movies, ranked by count from Appwrite's database

<br/>

### All Movies Grid
<img src="readme_assets/all-movies.png" alt="CineSearch All Movies Grid" width="85%" style="border-radius: 12px; margin: 16px 0;" />

> Discover movies sorted by popularity, or search through thousands instantly

</div>

---

## 🏗️ Architecture

<div align="center">
<img src="readme_assets/arch.png" alt="Project Structure" width="90%"/>
</div>

---

## ⚙️ How the Trending System Works

This is the core feature — here's exactly what happens under the hood:

<div align="center">
<img src="readme_assets/flow.png" alt="Trending System Flow" width="90%"/>
</div>

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- A [TMDB API key](https://developer.themoviedb.org/docs/getting-started)
- An [Appwrite Cloud](https://cloud.appwrite.io) project with a database + collection

### 1. Clone the repo

```bash
git clone https://github.com/your-username/movie-app.git
cd movie-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root:

```env
VITE_TMDB_API_KEY=your_tmdb_bearer_token_here
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
```

### 4. Set up Appwrite Collection

In your Appwrite console, create a collection with these attributes:

| Attribute     | Type    | Notes                        |
|---------------|---------|------------------------------|
| `searchTerm`  | String  | The query the user searched  |
| `count`       | Integer | Number of times searched     |
| `movie_id`    | Integer | TMDB ID of the top result    |
| `poster_url`  | String  | Full TMDB image URL          |

### 5. Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) and start searching.

---

## 🔑 Key Technical Decisions

| Decision | Choice | Why |
|---|---|---|
| **Debouncing** | `react-use`'s `useDebounce` at 300ms | Prevents API spam while the user is still typing |
| **Trending backend** | Appwrite Cloud (BaaS) | Zero infrastructure — no server, no DB setup, free tier |
| **Image source** | TMDB `w500` CDN | Fast, globally cached, consistent quality |
| **Bundler** | Vite 8 | Near-instant HMR, optimized production builds |
| **Styling** | Tailwind CSS v4 | New CSS-first config, zero runtime overhead |

---

## 📦 Tech Stack

| Layer | Technology |
|---|---|
| **UI Framework** | React 19 |
| **Build Tool** | Vite 8 |
| **Styling** | Tailwind CSS v4 |
| **Backend / DB** | Appwrite Cloud |
| **Movie Data** | TMDB REST API |
| **Utility Hooks** | react-use (`useDebounce`) |

---

## 🔮 What Could Come Next

- [ ] User authentication — personalized watchlists per user
- [ ] Trending by genre — filter what's hot in action, drama, sci-fi
- [ ] Movie detail page with cast, trailer, and full synopsis
- [ ] Infinite scroll / pagination for the all-movies grid
- [ ] PWA support — offline-first, installable on mobile

---

## 📄 License

MIT © 2026 — built with React, Appwrite, and the TMDB API.

<div align="center">