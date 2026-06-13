# Mohan Devendra — Portfolio

Personal portfolio built with Next.js 15, Tailwind CSS, and deployed on Vercel.

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel (5 minutes)

1. Push this folder to a new GitHub repo named `portfolio`
2. Go to vercel.com — New Project — Import that repo
3. Vercel auto-detects Next.js — click Deploy
4. Your live URL: `https://portfolio-mohanwraith.vercel.app` (or add a custom domain)

## Customise Before Deploying

### 1. Add your email
Open `src/components/Contact.js`, find the placeholder `your@email.com` and replace with a real `mailto:` link.

### 2. Update project links
Open `src/data/projects.js` — update the `links.demo` and `links.github` URLs to your actual deployed URLs.

### 3. Update Cinephile TV demo URL
Replace `https://cinephile-tv.vercel.app` in `src/data/projects.js` with your actual Cinephile TV Vercel URL.

### 4. Add LinkedIn (optional)
In `src/components/Navbar.js` and `src/components/Contact.js`, add a LinkedIn link alongside the GitHub one.

## Structure

```
src/
  app/
    layout.js       # Root layout, metadata, fonts
    page.js         # Page assembly
    globals.css     # Tailwind + custom CSS variables
  components/
    Navbar.js       # Fixed top nav with scroll effect
    Hero.js         # Full-screen hero with stats
    Work.js         # Projects section wrapper
    ProjectCard.js  # Individual project card with live iframe demo
    Skills.js       # Skills grid
    About.js        # Bio + education
    Contact.js      # Links + contact info
    Footer.js       # Footer
  data/
    projects.js     # Single source of truth for all content
```

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 3
- **Deployment**: Vercel
