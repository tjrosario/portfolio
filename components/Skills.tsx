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
      <SectionHeader path="./skills.json" title="Skills" subtitle="Technologies and tools I work with day-to-day." />

      <div style={{ marginBottom: 44 }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--color-text-muted)", marginBottom: 14 }}>
          {"// core strengths"}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {siteConfig.coreStrengths.map(s => (
            <span key={s} style={{
              padding: "7px 16px", borderRadius: 7,
              background: "var(--color-border)",
              border: "1px solid var(--color-border-hover)",
              color: "var(--color-accent)", fontWeight: 600, fontSize: "0.8rem", cursor: "default",
              fontFamily: "var(--font-mono)",
            }}>{`<${s} />`}</span>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {siteConfig.skillGroups.map(group => (
          <div key={group.label} style={{
            background: "var(--color-bg-card)",
            border: "1px solid var(--color-border)",
            borderRadius: 12, padding: 18,
          }}>
            <h3 style={{ fontFamily: "var(--font-mono)", fontWeight: 600, fontSize: "0.8rem", color: "var(--color-text-primary)", margin: "0 0 14px" }}>
              <span aria-hidden="true" className="tok-json-key">&quot;</span>
              <span className="tok-json-key">{group.label}</span>
              <span aria-hidden="true" className="tok-json-key">&quot;</span>
              <span aria-hidden="true" style={{ color: "var(--color-text-muted)" }}>: [</span>
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
              {group.skills.map(skill => <SkillChip key={skill} label={skill} />)}
            </div>
            <p aria-hidden="true" style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--color-text-muted)", margin: "14px 0 0" }}>]</p>
          </div>
        ))}
      </div>
    </section>
  );
}
