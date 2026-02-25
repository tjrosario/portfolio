"use client";

import Image from "next/image";
import { siteConfig } from "@/site.config";
import SectionHeader from "./SectionHeader";

const SOCIALS = [
  { label: "GitHub", href: siteConfig.github, icon: <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> },
  { label: "LinkedIn", href: siteConfig.linkedin, icon: <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  // { label: "Twitter / X", href: siteConfig.twitter, icon: <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
];

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "96px 0", maxWidth: 1152, margin: "0 auto", paddingLeft: 24, paddingRight: 24 }}>
      <SectionHeader title="Contact" subtitle="Have a project in mind? Let's talk." />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 52, alignItems: "center" }}>

        {/* Caricature */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ position: "relative" }}>
            <div style={{
              position: "absolute", inset: -8, borderRadius: 22,
              background: "radial-gradient(ellipse at center, var(--color-border-hover) 0%, transparent 70%)",
              filter: "blur(20px)", zIndex: 0,
            }} />
            <div style={{
              position: "relative", zIndex: 1, borderRadius: 16, overflow: "hidden",
              border: "1px solid var(--color-border-hover)",
              boxShadow: "var(--shadow-card)",
              maxWidth: 340, width: "100%",
            }}>
              <Image
                src="/caricature.png"
                alt="Caricature of Tommy Rosario at his desk coding"
                width={340} height={453}
                style={{ display: "block", width: "100%", height: "auto" }}
                priority
              />
            </div>
          </div>
        </div>

        {/* Info */}
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
              I&apos;m always open to hearing about new projects, ideas, or
              opportunities. Whether it&apos;s a quick question or a full
              engagement — feel free to reach out.
            </p>
          </div>

          <a href={`mailto:${siteConfig.email}`} style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "13px 20px", background: "var(--color-accent)",
            color: "#fff", fontWeight: 700, fontSize: "0.875rem",
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
            {siteConfig.email.replace("@", " [at] ")}
          </a>

          <div>
            <p style={{ fontFamily: "monospace", fontSize: "0.66rem", color: "var(--color-text-muted)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 12 }}>
              Find me online
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {SOCIALS.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    width: 42, height: 42, borderRadius: 8,
                    background: "var(--color-bg-card)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text-muted)", transition: "all 0.2s", textDecoration: "none",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = "var(--color-accent)"; e.currentTarget.style.borderColor = "var(--color-border-hover)"; e.currentTarget.style.boxShadow = "var(--shadow-card)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "var(--color-text-muted)"; e.currentTarget.style.borderColor = "var(--color-border)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {siteConfig.availableForWork && (
            <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
              <span style={{ position: "relative", display: "inline-flex", width: 9, height: 9 }}>
                <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#22c55e", opacity: 0.7, animation: "ping 1.8s cubic-bezier(0,0,0.2,1) infinite" }} />
                <span style={{ position: "relative", display: "inline-flex", width: 9, height: 9, borderRadius: "50%", background: "#22c55e" }} />
              </span>
              <span style={{ color: "var(--color-text-secondary)", fontSize: "0.82rem" }}>Available for new opportunities</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
