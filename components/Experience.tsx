"use client";

import { useState } from "react";
import type { ExperienceEntry } from "@/lib/experience.types";
import SectionHeader from "./SectionHeader";

function formatDate(d: string) {
  if (d === "Present") return "Present";
  const [year, month] = d.split("-");
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const mo = parseInt(month, 10);
  return mo >= 1 && mo <= 12 ? `${months[mo - 1]} ${year}` : year;
}

function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div style={{ position: "relative", paddingLeft: 28, paddingBottom: 40 }}>
      <div style={{
        position: "absolute", left: 0, top: 12, bottom: 0, width: 1,
        background: "linear-gradient(to bottom, var(--color-border-hover), var(--color-border))",
        opacity: 0.6,
      }} />
      <div style={{
        position: "absolute", left: -4, top: 12, width: 8, height: 8, borderRadius: "50%",
        border: "2px solid var(--color-accent)",
        background: hovered ? "var(--color-accent)" : "var(--color-bg-base)",
        transition: "background 0.2s, box-shadow 0.2s",
        boxShadow: hovered ? "0 0 10px var(--color-accent-glow, rgba(249,115,22,0.4))" : "none",
      }} />
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          marginLeft: 20,
          background: "var(--color-bg-card)",
          border: `1px solid ${hovered ? "var(--color-border-hover)" : "var(--color-border)"}`,
          borderRadius: 12, padding: 22,
          boxShadow: hovered ? "var(--shadow-card)" : "none",
          transition: "border-color 0.3s, box-shadow 0.3s",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 4 }}>
          <div>
            <h3 className="font-display" style={{ fontWeight: 700, fontSize: "1.05rem", color: "var(--color-text-primary)", margin: 0, letterSpacing: "-0.01em" }}>
              {entry.title}
            </h3>
            <p style={{ color: "var(--color-accent)", fontWeight: 600, fontSize: "0.85rem", margin: "3px 0 0" }}>{entry.company}</p>
          </div>
          <div style={{ textAlign: "right", flexShrink: 0 }}>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.73rem", fontFamily: "monospace", margin: 0 }}>
              {formatDate(entry.startDate)} — {formatDate(entry.endDate)}
            </p>
            {entry.location && (
              <p style={{ color: "var(--color-text-muted)", fontSize: "0.73rem", margin: "3px 0 0" }}>{entry.location}</p>
            )}
          </div>
        </div>

        {entry.bullets.length > 0 && (
          <ul style={{ margin: "14px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 7 }}>
            {entry.bullets.map((b, i) => (
              <li key={i} style={{ display: "flex", gap: 8, color: "var(--color-text-secondary)", fontSize: "0.855rem", lineHeight: 1.65 }}>
                <span style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: 4, fontSize: "0.5rem" }}>▸</span>
                {b}
              </li>
            ))}
          </ul>
        )}

        {entry.tech && entry.tech.length > 0 && (
          <div style={{ marginTop: 14, display: "flex", flexWrap: "wrap", gap: 7 }}>
            {entry.tech.map(t => (
              <span key={t} style={{
                padding: "2px 9px", fontSize: "0.72rem", borderRadius: 5,
                background: "var(--color-border)",
                color: "var(--color-accent)",
                border: "1px solid var(--color-border-hover)",
                fontWeight: 600,
              }}>{t}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Experience({ entries }: { entries: ExperienceEntry[] }) {
  return (
    <section id="experience" style={{ padding: "96px 0", background: "var(--color-bg-section)" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>
        <SectionHeader title="Experience" subtitle="Places I've worked and the things I've built." />
        {entries.length > 0 ? (
          <div style={{ maxWidth: 760 }}>
            {entries.map((e, i) => <ExperienceCard key={i} entry={e} />)}
          </div>
        ) : (
          <p style={{ color: "var(--color-text-muted)" }}>No experience entries found.</p>
        )}
      </div>
    </section>
  );
}
