import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  // Pin the workspace root so stray parent-directory lockfiles cannot shift it
  turbopack: {
    root: __dirname,
  },
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL ?? "https://tommyrosario.me",
  },
};

export default nextConfig;
