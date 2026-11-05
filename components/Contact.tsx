"use client";

import { siteConfig } from "@/site.config";
import SectionHeader from "./SectionHeader";
import WindowFrame from "./WindowFrame";

const TERMINAL_LINKS = [
  { label: "email   ", href: `mailto:${siteConfig.email}`, text: siteConfig.email },
  { label: "github  ", href: siteConfig.github, text: siteConfig.github.replace("https://", "") },
  { label: "linkedin", href: siteConfig.linkedin, text: "linkedin.com/in/tommy-rosario" },
];

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "96px 0", maxWidth: 1152, margin: "0 auto", paddingLeft: 24, paddingRight: 24 }}>
      <SectionHeader path="./contact.sh" title="Contact" subtitle="Hiring, or have a project in mind? Let's talk." />

      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div>
              <h3 className="font-display" style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800,
                color: "var(--color-text-primary)", margin: "0 0 12px",
                lineHeight: 1.15, letterSpacing: "-0.02em",
              }}>
                Let&apos;s build something{" "}
                <span style={{ color: "var(--color-accent)" }}>great</span>{" "}
                together.
              </h3>
              <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>
                Hiring for a full-time role, need a contractor, or want a consultant on a specific problem? Tell me what you&apos;re working on and I&apos;ll get back to you.
              </p>
            </div>

            <a href={`mailto:${siteConfig.email}`} style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "13px 20px", background: "var(--color-accent)",
              color: "var(--color-on-accent)", fontWeight: 700, fontSize: "0.875rem",
              borderRadius: 8, textDecoration: "none",
              transition: "opacity 0.2s, transform 0.15s",
              alignSelf: "flex-start",
              boxShadow: "var(--shadow-glow)",
              fontFamily: "var(--font-body)",
            }}
              onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = "1";   e.currentTarget.style.transform = "none"; }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              {siteConfig.email}
            </a>

            {siteConfig.availableForWork && (
              <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                <span style={{ position: "relative", display: "inline-flex", width: 9, height: 9 }}>
                  <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#22c55e", opacity: 0.7, animation: "ping 1.8s cubic-bezier(0,0,0.2,1) infinite" }} />
                  <span style={{ position: "relative", display: "inline-flex", width: 9, height: 9, borderRadius: "50%", background: "#22c55e" }} />
                </span>
                <span style={{ color: "var(--color-text-secondary)", fontSize: "0.82rem" }}>{siteConfig.availabilityLabel}</span>
              </div>
            )}
        </div>

        <WindowFrame label="contact.sh">
          <div className="terminal-body">
            <p aria-hidden="true" className="terminal-line"><span className="tok-keyword">$</span> ./hire-tommy --info</p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {TERMINAL_LINKS.map(l => (
                <li key={l.label} className="terminal-line" style={{ display: "flex", gap: 12 }}>
                  <span className="tok-key" style={{ whiteSpace: "pre", flexShrink: 0 }}>{l.label}</span>
                  <a className="terminal-link" href={l.href} {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{l.text}</a>
                </li>
              ))}
              <li className="terminal-line" style={{ display: "flex", gap: 12 }}>
                <span className="tok-key" style={{ whiteSpace: "pre", flexShrink: 0 }}>location</span>
                {siteConfig.location}
              </li>
            </ul>
            <p aria-hidden="true" className="terminal-line"><span className="tok-keyword">$</span><span className="editor-caret" /></p>
          </div>
        </WindowFrame>
      </div>
    </section>
  );
}
