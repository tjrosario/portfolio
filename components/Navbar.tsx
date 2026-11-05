"use client";

import { useState, useEffect, useRef } from "react";
import { siteConfig } from "@/site.config";
import { useResume } from "@/lib/resume";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "AI",         href: "#ai" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { open: openResume } = useResume();
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    requestAnimationFrame(onScroll); // deep links can load mid-page
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkStyle: React.CSSProperties = {
    fontFamily: "var(--font-body)", fontSize: "0.875rem",
    fontWeight: 500, color: "var(--color-text-secondary)",
    transition: "color 0.2s", textDecoration: "none",
  };

  return (
    <header role="banner" style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      transition: "background 0.3s, border-color 0.3s",
      background: scrolled || mobileOpen ? "var(--color-bg-nav)" : "transparent",
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
        <a
          href="#hero"
          aria-label={`${siteConfig.name}, back to top`}
          style={{
            ...linkStyle,
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "1.1rem", color: "var(--color-text-primary)", flexShrink: 0,
          }}
        >
          <span style={{ color: "var(--color-accent)" }}>&lt;</span>
          {siteConfig.firstName}
          <span style={{ color: "var(--color-accent)" }}>{" />"}</span>
        </a>

        {/* Desktop nav links — hidden on mobile */}
        <ul className="hidden lg:flex" style={{ listStyle: "none", margin: 0, padding: 0, gap: 32, flex: 1, justifyContent: "center" }}>
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a href={link.href} style={linkStyle}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--color-text-primary)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--color-text-secondary)")}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button type="button" onClick={openResume} style={{ ...linkStyle, background: "none", border: "none", padding: 0, cursor: "pointer" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--color-text-primary)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--color-text-secondary)")}
            >
              Resume
            </button>
          </li>
        </ul>

        {/* Right side — single ThemeToggle, always rendered once */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          <ThemeToggle />

          {/* Hire me — desktop only */}
          <a href="#contact" className="hidden lg:inline-block" style={{
            padding: "7px 16px", borderRadius: 6,
            background: "var(--color-accent)", color: "var(--color-on-accent)",
            fontSize: "0.8rem", fontWeight: 700,
            textDecoration: "none", transition: "opacity 0.2s",
            fontFamily: "var(--font-body)", whiteSpace: "nowrap",
          }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            Hire me
          </a>

          {/* Hamburger — mobile only */}
          <button
            ref={hamburgerRef}
            className="flex lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(v => !v)}
            style={{ background: "none", border: "none", cursor: "pointer", flexDirection: "column", gap: 5, padding: 8 }}
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
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className="lg:hidden" style={{
        maxHeight: mobileOpen ? "calc(100dvh - 64px)" : 0, overflowX: "hidden", overflowY: mobileOpen ? "auto" : "hidden",
        visibility: mobileOpen ? "visible" : "hidden",
        transition: "max-height 0.3s ease, visibility 0.3s",
        background: "var(--color-bg-nav)",
        backdropFilter: "blur(14px)",
        borderBottom: mobileOpen ? "1px solid var(--color-border-nav)" : "none",
      }}>
        <ul style={{ listStyle: "none", padding: "16px 24px 20px", margin: 0, display: "flex", flexDirection: "column", gap: 18 }}>
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMobileOpen(false)}
                style={{ ...linkStyle, fontSize: "1rem", color: "var(--color-text-primary)", display: "block" }}
              >{link.label}</a>
            </li>
          ))}
          <li>
            <button type="button" onClick={() => {
                // The drawer hides this button, so the dialog returns focus to the hamburger instead
                hamburgerRef.current?.focus();
                setMobileOpen(false);
                openResume();
              }}
              style={{ ...linkStyle, fontSize: "1rem", color: "var(--color-text-primary)", display: "block", background: "none", border: "none", padding: 0, cursor: "pointer" }}
            >Resume</button>
          </li>
          <li>
            <a href="#contact" onClick={() => setMobileOpen(false)} style={{
              display: "inline-block", padding: "9px 20px", borderRadius: 6,
              background: "var(--color-accent)", color: "var(--color-on-accent)",
              fontSize: "0.875rem", fontWeight: 700,
              textDecoration: "none", fontFamily: "var(--font-body)",
            }}>
              Hire me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
