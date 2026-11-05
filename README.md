# Tommy Rosario — Portfolio

Personal portfolio built with **Next.js (App Router), TypeScript, Tailwind CSS and self-hosted variable fonts**.

## Quick Start

```bash
bun install
bun run dev
# Open http://localhost:4000
```

This project uses [Bun](https://bun.sh) as its package manager. `bun.lock` is the only committed lockfile.

The dev and start scripts listen on port 4000 to stay clear of other local projects. Override with `PORT=4500 bun run dev`.

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout (fonts, metadata)
│   ├── page.tsx            # One-page app
│   ├── globals.css         # Tailwind + global styles
│   ├── og/route.tsx        # Generated social share image
│   └── llms.txt/route.ts   # Plain-text summary for AI tools
├── components/
│   ├── Navbar.tsx           Sticky nav + mobile drawer
│   ├── Hero.tsx             Full-screen hero
│   ├── Ticker.tsx           Scrolling keyword marquee
│   ├── About.tsx            Bio + highlights grid
│   ├── Experience.tsx       Timeline cards
│   ├── AiWorkflow.tsx       How I build with AI
│   ├── ResumeModal.tsx      Resume dialog with print styles
│   ├── Skills.tsx           Grouped skill chips
│   ├── Projects.tsx         Project cards
│   ├── Contact.tsx          Email link + socials
│   ├── Footer.tsx
│   └── SectionHeader.tsx    Reusable heading with accent dot
├── lib/
│   ├── theme.tsx            Dark/light theme
│   ├── resume.tsx           Opens the resume modal
│   └── experience.types.ts
├── data/
│   ├── experience.json      Editable experience data
│   └── resume.json          Content for the resume modal
├── public/fonts/            Self-hosted Sora, Inter and JetBrains Mono
└── site.config.ts           ALL content lives here
```

## Customising Content

Edit **`site.config.ts`** for everything: name, bio, skills, projects, links.

## Seasonal Themes

Seasons and their date ranges live in `seasons` in `site.config.ts`, and their accent colors in `app/globals.css`. The first matching range wins, so holidays sit above the seasons around them.

Preview any season with `?season=<id>`, for example `http://localhost:4000/?season=christmas`.

Season ids: `christmas`, `newyear`, `valentines`, `stpatricks`, `fourth`, `halloween`, `thanksgiving`, `winter`, `spring`, `summer`, `fall`.

## Experience JSON Schema

```json
[
  {
    "company": "Acme Corp",
    "title": "Senior Frontend Developer",
    "startDate": "2022-03",
    "endDate": "Present",
    "location": "New York, NY",
    "bullets": ["Led migration...", "Mentored..."],
    "tech": ["React", "TypeScript"]
  }
]
```

## Deploy

```bash
bunx vercel
```
