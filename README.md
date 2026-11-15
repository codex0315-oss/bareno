# Ericson Bareno — Portfolio

React + Vite + Framer Motion.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Edit content

All text, skills, projects and links live in **`src/data/portfolio.js`**.

- **Projects** — add objects to the `projects` array (an example is in the comments). Put screenshots in `public/projects/`.
- **Email / socials** — update `email` and `socials` in `profile`.
- **Resume** — drop `resume.pdf` in `public/` and set `resumeUrl: '/resume.pdf'`.
- **Contact form** — paste a free [Formspree](https://formspree.io) endpoint into `formEndpoint`; until then the form opens the visitor's email app.

## Brand

- Logo: `src/components/Logo.jsx` (animated) and `public/favicon.svg` (static).
- Colors: navy `#060e1f`, blue `#2f7bff`, gold `#f5b82e` — tokens at the top of `src/styles/global.css`.
- Photo: `public/ericson.webp` (used on the page) and `public/ericson.png` (fallback + social preview).

## Features

Dark/light mode · command menu (Ctrl/⌘ + K) · bento About grid · tabbed skills · case-study project cards · scroll progress · reduced-motion support · mobile layout.

## Deploy

Push to GitHub and import into [Vercel](https://vercel.com) or [Netlify](https://netlify.com) — no config needed.
