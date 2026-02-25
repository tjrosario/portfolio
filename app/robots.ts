import type { MetadataRoute } from "next";
import { siteConfig } from "@/site.config";

/**
 * robots.txt — Next.js App Router generates /robots.txt
 *
 * Policy:
 * - All user-agents: crawl everything except /api/ routes
 * - GPTBot, Claude-Web, etc. are explicitly blocked if you don't
 *   want your portfolio scraped for AI training (uncomment below)
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow:    "/",
        disallow: [
          "/api/",    // Internal API routes — not useful to index
          "/_next/",  // Next.js internal assets
        ],
      },
      // ── Opt-out AI scrapers (optional — uncomment if desired) ──────────
      // { userAgent: "GPTBot",     disallow: ["/"] },
      // { userAgent: "Claude-Web", disallow: ["/"] },
      // { userAgent: "CCBot",      disallow: ["/"] },
    ],
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
    host:    siteConfig.siteUrl,
  };
}
