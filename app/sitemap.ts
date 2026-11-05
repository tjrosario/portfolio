import type { MetadataRoute } from "next";
import { siteConfig } from "@/site.config";

/** Dynamic XML sitemap — Next.js App Router generates /sitemap.xml */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url:             siteConfig.siteUrl,
      lastModified:    new Date(siteConfig.lastUpdated).toISOString(),
      changeFrequency: "monthly",
      priority:        1.0,
    },
  ];
}
