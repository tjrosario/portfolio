/**
 * app/og/route.tsx — Dynamic Open Graph image
 *
 * Generates a 1200×630 PNG using Next.js ImageResponse.
 * Served at /og and referenced in metadata as ogImage.
 *
 * Zero external dependencies — uses next/og (built-in).
 */

import { ImageResponse } from "next/og";
import { siteConfig } from "@/site.config";

export const runtime = "edge"; // fastest; no Node.js runtime needed

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width:           "100%",
          height:          "100%",
          display:         "flex",
          alignItems:      "center",
          justifyContent:  "flex-start",
          background:      "#0b0f14",
          fontFamily:      "sans-serif",
          padding:         "60px 80px",
          position:        "relative",
          overflow:        "hidden",
        }}
      >
        {/* Ambient glow */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 800,
          height: 400,
          background: "radial-gradient(ellipse, rgba(45,212,191,0.08) 0%, transparent 70%)",
          borderRadius: "50%",
        }} />

        {/* Avatar */}
        <div style={{
          width: 160, height: 160,
          borderRadius: "50%",
          background: "#111820",
          border: "3px solid rgba(45,212,191,0.35)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          marginRight: 60,
        }}>
          <span style={{ fontSize: 80, fontWeight: 800, color: "#2dd4bf" }}>
            {siteConfig.firstName.charAt(0)}
          </span>
        </div>

        {/* Text content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <p style={{ margin: 0, fontSize: 18, color: "#2dd4bf", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 500 }}>
            Frontend Developer
          </p>
          <h1 style={{ margin: 0, fontSize: 72, fontWeight: 800, color: "#fff", lineHeight: 1 }}>
            {siteConfig.name}
          </h1>
          <p style={{ margin: 0, fontSize: 28, color: "#94a3b8" }}>
            React · Next.js · TypeScript
          </p>
          <p style={{ margin: 0, fontSize: 20, color: "rgba(100,116,139,0.8)" }}>
            {siteConfig.location} · Available for freelance work
          </p>
        </div>

        {/* Site URL watermark */}
        <p style={{
          position: "absolute",
          bottom: 40,
          right: 80,
          margin: 0,
          fontSize: 18,
          color: "rgba(45,212,191,0.4)",
        }}>
          {siteConfig.siteUrl.replace("https://", "")}
        </p>
      </div>
    ),
    {
      width:  1200,
      height: 630,
    }
  );
}
