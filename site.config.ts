// ════════════════════════════════════════════════════════════════════════════
//  SITE CONFIG — single source of truth for all content, SEO, and schema
//  Edit this file; nothing in /components needs to change for content updates
// ════════════════════════════════════════════════════════════════════════════

export const siteConfig = {
  // ── Identity ─────────────────────────────────────────────────────────────
  name:       "Tommy Rosario",
  firstName:  "Tommy",
  lastName:   "Rosario",
  role:       "Senior Software Engineer",
  favicon:    "/favicon.ico",
  icons: {
      icon16: "/favicon-16x16.png",
      icon32: "/favicon-32x32.png",
      apple:  "/apple-touch-icon.png",
      android192: "/android-chrome-192x192.png",
      android512: "/android-chrome-512x512.png",
  },

  tagline:
    "I build fast, reliable web applications, and I use AI agents every day to deliver them sooner without lowering the bar.",
  location: "Jersey Shore, NJ",
  availableForWork: true,
  availabilityLabel: "Open to full-time, contract & consulting work",

  // ── Bio (naturally keyword-rich, readable) ────────────────────────────────
  bio: "Senior Software Engineer with 15+ years building high-performance, scalable web applications for consumer platforms and internal enterprise tools. Expert in React, Next.js, TypeScript, Angular, and Vue, with a strong foundation in modern CSS, Tailwind, and design systems.",
  bioExtended:
    "Known for leading large-scale frontend migrations, improving performance and SEO, and delivering fast, polished user experiences that directly support business growth. Comfortable working across product, design, and data teams to ship features that scale.",
  bioHighlights: [
    "15+ years building production web applications",
    "Expert in React, Next.js, TypeScript, Angular & Vue",
    "Led large-scale frontend migrations & performance improvements",
    "Daily AI-assisted development with custom agents & guardrails",
  ],

  // ── Contact ───────────────────────────────────────────────────────────────
  email:         "tomjasonrosario@gmail.com",
  github:        "https://github.com/tjrosario",
  linkedin:      "https://www.linkedin.com/in/tommy-rosario-65771711/",
  twitter:       "https://twitter.com/tommyrosario",
  twitterHandle: "@tommyrosario",

  // ── SEO / OG ──────────────────────────────────────────────────────────────
  siteUrl:  "https://tommyrosario.me",
  ogImage:  "/og",
  /** Update on significant content changes; feeds the sitemap and JSON-LD */
  lastUpdated: "2026-11-04",
  /** Primary meta description — ≤160 chars */
  metaDescription:
    "Tommy Rosario is a senior software engineer specializing in React, Next.js, and AI-assisted delivery. Open to full-time, contract, and consulting work.",

  // ── JSON-LD extras ────────────────────────────────────────────────────────
  knowsAbout: [
    "React", "Next.js", "TypeScript", "Angular", "Vue",
    "Tailwind CSS", "Design Systems", "Core Web Vitals",
    "SEO", "Headless CMS", "GraphQL", "Algolia", "Contentful",
    "OpenAI APIs", "Node.js", "PostgreSQL", "Stripe",
    "Frontend Architecture", "Web Performance",
    "AI-Assisted Development", "Claude Code", "Agentic Workflows",
  ],

  // ── Skills ────────────────────────────────────────────────────────────────
  coreStrengths: [
    "React & Next.js",
    "TypeScript",
    "Design Systems",
    "Core Web Vitals",
    "AI-Assisted Engineering",
  ],
  skillGroups: [
    {
      label: "Frontend",
      skills: [
        "React", "Next.js", "TypeScript", "Angular", "Vue",
        "Tailwind CSS", "Modern CSS", "SASS",
      ],
    },
    {
      label: "Architecture & Performance",
      skills: [
        "Design Systems", "Core Web Vitals", "SEO",
        "Headless CMS", "GraphQL", "Component Architecture",
      ],
    },
    {
      label: "AI & Automation",
      skills: [
        "Claude Code", "Custom Agents & Skills", "MCP",
        "OpenAI APIs", "Microsoft Copilot", "AI-Assisted Development",
      ],
    },
    {
      label: "Search & CMS",
      skills: [
        "Algolia", "Contentful",
      ],
    },
    {
      label: "Backend & Tooling",
      skills: [
        "Node.js", "PostgreSQL", "Stripe", "PayPal",
        "Azure Static Web Apps", "Jenkins",
      ],
    },
  ],

  // ── AI workflow ───────────────────────────────────────────────────────────
  aiWorkflow: {
    intro:
      "I use AI agents every day, and I'm still accountable for every line that ships. Agents speed up the work. Review, testing and judgment decide what goes out.",
    practices: [
      {
        title: "Custom agents",
        description:
          "Purpose-built agents handle investigation, implementation, code review, cross-client parity checks and issue tracker sweeps, each scoped to one job.",
      },
      {
        title: "Tests that prove themselves",
        description:
          "After tests are written, an agent breaks the code under test and confirms they fail, so a green suite actually means something.",
      },
      {
        title: "Independent review",
        description:
          "Changes get an adversarial review against the original requirement before a pull request goes up, with no shortcuts because an agent wrote the code.",
      },
      {
        title: "Prototype to production",
        description:
          "Vibe coding is great for testing an idea quickly. Anything headed to production gets the same standards as code I typed by hand.",
      },
    ],
  },

  // ── Projects ──────────────────────────────────────────────────────────────
  projects: [
    {
      name: "Design That Hits",
      slug: "design-that-hits",
      description:
        "A production storefront for a live Etsy print-on-demand shop, built on the Next.js App Router. Search, filtering, sorting and pagination all run through the URL across a 400+ product catalog, with SEO treated as a core requirement.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      highlights: [
        "400+ product catalog with automated Etsy feed sync",
        "URL-driven search, filtering, sorting & pagination",
        "Canonical URLs and SEO built for organic traffic",
      ],
      github: "https://github.com/tjrosario/design-that-hits",
      live:   "https://designthathits.com",
    },
    {
      name: "Tommy at the Shore",
      slug: "tommy-at-the-shore",
      description:
        "A creator brand site with TikTok and Instagram feeds, date-driven seasonal themes and content managed from a single config file. Small site, full engineering practice: unit tests, browser tests and CI on every pull request.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vitest", "Playwright"],
      highlights: [
        "Unit and browser tests running in CI",
        "Live TikTok and Instagram content",
        "Automatic seasonal themes",
      ],
      github: null,
      live:   "https://tommyattheshore.com",
    },
    {
      name: "ChatGPT Reviews",
      slug: "chatgpt-reviews",
      description:
        "A React application that uses the OpenAI API to generate AI-powered product reviews on demand. Users can request reviews for any product and receive detailed, structured feedback generated by GPT — demonstrating practical AI integration in a polished TypeScript + Tailwind UI.",
      stack: ["React", "TypeScript", "Tailwind CSS", "OpenAI API", "Create React App"],
      highlights: [
        "OpenAI GPT integration for dynamic review generation",
        "Fully typed with TypeScript",
        "Tailwind CSS utility-first styling",
      ],
      github: "https://github.com/tjrosario/chatgpt-reviews",
      live:   null,
    },
    {
      name: "Bite",
      slug: "bite",
      description:
        "A food discovery and restaurant browsing app built with Next.js App Router. Features a Zustand-powered cart and state management layer, fully typed data models, and a clean mobile-first UI deployed to Vercel. Structured around reusable components with a clear separation of data, store, and UI layers.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Vercel"],
      highlights: [
        "Next.js App Router with TypeScript",
        "Zustand for global cart & UI state",
        "Live on Vercel at bite-eight.vercel.app",
      ],
      github: "https://github.com/tjrosario/bite",
      live:   "https://bite-eight.vercel.app",
    },
  ],

  // ── Ticker marquee keywords ───────────────────────────────────────────────
  tickerWords: [
    "React & Next.js",
    "TypeScript",
    "AI Agents",
    "Claude Code",
    "Angular & Vue",
    "Design Systems",
    "Core Web Vitals",
    "GraphQL",
    "TanStack Query",
    "Algolia",
    "Contentful",
    "OpenAI APIs",
    "Node.js",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
export type Project    = typeof siteConfig.projects[number];