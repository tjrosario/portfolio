import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  // Pin the workspace root so stray parent-directory lockfiles cannot shift it
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
