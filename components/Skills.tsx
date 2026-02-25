"use client";

import { useState } from "react";
import { siteConfig } from "@/site.config";
import SectionHeader from "./SectionHeader";

function SkillChip({ label }: { label: string }) {
  const [h, setH] = useState(false);
  return (
    <span onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{
      padding: "5px 11px", fontSize: "0.78rem", borderRadius: 6, cursor: "default",
      background: h ? "var(--color-border)" : "var(--color-bg-card)",
      border: `1px solid ${h ? "var(--color-border-hover)" : "var(--color-border)"}`,
      color: h ? "var(--color-text-primary)" : "var(--color-text-secondary)",
      transition: "all 0.18s", display: "inline-block",
      boxShadow: h ? "var(--shadow-card)" : "none",
    }}>
      {label}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "96px 0", maxWidth: 1152, margin: "0 auto", paddingLeft: 24, paddingRight: 24 }}>
      <SectionHeader title="Skills" subtitle="Technologies and tools I work with day-to-day." />

      <div style={{ marginBottom: 44 }}>
        <p style={{ fontFamily: "monospace", fontSize: "0.68rem", color: "var(--color-text-muted)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 14 }}>
          Core Strengths
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {siteConfig.coreStrengths.map(s => (
            <span key={s} style={{
              padding: "7px 16px", borderRadius: 7,
              background: "var(--color-border)",
              border: "1px solid var(--color-border-hover)",
              color: "var(--color-accent)", fontWeight: 700, fontSize: "0.85rem", cursor: "default",
            }}>{s}</span>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {siteConfig.skillGroups.map(group => (
          <div key={group.label}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 14 }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--color-accent)", flexShrink: 0 }} />
              <p className="font-display" style={{ fontWeight: 700, fontSize: "0.85rem", color: "var(--color-text-primary)", margin: 0 }}>
                {group.label}
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
              {group.skills.map(skill => <SkillChip key={skill} label={skill} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
