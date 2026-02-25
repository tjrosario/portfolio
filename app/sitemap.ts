import type { MetadataRoute } from "next";
import { siteConfig } from "@/site.config";

/**
 * Dynamic XML sitemap — Next.js App Router generates /sitemap.xml
 *
 * For a single-page portfolio the root URL is the canonical entry point.
 * Section anchors are listed separately so Googlebot understands the
 * page structure and can deep-link to specific sections in SERPs.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;
  // Use a stable date rather than new Date() to avoid constant cache busting.
  // Update this whenever you make significant content changes.
  const lastModified = new Date("2025-01-01").toISOString();

  return [
    // ── Root — the canonical URL for the entire portfolio ─────────────────
    {
      url:             base,
      lastModified,
      changeFrequency: "monthly",
      priority:        1.0,
    },
    // ── Section anchors ───────────────────────────────────────────────────
    {
      url:             `${base}/#about`,
      lastModified,
      changeFrequency: "monthly",
      priority:        0.8,
    },
    {
      url:             `${base}/#experience`,
      lastModified,
      changeFrequency: "monthly",
      priority:        0.8,
    },
    {
      url:             `${base}/#skills`,
      lastModified,
      changeFrequency: "monthly",
      priority:        0.7,
    },
    {
      url:             `${base}/#projects`,
      lastModified,
      changeFrequency: "monthly",
      priority:        0.9,
    },
    {
      url:             `${base}/#contact`,
      lastModified,
      changeFrequency: "yearly",
      priority:        0.6,
    },
  ];
}
