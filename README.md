# Tommy Rosario — Portfolio

A production-ready frontend developer portfolio built with **Next.js 15 (App Router) + TypeScript + Tailwind CSS + self-hosted fonts**.

## Quick Start

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout (fonts, metadata)
│   ├── page.tsx            # One-page app
│   ├── globals.css         # Tailwind + global styles
│   └── api/experience/
│       └── route.ts        # API: serves parsed experience data
├── components/
│   ├── Navbar.tsx           Sticky nav + mobile drawer
│   ├── Hero.tsx             Full-screen hero
│   ├── Ticker.tsx           Scrolling keyword marquee
│   ├── About.tsx            Bio + highlights grid
│   ├── Experience.tsx       Timeline cards
│   ├── Skills.tsx           Grouped skill chips
│   ├── Projects.tsx         Project cards
│   ├── Contact.tsx          Mailto form + socials
│   ├── Footer.tsx
│   └── SectionHeader.tsx    Reusable heading with accent dot
├── lib/
│   ├── resumeParser.ts      PDF parser + JSON fallback
│   └── experience.types.ts
├── data/
│   ├── experience.json      Fallback/editable experience data
│   └── resume.pdf           (optional) Drop your resume here
├── public/fonts/            Self-hosted Syne + Space Grotesk
└── site.config.ts           ALL content lives here
```

## Customising Content

Edit **`site.config.ts`** for everything: name, bio, skills, projects, links.

## PDF Resume

Place your resume at `data/resume.pdf`. The parser extracts experience entries automatically, falling back to `data/experience.json` if parsing fails.

Debug the parser:
```bash
RESUME_PARSER_DEBUG=true npx tsx lib/resumeParser.ts
```

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
npx vercel
```

Ensure the `data/` directory is included in your deployment.
