---
name: portfolio-content
description: Add or edit portfolio content — projects (src/data/projects.js), skills (src/data/skills.js), education (src/data/education.js), or the resume (public/resume.pdf). Use when the user asks to add a project, add a skill/tool, add a skill category, add/edit an education entry, update project links/description, swap the resume, or otherwise change what shows up on the Projects/Skills/Education/Home pages.
---

# Portfolio Content

## Overview

Projects, skills, and education shown on the site are data-driven
(`src/data/projects.js`, `src/data/skills.js`, `src/data/education.js`)
rather than hardcoded in JSX, per CLAUDE.md's Content Notes. This skill
covers the recurring edits: adding/editing a project, adding/editing a
skill or skill category, adding/editing an education entry, and swapping
the resume.

## Adding a project

1. Add the screenshot to `src/assets/projects/`. Existing screenshots run
   400KB–1.2MB — keep new ones in that range (CLAUDE.md already flags
   `profile.png` at ~4.7MB as needing compression before deploy; don't add
   another oversized asset).
2. In `src/data/projects.js`, add an import for it alongside the existing
   ones: `import <name> from '../assets/projects/<file>';`.
3. Append an object to the `projects` array with this shape:
   ```js
   {
     title: '...',
     description: '...',
     stack: ['React', 'Node.js'],
     image: <importedName>,
     links: { demo: '', repo: '' }, // leave '' if unknown
   }
   ```
4. Nothing else needs updating — `src/components/ProjectCard.jsx` renders
   directly from this shape.

## Editing a project

Find the object by `title` in `src/data/projects.js` and edit fields in
place. If replacing the screenshot, update both the image file and its
import line together.

## Adding a skill / tool

1. Confirm a Simple Icons component exists for it in `react-icons/si` (e.g.
   `SiDocker` for Docker). If unsure of the exact export name, search the
   Simple Icons set for a match.
2. In `src/data/skills.js`, add `{ name: '...', icon: '<lowercase-key>' }` to
   the right category's `skills` array (or a new category, below).
3. **Required companion edit** — in `src/pages/Skills.jsx`:
   - add the import from `react-icons/si`
   - add a matching entry to the `ICONS` map: `<lowercase-key>: <SiComponent>`

   This is a two-file change. `skills.js` only stores a string key; the
   actual icon component only exists in `Skills.jsx`'s `ICONS` map. Skipping
   this step doesn't error — the render guard (`{Icon && <Icon .../>}`)
   just silently drops the icon, leaving the skill pill with no icon.
4. Keep the icon key lowercase and identical between both files.

## Adding a skill category

Append `{ title: '<Category Name>', skills: [...] }` to `skillCategories` in
`src/data/skills.js`. `Skills.jsx` maps over `skillCategories` generically,
so no layout changes are needed — only the icon-map step above applies to
any skills inside the new category.

## Adding / editing an education entry

Append (or edit in place, matched by `school`) an object in `src/data/education.js`:
```js
{ school: '...', degree: '...', period: '...' }
```
`src/pages/Education.jsx` maps over this array generically — no other file
needs updating.

## Updating the resume

Replace `public/resume.pdf` in place, keeping the same filename, so the
existing links in `Home.jsx` and `Contact.jsx` keep working without edits.

## Out of scope

`GITHUB_URL` / `LINKEDIN_URL` placeholders in `src/pages/Home.jsx` and
`src/pages/Contact.jsx` are a one-time fix (see CLAUDE.md's Known TODOs),
not part of this recurring content workflow — handle those directly if
asked.

## Conventions

- Any new skill = a two-file change (`skills.js` + `Skills.jsx`'s `ICONS`
  map) whenever an icon is involved — never edit just one.
- Project entries always keep the `links: { demo, repo }` shape, even when
  both are empty strings, so `ProjectCard.jsx`'s optional-chaining renders
  correctly.
