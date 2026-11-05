import { siteConfig } from "@/site.config";
import SectionHeader from "./SectionHeader";
import WindowFrame from "./WindowFrame";

export default function About() {
  return (
    <section id="about" style={{ padding: "96px 0", maxWidth: 1152, margin: "0 auto", paddingLeft: 24, paddingRight: 24 }}>
      <SectionHeader path="./about.tsx" title="About" subtitle="A little about who I am and what I do." />
      <div className="grid lg:grid-cols-2 gap-14 items-start">
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <p style={{ color: "var(--color-text-primary)", fontSize: "1rem", lineHeight: 1.85, margin: 0 }}>{siteConfig.bio}</p>
          <p style={{ color: "var(--color-text-primary)", fontSize: "1rem", lineHeight: 1.85, margin: 0 }}>{siteConfig.bioExtended}</p>
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

        <WindowFrame label="highlights.sh">
          <div className="terminal-body">
            <p aria-hidden="true" className="terminal-line"><span className="tok-keyword">$</span> ./highlights --all</p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {siteConfig.bioHighlights.map(h => (
                <li key={h} className="terminal-line" style={{ display: "flex", gap: 10 }}>
                  <span aria-hidden="true" className="tok-string">✓</span>
                  {h}
                </li>
              ))}
            </ul>
            <p aria-hidden="true" className="terminal-line"><span className="tok-keyword">$</span><span className="editor-caret" /></p>
          </div>
        </WindowFrame>
      </div>
    </section>
  );
}
