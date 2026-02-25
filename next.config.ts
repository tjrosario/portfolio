import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL ?? "https://tommyrosario.me",
  },
};

export default nextConfig;
