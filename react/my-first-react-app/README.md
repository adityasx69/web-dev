# My First React App (Movie Search UI)

A React + Vite movie discovery app UI that lets users search movies and is set up to integrate with the TMDB API.

## Features

- Modern React app bootstrapped with Vite
- Styled with Tailwind CSS v4 (`@tailwindcss/vite`)
- Search input component for movie lookup
- Hero section and responsive layout
- Environment-variable based TMDB API integration setup

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- ESLint 10

## Project Structure

```text
my-first-react-app/
├── public/                 # Static assets (hero, icons, placeholders)
├── src/
│   ├── components/
│   │   └── search.jsx      # Search input UI component
│   ├── App.jsx             # Main app layout and state
│   ├── index.css           # Global styles + Tailwind layers/utilities
│   └── main.jsx            # React entry point
├── eslint.config.js
├── vite.config.js
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm

### Installation

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Environment Variables

Create a `.env` file in the project root and add:

```env
VITE_TMDB_API_KEY=your_tmdb_api_bearer_token
```

> Note: Vite only exposes variables prefixed with `VITE_` to the client.

## Available Scripts

- `npm run dev` – Start the Vite dev server
- `npm run build` – Build for production
- `npm run preview` – Preview the production build locally
- `npm run lint` – Run ESLint checks

## Build Output

Production files are generated in the `dist/` directory after running:

```bash
npm run build
```

## Current Status

This project is an in-progress movie app UI scaffold with search state management and styling in place. API fetching and movie result rendering can be extended next.
