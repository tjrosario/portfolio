// ════════════════════════════════════════════════════════════════════════════
//  SITE CONFIG — single source of truth for all content, SEO, and schema
//  Edit this file; nothing in /components needs to change for content updates
// ════════════════════════════════════════════════════════════════════════════

export const siteConfig = {
  // ── Identity ─────────────────────────────────────────────────────────────
  name:       "Tommy Rosario",
  firstName:  "Tommy",
  lastName:   "Rosario",
  role:       "Sr. Frontend Engineer",
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
  bio: "Senior Frontend Engineer with 15+ years building high-performance, scalable web applications for consumer platforms and internal enterprise tools. Expert in React, Next.js, TypeScript, Angular, and Vue, with a strong foundation in modern CSS, Tailwind, and design systems.",
  bioExtended:
    "Known for leading large-scale frontend migrations, improving performance and SEO, and delivering fast, polished user experiences that directly support business growth. Comfortable working across product, design, and data teams to ship features that scale.",
  bioHighlights: [
    "15+ years building production web applications",
    "Expert in React, Next.js, TypeScript, Angular & Vue",
    "Led large-scale frontend migrations & performance improvements",
    "Daily AI-assisted development with custom agents & guardrails",
  ],

  // ── Contact ───────────────────────────────────────────────────────────────
  email:         "tom.jason.rosario@gmail.com",
  github:        "https://github.com/tjrosario",
  linkedin:      "https://www.linkedin.com/in/tommy-rosario/",
  twitter:       "https://twitter.com/tommyrosario",

  // ── SEO / OG ──────────────────────────────────────────────────────────────
  siteUrl:  "https://tommyrosario.me",
  ogImage:  "/og",
  /** Update on significant content changes; feeds the sitemap and JSON-LD */
  lastUpdated: "2026-11-04",
  /** Primary meta description — ≤160 chars */
  metaDescription:
    "Tommy Rosario is a senior frontend engineer specializing in React, Next.js, and AI-assisted delivery. Open to full-time, contract, and consulting work.",

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

  // ── Seasons ───────────────────────────────────────────────────────────────
  /** First match wins, so holidays sit above the seasons around them. Dates are MM-DD; colors live in globals.css */
  seasons: [
    { id: "christmas",    label: "Holidays",       greeting: "Happy holidays",          from: "12-01", to: "12-26", particles: ["santaHat", "candyCane", "tree", "ornament", "gift", "snowflake"], colors: ["#60a5fa"], hat: "santaHat",      stripe: ["#dc2626", "#ffffff"] },
    { id: "newyear",      label: "New Year",       greeting: "Happy New Year",          from: "12-27", to: "01-03", particles: ["champagne", "partyHat", "firework", "star"], colors: ["#eab308"],            hat: "partyHat",      stripe: ["#eab308", "#111827"] },
    { id: "valentines",   label: "Valentine's",    greeting: "Happy Valentine's Day",   from: "02-07", to: "02-14", particles: ["heart", "arrowHeart", "loveLetter"], colors: ["#e11d48"],                    hat: "heartCrown",    stripe: ["#e11d48", "#fbcfe8"] },
    { id: "stpatricks",   label: "St. Patrick's",  greeting: "Happy St. Patrick's Day", from: "03-14", to: "03-17", particles: ["shamrock", "potOfGold", "leprechaunHat", "rainbow"], colors: ["#16a34a"],       hat: "leprechaunHat", stripe: ["#16a34a", "#facc15"] },
    { id: "fourth",       label: "Fourth of July", greeting: "Happy Fourth of July",    from: "07-01", to: "07-07", particles: ["flag", "firework", "star"], colors: ["#3b82f6", "#ef4444"],                   hat: "uncleSamHat",   stripe: ["#dc2626", "#ffffff", "#1d4ed8"] },
    { id: "halloween",    label: "Halloween",      greeting: "Happy Halloween",         from: "10-01", to: "10-31", particles: ["pumpkin", "ghost", "bat", "witchHat"], colors: ["#f97316"],                  hat: "witchHat",      stripe: ["#f97316", "#111827"] },
    { id: "thanksgiving", label: "Thanksgiving",   greeting: "Happy Thanksgiving",      from: "11-01", to: "11-30", particles: ["turkey", "pie", "corn", "leaf"], colors: ["#d97706"],                        hat: "pilgrimHat",    stripe: ["#b45309", "#f59e0b", "#7c2d12"] },
    { id: "winter",       label: "Winter",         greeting: "Stay warm out there",     from: "01-04", to: "03-19", particles: ["snowflake"], colors: ["#7dd3fc", "#94a3b8"],                                 hat: null,            stripe: null },
    { id: "spring",       label: "Spring",         greeting: "Happy spring",            from: "03-20", to: "06-20", particles: ["flower", "leaf"], colors: ["#f472b6", "#84cc16"],                            hat: null,            stripe: null },
    { id: "summer",       label: "Summer",         greeting: "See you at the shore",    from: "06-21", to: "09-21", particles: ["sun", "drop"], colors: ["#f59e0b", "#14b8a6"],                               hat: null,            stripe: null },
    { id: "fall",         label: "Fall",           greeting: "Happy fall",              from: "09-22", to: "09-30", particles: ["leaf"], colors: ["#ea580c", "#b45309"],                                      hat: null,            stripe: null },
  ],

  // ── Hero code editor ──────────────────────────────────────────────────────
  heroCode: {
    stack:     ["React", "Next.js", "TypeScript"],
    shipsWith: ["Claude Code", "AI agents"],
    openTo:    ["full-time", "contract", "consulting"],
  },

  // ── AI workflow ───────────────────────────────────────────────────────────
  aiWorkflow: {
    intro:
      "I use AI agents every day, and I'm still accountable for every line that ships. Agents speed up the work. Review, testing and judgment decide what goes out.",
    practices: [
      {
        command: "agents run --scoped",
        title: "Custom agents",
        description:
          "Purpose-built agents handle investigation, implementation, code review, cross-client parity checks and issue tracker sweeps, each scoped to one job.",
      },
      {
        command: "verify-tests --break-the-code",
        title: "Tests that prove themselves",
        description:
          "After tests are written, an agent breaks the code under test and confirms they fail, so a green suite actually means something.",
      },
      {
        command: "review --adversarial",
        title: "Independent review",
        description:
          "Changes get an adversarial review against the original requirement before anything merges, with no shortcuts because an agent wrote the code.",
      },
      {
        command: "ship --only-when-green",
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
      icon: "store",
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
      icon: "video",
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
      icon: "ai",
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
      icon: "food",
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

  // ── Recommendations ───────────────────────────────────────────────────────
  linkedinRecommendationCount: 27,
  /** Verbatim excerpts from LinkedIn; "…" marks a cut within a quote */
  recommendations: [
    {
      name: "Laz Fuentes",
      title: "Founder and CEO of SQOR.ai",
      relationship: "Managed Tommy at CPXi",
      quote: "He makes the really hard stuff look easy and inspires everyone else to be better. As GM of the Consumer Applications division at CPXi, I hired Tom to lead front-end development.",
    },
    {
      name: "Barry Clark",
      title: "Interim CTO & Advisor, ex-Trello & Atlassian",
      relationship: "Worked with Tommy at DoSomething",
      quote: "Tom did a tremendous job on the front-end team at DoSomething. … I appreciated his attention to detail, communication, and thoughtfulness in architecting systems that we could reuse.",
    },
    {
      name: "Matt Holford",
      title: "Vice President of Engineering at Oscar Health",
      relationship: "Worked with Tommy at Alexander Interactive",
      quote: "Tom, a marvelously gifted front-end technologist, delivers at such a high level that his work can sometimes seem like magic. … Every member of his team that I've met, past and present, is thankful for the time they spent learning from him.",
    },
    {
      name: "Jeremy Villano",
      title: "Growth Operator for PE-Backed Companies",
      relationship: "Worked with Tommy at Alexander Interactive",
      quote: "I don't think we ever had a project with a reasonable timeline, or with typical deliverables, and Tom consistently helped us figure out the best ways to get the project done. Even when Tom pushed back on feasibility, he always had a suggested solution to get us where we wanted to go.",
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