"use client";

import { siteConfig } from "@/site.config";

export default function Ticker() {
  const items = [...siteConfig.tickerWords, ...siteConfig.tickerWords];
  return (
    <div aria-hidden="true" style={{
      overflow: "hidden",
      borderTop: "1px solid var(--color-border)",
      borderBottom: "1px solid var(--color-border)",
      padding: "12px 0",
      background: "var(--color-bg-section)",
    }}>
      <div className="animate-marquee" style={{ display: "flex", whiteSpace: "nowrap", willChange: "transform" }}>
        {items.map((word, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 16, margin: "0 16px" }}>
            <span style={{
              fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase",
              color: "var(--color-text-muted)",
            }}>
              {word}
            </span>
            <span style={{ color: "var(--color-accent)", fontSize: "0.4rem", opacity: 0.5 }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
