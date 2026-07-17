# Portfolio Website

Personal portfolio site for Tayama Kirati. Scaffolded and implemented.

Design reference: https://dakingrai.github.io — a clean, text-focused
personal site with a top nav bar and a header combining photo, bio, and
quick links. Adapted here for a developer portfolio (Projects/Skills instead
of Papers/Talks).

## Purpose

A multi-page personal portfolio with a persistent top nav bar (Home /
Projects / Skills / Education / Contact):

- **Home** — profile photo, name, short bio/tagline, and a quick links row
  (Resume, GitHub, LinkedIn)
- **Projects** — dedicated page; cards per project with title, description,
  tech stack used, screenshot, and links (live demo / GitHub repo)
- **Skills** — dedicated page; technologies and tools grouped by category
  (e.g. languages, frameworks, tools)
- **Education** — dedicated page; school, degree, and period per entry
- **Contact** — dedicated page; email and social links (GitHub, LinkedIn,
  resume)

## Design Notes

- Persistent top horizontal nav bar linking to the four pages, visible on
  every page (`src/components/Nav.jsx`).
- Clean, text-focused layout with minimal visual decoration — thin borders,
  no heavy shadows.
- Profile photo placed prominently near the top of the Home page.
- Accent color is gold (`--gold: #b8860b`), defined in `src/index.css`.

## Tech Stack

- React 19 + Vite 8
- `react-router-dom` v7 for multi-page routing
- Tailwind CSS v4 via the `@tailwindcss/vite` plugin (no separate postcss
  config; `@import "tailwindcss";` in `src/index.css`)
- `lucide-react` for general icons (Mail, FileText, ExternalLink) —
  **note**: this version dropped brand/logo icons, so GitHub/LinkedIn icons
  come from `react-icons/fa` (`FaGithub`, `FaLinkedin`) instead
- Deployment target: **GitHub Pages**, served at the root domain

### Routing on GitHub Pages

Uses `HashRouter` (not `BrowserRouter`) so direct links and page refreshes to
`/projects`, `/skills`, `/contact` work correctly on GitHub Pages' static
hosting without extra server config — routes resolve as `/#/projects`,
`/#/skills`, etc.

## Hosting (GitHub Pages)

- Repo must be named `tayamakirati.github.io` (the special user-site repo
  name) so it serves at `https://tayamakirati.github.io` with **no base
  path** needed — `vite.config.js` leaves `base: '/'` (the default).
- Deployed automatically via `.github/workflows/deploy.yml` on every push to
  `main`: builds with Vite, publishes `dist/` to GitHub Pages using
  `actions/deploy-pages`. No manual `npm run deploy` step.
- In the repo's GitHub Settings → Pages, source must be set to
  "GitHub Actions" (not "Deploy from a branch").
- If a custom domain is added later, add a `public/CNAME` file with the
  domain — it gets copied into `dist/` on build automatically.

## Structure

```
portfolio2/                      # repo name: tayamakirati.github.io
  .github/
    workflows/
      deploy.yml          # build + deploy to GitHub Pages on push to main
  public/
    resume.pdf
  src/
    components/
      Nav.jsx              # top nav bar, persistent across pages
      Layout.jsx           # wraps pages with Nav via <Outlet/>
      ProjectCard.jsx
    pages/
      Home.jsx             # photo, bio, quick links
      Projects.jsx
      Skills.jsx
      Education.jsx
      Contact.jsx
    data/
      projects.js          # array of { title, description, stack, image, links }
      skills.js             # array of { title, skills: [{ name, icon }] }
      education.js          # array of { school, degree, period }
    assets/
      profile.png
      projects/            # project screenshots
    App.jsx                # HashRouter + routes
    main.jsx
    index.css               # Tailwind import + CSS vars (--gold, --ink)
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

## Known TODOs

- `LINKEDIN_URL` in `src/pages/Home.jsx` and `src/pages/Contact.jsx` is
  still a placeholder (`https://linkedin.com/`) — fill in the real profile
  URL. `GITHUB_URL` is filled in (`https://github.com/Tayama-Kirati`).
- `src/assets/profile.png` is ~4.7MB (copied from the source photo
  as-is) — compress it before deploying, since it's the largest asset on
  the site by far.

## Conventions

- Functional components with hooks only (no class components).
- One component per file, matching filename to component name; page-level
  components live in `src/pages/`, shared UI in `src/components/`.
