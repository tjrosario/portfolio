# Tommy Rosario Portfolio

[![CI](https://github.com/tjrosario/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/tjrosario/portfolio/actions/workflows/ci.yml)

The source for [tommyrosario.me](https://tommyrosario.me), my portfolio as a senior frontend engineer. It's a single static page built with Next.js, React, TypeScript, and Tailwind CSS.

![The portfolio hero section in dark mode](docs/screenshot.png)

## Highlights

- **Seasonal theming:** the accent color, falling particles, and holiday art follow the date. A blocking script applies the theme before paint, so a static page still changes with the calendar and never flashes the wrong colors.
- **Accessibility:** audited against WCAG 2.2 AA. It has a skip link, a pause control for animations, reduced motion and forced colors support, and keyboard handling throughout the mobile menu and resume dialog.
- **Resume dialog:** a native `<dialog>` that fetches its content from `/api/resume` on first open, with loading and error states, and prints to a one-page PDF.
- **Search and AI discovery:** metadata, JSON-LD, a sitemap, a generated social image, and an `llms.txt` route, all built from one config file.
- **Light on dependencies:** four runtime packages and self-hosted variable fonts, with no state library because the site doesn't need one.

## Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, MSW, ESLint, Bun, and Vercel. GitHub Actions runs lint and a production build on every pull request.

## Run it locally

Requires [Bun](https://bun.sh) and Node 24.

```bash
bun install
bun run dev
```

Then open http://localhost:4000. To use another port, run `PORT=4500 bun run dev`.

| Command | What it does |
|---|---|
| `bun run dev` | Starts the dev server |
| `bun run build` | Creates a production build |
| `bun run start` | Serves the production build |
| `bun run lint` | Runs ESLint |

## Project structure

```
app/          Routes, layout, global styles, and the og and llms.txt routes
components/   Page sections and shared UI
data/         Experience timeline and resume content
docs/         README assets
lib/          Theme, season, motion, and resume state
mocks/        MSW handlers for local development
public/       Fonts, icons, and images
site.config.ts   Site content, projects, skills, and seasons
```

## API mocking

In development, [MSW](https://mswjs.io) intercepts `/api/resume` and adds a 1.2 second delay so the loading state is easy to see. Handlers live in `mocks/`. Production skips MSW and uses the real route in `app/api/resume/route.ts`.

## Editing content

| Content | Where it lives |
|---|---|
| Name, bio, skills, projects, links, seasons | `site.config.ts` |
| Experience timeline | `data/experience.json` |
| Resume dialog | `data/resume.json` |
| Season accent colors | `app/globals.css` |

## Previewing seasons

Seasons are checked in order and the first matching date range wins, so holidays sit above the seasons around them. To preview one, add `?season=<id>` to the URL, for example http://localhost:4000/?season=christmas.

Available ids: `christmas`, `newyear`, `valentines`, `stpatricks`, `fourth`, `halloween`, `thanksgiving`, `winter`, `spring`, `summer`, `fall`.

## AI tooling

I build with AI agents day to day. `AGENTS.md` and `CLAUDE.md` hold the instructions those agents read in this repo.

## License

The source code is available under the [MIT License](LICENSE). My name, likeness, images, biography, and resume and experience content aren't covered by it. All rights to those are reserved, so please replace them if you reuse this code.
