import type { MetadataRoute } from "next";
import { siteConfig } from "@/site.config";

/**
 * robots.txt — Next.js App Router generates /robots.txt
 * Everything is crawlable, AI crawlers included, so recruiters can find the site through AI search.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
  };
}
