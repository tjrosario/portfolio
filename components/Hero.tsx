"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/site.config";

function HeroCircle({ initial }: { initial: string }) {
  const [size, setSize] = useState(300);

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w < 480)       setSize(160);
      else if (w < 640)  setSize(200);
      else if (w < 1024) setSize(240);
      else               setSize(300);
    };
    calc();
    window.addEventListener("resize", calc, { passive: true });
    return () => window.removeEventListener("resize", calc);
  }, []);

  const inset1   = Math.round(size * 0.067);  // outer dashed ring inset
  const inset2   = Math.round(size * 0.133);  // avatar inset
  const dotSize  = Math.round(size * 0.027);  // cardinal dot size
  const dotEdge  = Math.round(size * 0.027);  // dot distance from edge
  const fontSize = Math.round(size * 0.34);   // initial letter size

  return (
    <div style={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
      {/* Outer spinning ring */}
      <div style={{
        position: "absolute", inset: 0, borderRadius: "50%",
        border: "1px solid var(--color-border)",
        animation: "spin 22s linear infinite",
      }} />
      {/* Inner dashed ring */}
      <div style={{
        position: "absolute", inset: inset1, borderRadius: "50%",
        border: "1px dashed var(--color-border)",
        animation: "spin 16s linear infinite reverse",
      }} />
      {/* Avatar disc */}
      <div style={{
        position: "absolute", inset: inset2, borderRadius: "50%",
        background: "var(--color-bg-card)",
        border: "1px solid var(--color-border-hover)",
        boxShadow: "var(--shadow-glow)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <span style={{
          fontFamily: "var(--font-display)",
          fontSize: fontSize,
          fontWeight: 800, color: "var(--color-accent)", lineHeight: 1,
        }}>
          {initial}
        </span>
      </div>
      {/* Cardinal dots */}
      {[
        { top: dotEdge,  left: "50%", transform: "translateX(-50%)" },
        { bottom: dotEdge, left: "50%", transform: "translateX(-50%)" },
        { left: dotEdge, top: "50%", transform: "translateY(-50%)" },
        { right: dotEdge, top: "50%", transform: "translateY(-50%)" },
      ].map((s, i) => (
        <div key={i} style={{
          position: "absolute", ...s as React.CSSProperties,
          width: dotSize, height: dotSize, borderRadius: "50%",
          background: "var(--color-accent)", opacity: 0.65,
        }} />
      ))}
    </div>
  );
}

export default function Hero() {
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

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
            <HeroCircle initial={siteConfig.name.charAt(0)} />
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
              {siteConfig.tagline} I focus on building fast, accessible, and visually
              sharp web experiences that make people&apos;s lives easier.
            </p>

            <div className="anim-hidden delay-500" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button onClick={() => scrollTo("#projects")} style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "12px 24px", background: "var(--color-accent)",
                color: "#fff", fontWeight: 700, fontSize: "0.875rem",
                borderRadius: 8, border: "none", cursor: "pointer",
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
              </button>
              <button onClick={() => scrollTo("#contact")} style={{
                padding: "12px 24px", background: "transparent",
                color: "var(--color-text-primary)", fontWeight: 600, fontSize: "0.875rem",
                borderRadius: 8, border: "1px solid var(--color-border)",
                cursor: "pointer", transition: "border-color 0.2s, background 0.2s",
                fontFamily: "var(--font-body)",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--color-border-hover)"; e.currentTarget.style.background = "var(--color-border)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--color-border)";       e.currentTarget.style.background = "transparent"; }}
              >
                Get in Touch
              </button>
            </div>

            {siteConfig.availableForWork && (
              <div className="anim-hidden delay-600" style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ position: "relative", display: "inline-flex", width: 9, height: 9 }}>
                  <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#22c55e", opacity: 0.7, animation: "ping 1.8s cubic-bezier(0,0,0.2,1) infinite" }} />
                  <span style={{ position: "relative", display: "inline-flex", width: 9, height: 9, borderRadius: "50%", background: "#22c55e" }} />
                </span>
                <span style={{ color: "var(--color-text-secondary)", fontSize: "0.82rem" }}>
                  Available for new opportunities
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
