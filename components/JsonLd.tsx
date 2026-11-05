/**
 * JsonLd.tsx — Server Component that injects JSON-LD structured data.
 *
 * Schemas included:
 *  1. Person        — Tommy as a named professional (Google Knowledge Panel)
 *  2. WebSite       — ties the site to the Person entity
 *  3. ProfilePage   — WebPage type for portfolio pages (schema.org v20+)
 *  4. ItemList      — project list as CreativeWork entries
 *
 * All schemas use @id cross-references so Google can resolve the entity graph.
 *
 * Zero client JavaScript — rendered as static <script> tags by app/page.tsx.
 */

import { siteConfig } from "@/site.config";

type JsonValue =
  | string | number | boolean | null
  | JsonValue[]
  | { [k: string]: JsonValue };

function buildSchemas(): JsonValue[] {
  const base = siteConfig.siteUrl;

  // ── 1. Person ────────────────────────────────────────────────────────────
  const person: { [k: string]: JsonValue } = {
    "@context": "https://schema.org",
    "@type":    "Person",
    "@id":      `${base}/#person`,
    name:       siteConfig.name,
    givenName:  siteConfig.firstName,
    familyName: siteConfig.lastName,
    url:        base,
    email:      `mailto:${siteConfig.email}`,
    jobTitle:   siteConfig.role,
    description: siteConfig.metaDescription,
    image: {
      "@type":  "ImageObject",
      url:      `${base}${siteConfig.ogImage}`,
      width:    1200,
      height:   630,
    },
    address: {
      "@type":          "PostalAddress",
      addressRegion:    "NJ",
      addressCountry:   "US",
    },
    // sameAs links build the entity's identity graph (LinkedIn, GitHub, Twitter)
    sameAs: [
      siteConfig.github,
      siteConfig.linkedin,
      siteConfig.twitter,
    ],
    knowsAbout: [...siteConfig.knowsAbout],
    // Occupation helps surface in "hire" searches
    hasOccupation: {
      "@type":       "Occupation",
      name:          siteConfig.role,
      description:   "Designs and builds web applications using React, TypeScript, and modern JavaScript frameworks.",
      skills:        siteConfig.knowsAbout.join(", "),
    },
    // Offer of service — supports "hire frontend developer" intent
    makesOffer: {
      "@type":       "Offer",
      name:          "Software Engineering Services",
      description:   siteConfig.availabilityLabel,
      url:           `${base}/#contact`,
    },
  };

  // ── 2. WebSite ───────────────────────────────────────────────────────────
  const website: { [k: string]: JsonValue } = {
    "@context":  "https://schema.org",
    "@type":     "WebSite",
    "@id":       `${base}/#website`,
    url:         base,
    name:        `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.metaDescription,
    author:      { "@id": `${base}/#person` },
    inLanguage:  "en-US",
  };

  // ── 3. ProfilePage (WebPage subtype for portfolio/person pages) ──────────
  const webpage: { [k: string]: JsonValue } = {
    "@context":   "https://schema.org",
    "@type":      "ProfilePage",
    "@id":        `${base}/#webpage`,
    url:          base,
    name:         `${siteConfig.name} — ${siteConfig.role}`,
    description:  siteConfig.metaDescription,
    isPartOf:     { "@id": `${base}/#website` },
    about:        { "@id": `${base}/#person` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url:     `${base}${siteConfig.ogImage}`,
    },
    inLanguage:   "en-US",
    dateModified: siteConfig.lastUpdated,
    breadcrumb:   {
      "@type":           "BreadcrumbList",
      itemListElement:   [
        {
          "@type":    "ListItem",
          position:   1,
          name:       "Home",
          item:       base,
        },
      ],
    },
  };

  // ── 4. ItemList — Projects ───────────────────────────────────────────────
  const projectsList: { [k: string]: JsonValue } = {
    "@context": "https://schema.org",
    "@type":    "ItemList",
    "@id":      `${base}/#projects`,
    name:       `Projects by ${siteConfig.name}`,
    description:
      "A selection of web applications built with React, Next.js, and TypeScript.",
    author:     { "@id": `${base}/#person` },
    numberOfItems: siteConfig.projects.length,
    itemListElement: siteConfig.projects.map((project, index) => ({
      "@type":    "ListItem",
      position:   index + 1,
      item: {
        "@type":        "SoftwareSourceCode",
        name:           project.name,
        description:    project.description,
        author:         { "@id": `${base}/#person` },
        url:            project.live ?? project.github ?? base,
        ...(project.github ? { codeRepository: project.github } : {}),
        keywords:       project.stack.join(", "),
        programmingLanguage: "TypeScript",
        inLanguage:     "en-US",
      },
    })),
  };

  return [person, website, webpage, projectsList];
}

export default function JsonLd() {
  const schemas = buildSchemas();

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          // Safe: content is built entirely from our own config constants
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 0) }}
        />
      ))}
    </>
  );
}
