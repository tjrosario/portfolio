"use client";

import { siteConfig } from "@/site.config";

export default function Footer() {
  return (
    <footer role="contentinfo" style={{
      borderTop: "1px solid var(--color-border)",
      padding: "36px 0",
      background: "var(--color-bg-section)",
    }}>
      <div style={{
        maxWidth: 1152, margin: "0 auto", padding: "0 24px",
        display: "flex", flexWrap: "wrap",
        alignItems: "center", justifyContent: "space-between", gap: 16,
      }}>
        <p className="font-display" style={{ fontWeight: 800, color: "var(--color-text-primary)", margin: 0, letterSpacing: "-0.01em" }}>
          {siteConfig.name.split(" ")[0]}
          <span style={{ color: "var(--color-accent)" }}>.</span>
        </p>
        <p style={{ color: "var(--color-text-muted)", fontSize: "0.82rem", margin: 0 }}>
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
        <div style={{ display: "flex", gap: 24 }}>
          {[{ l: "GitHub", h: siteConfig.github }, { l: "LinkedIn", h: siteConfig.linkedin }].map(s => (
            <a key={s.l} href={s.h} target="_blank" rel="noopener noreferrer"
              style={{ color: "var(--color-text-muted)", fontSize: "0.82rem", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--color-accent)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--color-text-muted)")}
            >{s.l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
