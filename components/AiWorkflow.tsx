import { siteConfig } from "@/site.config";
import SectionHeader from "./SectionHeader";

export default function AiWorkflow() {
  const { intro, practices } = siteConfig.aiWorkflow;

  return (
    <section id="ai" className="grid-bg" style={{ padding: "96px 0" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>
        <SectionHeader path="./ai-workflow.tsx" title="How I Build with AI" subtitle="AI-assisted engineering, with the guardrails to ship it." />
        <p style={{ color: "var(--color-text-primary)", fontSize: "1rem", lineHeight: 1.85, margin: "0 0 32px", maxWidth: 720 }}>
          {intro}
        </p>
        <div className="grid sm:grid-cols-2 gap-5">
          {practices.map(p => (
            <article key={p.title} style={{
              background: "var(--color-bg-card)",
              border: "1px solid var(--color-border)",
              borderRadius: 12, padding: 22,
            }}>
              <p aria-hidden="true" style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--color-accent)", margin: "0 0 12px" }}>
                $ {p.command}
              </p>
              <h3 className="font-display" style={{ fontWeight: 700, fontSize: "1rem", color: "var(--color-text-primary)", margin: "0 0 8px", letterSpacing: "-0.01em" }}>
                {p.title}
              </h3>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "0.85rem", lineHeight: 1.65, margin: 0 }}>
                {p.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
