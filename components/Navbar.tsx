"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/site.config";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize(); // set initial value
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const go = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const linkStyle: React.CSSProperties = {
    background: "none", border: "none", cursor: "pointer",
    fontFamily: "var(--font-body)", fontSize: "0.875rem",
    fontWeight: 500, color: "var(--color-text-secondary)",
    transition: "color 0.2s", padding: 0,
  };

  return (
    <header role="banner" style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      transition: "background 0.3s, border-color 0.3s",
      background: scrolled ? "var(--color-bg-nav)" : "transparent",
      backdropFilter: scrolled ? "blur(14px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
      borderBottom: scrolled ? "1px solid var(--color-border-nav)" : "1px solid transparent",
    }}>
      <nav aria-label="Main navigation" style={{
        maxWidth: 1152, margin: "0 auto", padding: "0 24px",
        height: 64, display: "flex", alignItems: "center", justifyContent: "space-between",
        gap: 16,
      }}>
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          style={{
            ...linkStyle,
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "1.1rem", color: "var(--color-text-primary)", flexShrink: 0,
          }}
        >
          {siteConfig.name.split(" ")[0]}
          <span style={{ color: "var(--color-accent)" }}>.</span>
        </button>

        {/* Desktop nav links — hidden on mobile */}
        {!isMobile && (
          <ul style={{ listStyle: "none", margin: 0, padding: 0, gap: 32, flex: 1, justifyContent: "center", display: "flex" }}>
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <button onClick={() => go(link.href)} style={linkStyle}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--color-text-primary)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--color-text-secondary)")}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Right side — single ThemeToggle, always rendered once */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          <ThemeToggle />

          {/* Hire me — desktop only */}
          {!isMobile && (
            <a href={`mailto:${siteConfig.email}`} style={{
              padding: "7px 16px", borderRadius: 6,
              background: "var(--color-accent)", color: "#fff",
              fontSize: "0.8rem", fontWeight: 700,
              textDecoration: "none", transition: "opacity 0.2s",
              fontFamily: "var(--font-body)", whiteSpace: "nowrap",
            }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              Hire me
            </a>
          )}

          {/* Hamburger — mobile only */}
          {isMobile && (
            <button
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(v => !v)}
              style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", gap: 5, padding: 8 }}
            >
              {[0,1,2].map(i => (
                <span key={i} style={{
                  display: "block", width: 22, height: 2,
                  background: "var(--color-text-primary)", borderRadius: 2, transition: "all 0.3s",
                  transform: mobileOpen && i === 0 ? "rotate(45deg) translate(5px,5px)" : mobileOpen && i === 2 ? "rotate(-45deg) translate(5px,-5px)" : "none",
                  opacity: mobileOpen && i === 1 ? 0 : 1,
                }} />
              ))}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile drawer */}
      {isMobile && (
        <div style={{
          maxHeight: mobileOpen ? 320 : 0, overflow: "hidden",
          transition: "max-height 0.3s ease",
          background: "var(--color-bg-nav)",
          backdropFilter: "blur(14px)",
          borderBottom: mobileOpen ? "1px solid var(--color-border-nav)" : "none",
        }}>
          <ul style={{ listStyle: "none", padding: "16px 24px 20px", margin: 0, display: "flex", flexDirection: "column", gap: 18 }}>
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <button onClick={() => go(link.href)}
                  style={{ ...linkStyle, fontSize: "1rem", color: "var(--color-text-primary)", width: "100%", textAlign: "left" }}
                >{link.label}</button>
              </li>
            ))}
            <li>
              <a href={`mailto:${siteConfig.email}`} style={{
                display: "inline-block", padding: "9px 20px", borderRadius: 6,
                background: "var(--color-accent)", color: "#fff",
                fontSize: "0.875rem", fontWeight: 700,
                textDecoration: "none", fontFamily: "var(--font-body)",
              }}>
                Hire me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
