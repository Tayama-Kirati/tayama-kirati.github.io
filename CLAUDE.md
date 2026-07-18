# Portfolio Website

Personal portfolio site for Tayama Kirati. Scaffolded and implemented.

Design reference: https://dakingrai.github.io — a clean, text-focused,
single-page personal site with a top nav bar (links jump-scroll to
sections) and a header combining photo, bio, and quick links. Adapted here
for a developer portfolio (Projects/Skills instead of Papers/Talks).

## Purpose

A single-page personal portfolio: all sections are stacked on one scrollable
page, with a persistent top nav bar (Home / Projects / Skills / Education /
Contact) whose links jump-scroll to the matching section (`#home`,
`#projects`, `#skills`, `#education`, `#contact`) rather than navigating to
separate routes:

- **Home** — profile photo, name, short bio/tagline, and a quick links row
  (Resume, GitHub, LinkedIn)
- **Projects** — cards per project with title, description, tech stack
  used, screenshot, and links (live demo / GitHub repo)
- **Skills** — technologies and tools grouped by category (e.g. languages,
  frameworks, tools)
- **Education** — school, degree, and period per entry
- **Contact** — email and social links (GitHub, LinkedIn, resume)

## Design Notes

- Persistent, sticky top horizontal nav bar with anchor links that
  smooth-scroll to each section (`src/components/Nav.jsx`;
  `scroll-behavior: smooth` set globally in `src/index.css`). Each section
  has `scroll-mt-20` so the sticky nav doesn't cover its heading when jumped
  to.
- Clean, text-focused layout with minimal visual decoration — thin borders,
  no heavy shadows. Section headings have a thin bottom border to separate
  them visually while scrolling, matching the reference's `h2` style.
- Home hero is a side-by-side layout (photo left, name/bio/links right on
  desktop; stacks on mobile) matching the reference's `profile-container`.
- Serif typeface (`Merriweather`, loaded via Google Fonts in `index.html`,
  falling back to Georgia/serif) and off-white page background
  (`--bg: #fafafa`), matching the reference's body styling.
- Accent color is a muted blue (`--accent: #4f6d9e` / `--accent-dark:
  #3c5680`), matching the reference's link color — defined in
  `src/index.css`.

## Tech Stack

- React 19 + Vite 8
- Tailwind CSS v4 via the `@tailwindcss/vite` plugin (no separate postcss
  config; `@import "tailwindcss";` in `src/index.css`)
- `lucide-react` for general icons (Mail, FileText, ExternalLink) —
  **note**: this version dropped brand/logo icons, so GitHub/LinkedIn icons
  come from `react-icons/fa` (`FaGithub`, `FaLinkedin`) instead
- Deployment target: **GitHub Pages**, served at the root domain
- No router: it's a single page, so `App.jsx` renders all sections directly
  inside `Layout` — no `react-router-dom` dependency.

## Hosting (GitHub Pages)

- Repo must be named `tayama-kirati.github.io` (matching the GitHub
  username `Tayama-Kirati` exactly, hyphen included — this is the special
  user-site repo name) so it serves at `https://tayama-kirati.github.io`
  with **no base path** needed — `vite.config.js` leaves `base: '/'` (the
  default). A repo name that doesn't exactly match the username (e.g. the
  original `tayamakirati.github.io` without the hyphen) gets treated as an
  ordinary project repo and serves nested under a path instead of at the
  root.
- Deployed automatically via `.github/workflows/deploy.yml` on every push to
  `main`: builds with Vite, publishes `dist/` to GitHub Pages using
  `actions/deploy-pages`. No manual `npm run deploy` step.
- In the repo's GitHub Settings → Pages, source must be set to
  "GitHub Actions" (not "Deploy from a branch").
- If a custom domain is added later, add a `public/CNAME` file with the
  domain — it gets copied into `dist/` on build automatically.

## Structure

```
portfolio2/                      # repo name: tayama-kirati.github.io
  .github/
    workflows/
      deploy.yml          # build + deploy to GitHub Pages on push to main
  public/
    resume.pdf
  src/
    components/
      Nav.jsx              # sticky top nav bar, anchor links to sections
      Layout.jsx           # wraps sections with Nav, renders {children}
      ProjectCard.jsx
    pages/
      Home.jsx             # <section id="home"> — photo, bio, quick links
      Projects.jsx         # <section id="projects">
      Skills.jsx           # <section id="skills">
      Education.jsx        # <section id="education">
      Contact.jsx          # <section id="contact">
    data/
      projects.js          # array of { title, description, stack, image, links }
      skills.js             # array of { title, skills: [{ name, icon }] }
      education.js          # array of { school, degree, period }
    assets/
      profile.jpg
      projects/            # project screenshots
    App.jsx                # composes all sections inside Layout, in order
    main.jsx
    index.css               # Tailwind import + CSS vars (--accent, --ink, --bg)
  index.html
  package.json
  vite.config.js
```

## Commands

```bash
npm install
npm run dev       # local dev server
npm run build     # production build
npm run preview   # preview production build
```

## Content Notes

- Project, skill, and education data live in `src/data/projects.js`,
  `src/data/skills.js`, and `src/data/education.js` rather than hardcoded in
  JSX, so content can be updated without touching component logic.
- Contact links (`mailto:`, resume download) and Home's quick links use the
  same data shape; social URLs are set directly in `Home.jsx` / `Contact.jsx`
  (`GITHUB_URL`, `LINKEDIN_URL` constants).

## Conventions

- Functional components with hooks only (no class components).
- One component per file, matching filename to component name; page-level
  components live in `src/pages/`, shared UI in `src/components/`.
