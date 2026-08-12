# Portfolio Hackathon 2.0

A React portfolio site built with Vite, Tailwind CSS, and GSAP. The app shows a hero section, animated project previews, project detail pages, an about section, skills, contact form, and footer.

## Overview

The app uses `react-router` for client-side routing and scroll-based animations for interaction. Projects are defined in `src/data/projects.js` and rendered in the Work section. Each project has its own detail page at `/projects/:slug`.

## App structure

- `src/App.jsx` - routes and main site layout
- `src/pages/Main.jsx` - page composition for hero, work, about, skills, contact, and footer
- `src/componenets/` - reusable sections and UI components
- `src/data/projects.js` - project metadata, images, categories, tech stack, and links
- `src/main.jsx` - app bootstrap with `BrowserRouter`
- `src/index.css` - Tailwind import and custom nav hover styles
- `vite.config.js` - Vite config with React and Tailwind plugins

## Features

- Animated hero and page sections with GSAP
- Sticky navigation with scroll reveal and section links
- Horizontal project showcase on larger screens
- Project detail page with overview, features, tech stack, and story sections
- Contact form integrated with EmailJS
- Responsive layout for mobile and desktop

## Tech stack

- React 19
- Vite
- Tailwind CSS
- GSAP with ScrollTrigger
- React Router 8
- EmailJS browser package

## Environment

The contact form uses EmailJS and expects these Vite env variables:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

## Run locally

1. Install dependencies
   ```bash
   npm install
   ```
2. Start the dev server
   ```bash
   npm run dev
   ```

## Build

```bash
npm run build
```

## Lint

```bash
npm run lint
```

## Notes

- Project routes are handled in `src/App.jsx`
- `ProjectDetails.jsx` reads project metadata from `src/data/projects.js`
- The navigation uses GSAP scroll-to animation in `Navbar.jsx`
- `Contact.jsx` includes a form submission flow with EmailJS and status handling
