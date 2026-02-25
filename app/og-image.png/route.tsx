/**
 * Dynamic Open Graph image generated at request time using Next.js ImageResponse.
 *
 * Renders a 1200×630 dark-background card with:
 * - Name + role
 * - Short bio excerpt
 * - Tech keywords row
 * - Teal accent elements
 *
 * No external dependencies — uses the built-in @vercel/og.
 */

import { ImageResponse } from "next/og";
import { siteConfig } from "@/site.config";

export const runtime = "edge";

export const alt = `${siteConfig.name} — Frontend Developer Portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0b0f14",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Teal corner accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "6px",
            height: "100%",
            background: "linear-gradient(180deg, #2dd4bf, transparent)",
          }}
        />

        {/* Top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "40px",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "#111820",
              border: "2px solid #2dd4bf",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#2dd4bf",
              fontWeight: 800,
              fontSize: "22px",
            }}
          >
            {siteConfig.name.charAt(0)}
          </div>
          <span style={{ color: "#2dd4bf", fontSize: "14px", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Portfolio
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 800,
            lineHeight: 1,
            color: "#ffffff",
            marginBottom: "16px",
          }}
        >
          {siteConfig.firstName}{" "}
          <span style={{ color: "#2dd4bf" }}>{siteConfig.lastName}</span>
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: "28px",
            color: "#94a3b8",
            marginBottom: "32px",
            fontWeight: 500,
          }}
        >
          Freelance Frontend Developer &amp; React Specialist
        </div>

        {/* Bio excerpt */}
        <div
          style={{
            fontSize: "18px",
            color: "#64748b",
            maxWidth: "800px",
            lineHeight: 1.6,
            marginBottom: "48px",
          }}
        >
          {siteConfig.metaDescription}
        </div>

        {/* Tech pills */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {["React", "Next.js", "TypeScript", "JavaScript", "Node.js"].map((t) => (
            <div
              key={t}
              style={{
                padding: "8px 16px",
                background: "rgba(45,212,191,0.1)",
                border: "1px solid rgba(45,212,191,0.3)",
                borderRadius: "8px",
                color: "#2dd4bf",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              {t}
            </div>
          ))}
        </div>

        {/* URL bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "80px",
            color: "#334155",
            fontSize: "14px",
          }}
        >
          {siteConfig.siteUrl.replace("https://", "")}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
