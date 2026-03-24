# Personal Page — Project Notes for Claude

## What this project is
A personal CV / portfolio web page for Mattia Pagetti (Senior Data Engineer).
Single-page React app with a NeoBrutalism look powered by RetroUI components.

## Stack
- **React 18 + TypeScript + Vite 6**
- **Tailwind CSS 3** for styling
- **RetroUI** (NeoBrutalism component library) installed via `npx shadcn add @retroui/<name>`
- **shadcn/ui** registry system (config in `components.json`)

## Project structure
```
src/
  data/cv.ts                  — all CV content as typed TS objects (single source of truth)
  components/
    Hero.tsx                  — name, tagline, contact row, PDF download button
    ExperienceSection.tsx     — work history cards with skill badges
    SkillsSection.tsx         — grouped skill badges (Main Stack / AWS / Azure)
    EducationSection.tsx      — degree cards
    PublicationsSection.tsx   — arXiv paper link
    retroui/                  — RetroUI components (Button, Badge, Card, Text)
  lib/utils.ts                — cn() helper (clsx + tailwind-merge)
  App.tsx                     — assembles all sections
  index.css                   — Tailwind directives + shadcn CSS variables
public/
  CV_2026_private.pdf         — downloadable PDF CV (drop updated PDFs here)
Makefile                      — see targets below
components.json               — shadcn config (retroui registry registered here)
tailwind.config.js            — content paths + shadcn color tokens
```

## Makefile targets
| Target | What it does |
|---|---|
| `make setup` | First-time setup: `npm install` + adds all RetroUI components via shadcn |
| `make install` | `npm install` only |
| `make dev` | Dev server at http://localhost:5173 |
| `make build` | TypeScript check + Vite production build → `dist/` |
| `make preview` | Serve `dist/` locally |
| `make clean` | Remove `node_modules/` and `dist/` |

## CV content source
The original LaTeX source lives at `/home/mattia/workspace/trash_bin/latex_folder/`.
All content is hardcoded into `src/data/cv.ts` — edit that file to update any CV data.
**Do not put the phone number on the site** — it was intentionally removed.

## Colour scheme (NeoBrutalism)
- Background: warm off-white (`hsl(55 100% 96%)`)
- Hero section: amber/yellow accent (`hsl(38 100% 60%)`)
- Cards/borders: solid black `border-2 border-black` with `shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`
- CSS variables defined in `src/index.css`

## Adding more RetroUI components
```bash
npx shadcn@latest add "@retroui/<component-name>" --yes
```
Components land in `src/components/retroui/`. Browse available ones at https://www.retroui.dev/docs/components/button

## Node version caveat
The machine runs Node 18. Use `--legacy-peer-deps` if npm raises peer-dep conflicts.
Avoid `shadcn@latest init` interactively — `components.json` is already configured.
