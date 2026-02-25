"use client";

import { siteConfig } from "@/site.config";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" style={{ padding: "96px 0", maxWidth: 1152, margin: "0 auto", paddingLeft: 24, paddingRight: 24 }}>
      <SectionHeader title="About" subtitle="A little about who I am and what I do." />
      <div className="grid lg:grid-cols-2 gap-14 items-start">
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <p style={{ color: "var(--color-text-primary)", fontSize: "1rem", lineHeight: 1.85, margin: 0 }}>{siteConfig.bio}</p>
          <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.85, margin: 0 }}>
            When I&apos;m not in front of a screen, you&apos;ll find me enjoying life at the Jersey Shore,
            hitting the gym, or spending time with my wife and kids. Being a husband and father
            is the best job I&apos;ve got.
          </p>
          <a href={`mailto:${siteConfig.email}`} style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            color: "var(--color-accent)", fontSize: "0.875rem", fontWeight: 600,
            textDecoration: "none", alignSelf: "flex-start",
          }}>
            {siteConfig.email}
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {siteConfig.bioHighlights.map((h, i) => (
            <div key={i} style={{
              background: "var(--color-bg-card)",
              border: "1px solid var(--color-border)",
              borderRadius: 10, padding: 18,
              boxShadow: "var(--shadow-card)",
              transition: "border-color 0.25s, box-shadow 0.25s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "var(--color-border-hover)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "var(--color-border)"; }}
            >
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: 1 }}>
                  <svg width="15" height="15" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path d="M3 9l4 4 8-8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <p style={{ color: "var(--color-text-primary)", fontSize: "0.83rem", lineHeight: 1.6, margin: 0 }}>{h}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
