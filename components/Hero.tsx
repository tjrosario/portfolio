"use client";

import Image from "next/image";
import { siteConfig } from "@/site.config";

function HeroCircle() {
  return (
    <div style={{ position: "relative", width: "clamp(200px, 55vw, 360px)", aspectRatio: "1", flexShrink: 0 }}>
      {/* Outer spinning ring */}
      <div style={{
        position: "absolute", inset: 0, borderRadius: "50%",
        border: "1px solid var(--color-border)",
        animation: "spin 22s linear infinite",
      }} />
      {/* Inner dashed ring */}
      <div style={{
        position: "absolute", inset: "4%", borderRadius: "50%",
        border: "1px dashed var(--color-border)",
        animation: "spin 16s linear infinite reverse",
      }} />
      {/* Avatar disc */}
      <div style={{
        position: "absolute", inset: "8%", borderRadius: "50%", overflow: "hidden",
        background: "var(--color-bg-card)",
        border: "1px solid var(--color-border-hover)",
        boxShadow: "var(--shadow-glow)",
      }}>
        <Image
          src="/caricature.png"
          alt={`Caricature of ${siteConfig.name} coding at his desk`}
          fill
          sizes="(max-width: 640px) 200px, 300px"
          style={{ objectFit: "cover", objectPosition: "50% 32%" }}
          priority
        />
      </div>
      {/* Cardinal dots */}
      {[
        { top: "1%", left: "50%", transform: "translateX(-50%)" },
        { bottom: "1%", left: "50%", transform: "translateX(-50%)" },
        { left: "1%", top: "50%", transform: "translateY(-50%)" },
        { right: "1%", top: "50%", transform: "translateY(-50%)" },
      ].map((s, i) => (
        <div key={i} style={{
          position: "absolute", ...s as React.CSSProperties,
          width: "2.7%", aspectRatio: "1", borderRadius: "50%",
          background: "var(--color-accent)", opacity: 0.65,
        }} />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" aria-label="Hero" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      paddingTop: 64, position: "relative", overflow: "hidden",
    }}>
      <div aria-hidden="true" className="grid-bg" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
      <div aria-hidden="true" style={{
        position: "absolute", top: "-10%", right: "-5%",
        width: 700, height: 700,
        background: "radial-gradient(circle, var(--color-border) 0%, transparent 65%)",
        pointerEvents: "none", opacity: 0.6,
      }} />

      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "80px 24px", width: "100%" }}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Graphic */}
          <div className="anim-hidden flex justify-center lg:justify-start">
            <HeroCircle />
          </div>

          {/* Text */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p className="anim-hidden delay-100" style={{
              fontFamily: "monospace", fontSize: "0.72rem", fontWeight: 600,
              letterSpacing: "0.22em", textTransform: "uppercase",
              color: "var(--color-accent)",
            }}>
              Hello, I&apos;m
            </p>

            <h1 className="anim-hidden delay-200" style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3.2rem, 7vw, 5.2rem)",
              fontWeight: 800, lineHeight: 0.95,
              color: "var(--color-text-primary)",
              margin: 0, letterSpacing: "-0.03em",
            }}>
              {siteConfig.name.split(" ")[0]}{" "}
              <span style={{ color: "var(--color-accent)" }}>{siteConfig.name.split(" ")[1]}</span>
            </h1>

            <p className="anim-hidden delay-300" style={{
              fontFamily: "var(--font-display)", fontSize: "1.15rem",
              fontWeight: 600, color: "var(--color-text-secondary)", letterSpacing: "-0.01em",
            }}>
              {siteConfig.role}
            </p>

            <p className="anim-hidden delay-400" style={{
              color: "var(--color-text-secondary)", fontSize: "1rem",
              lineHeight: 1.75, maxWidth: 460,
            }}>
              {siteConfig.tagline}
            </p>

            <div className="anim-hidden delay-500" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#projects" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "12px 24px", background: "var(--color-accent)",
                color: "var(--color-on-accent)", fontWeight: 700, fontSize: "0.875rem",
                borderRadius: 8, textDecoration: "none",
                transition: "opacity 0.2s, transform 0.15s",
                fontFamily: "var(--font-body)",
                boxShadow: "var(--shadow-glow)",
              }}
                onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = "1";   e.currentTarget.style.transform = "none"; }}
              >
                View Projects
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#contact" style={{
                padding: "12px 24px", background: "transparent",
                color: "var(--color-text-primary)", fontWeight: 600, fontSize: "0.875rem",
                borderRadius: 8, border: "1px solid var(--color-border)",
                textDecoration: "none", transition: "border-color 0.2s, background 0.2s",
                fontFamily: "var(--font-body)",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--color-border-hover)"; e.currentTarget.style.background = "var(--color-border)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--color-border)";       e.currentTarget.style.background = "transparent"; }}
              >
                Get in Touch
              </a>
            </div>

            {siteConfig.availableForWork && (
              <div className="anim-hidden delay-600" style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ position: "relative", display: "inline-flex", width: 9, height: 9 }}>
                  <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#22c55e", opacity: 0.7, animation: "ping 1.8s cubic-bezier(0,0,0.2,1) infinite" }} />
                  <span style={{ position: "relative", display: "inline-flex", width: 9, height: 9, borderRadius: "50%", background: "#22c55e" }} />
                </span>
                <span style={{ color: "var(--color-text-secondary)", fontSize: "0.82rem" }}>
                  {siteConfig.availabilityLabel}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
