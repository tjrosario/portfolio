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

const DESKTOP_LINK = "font-body text-[0.875rem] font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary";
const DRAWER_LINK = "block font-body text-[1rem] font-medium text-text-primary";

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

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMobileOpen(false);
      hamburgerRef.current?.focus();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  // The drawer hides the link in use, so focus moves on to the section it opens
  const followDrawerLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = document.querySelector<HTMLElement>(e.currentTarget.hash);
    setMobileOpen(false);
    target?.setAttribute("tabindex", "-1");
    target?.focus({ preventScroll: true });
    target?.addEventListener("blur", () => target.removeAttribute("tabindex"), { once: true });
  };

  const closeOnFocusLeave = (e: React.FocusEvent<HTMLElement>) => {
    if (e.relatedTarget && !e.currentTarget.contains(e.relatedTarget)) setMobileOpen(false);
  };

  return (
    <header
      role="banner"
      onBlur={closeOnFocusLeave}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300 ${scrolled || mobileOpen ? "bg-bg-nav" : ""} ${scrolled ? "border-border-nav backdrop-blur-[14px]" : "border-transparent"}`}
    >
      <nav aria-label="Main navigation" className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <a href="#hero" aria-label={`${siteConfig.name}, back to top`} className="shrink-0 font-display text-[1.1rem] font-extrabold text-text-primary">
          <span className="text-accent">&lt;</span>
          {siteConfig.firstName}
          <span className="text-accent">{" />"}</span>
        </a>

        <ul className="hidden min-w-0 flex-1 flex-wrap justify-center gap-x-8 gap-y-1 lg:flex">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a href={link.href} className={DESKTOP_LINK}>{link.label}</a>
            </li>
          ))}
          <li>
            <button type="button" onClick={openResume} className={`${DESKTOP_LINK} cursor-pointer`}>Resume</button>
          </li>
        </ul>

        <div className="flex shrink-0 items-center gap-2.5">
          <ThemeToggle />
          <a href="#contact" className="hidden rounded-md border border-transparent bg-accent px-4 py-[7px] font-body text-[0.8rem] font-bold whitespace-nowrap text-on-accent transition-opacity duration-200 hover:opacity-85 lg:inline-block">
            Hire me
          </a>
          <button
            ref={hamburgerRef}
            type="button"
            className="flex cursor-pointer flex-col gap-[5px] p-2 lg:hidden"
            aria-label="Menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen(open => !open)}
          >
            {[0, 1, 2].map(i => (
              <span key={i} className="block w-[22px] rounded-sm border-t-2 border-text-primary transition-all duration-300" style={{
                transform: mobileOpen && i === 0 ? "rotate(45deg) translate(5px,5px)" : mobileOpen && i === 2 ? "rotate(-45deg) translate(5px,-5px)" : "none",
                opacity: mobileOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </nav>

      <nav
        id="mobile-menu"
        aria-label="Mobile navigation"
        className={`overflow-x-hidden bg-bg-nav backdrop-blur-[14px] transition-[max-height,visibility] duration-300 lg:hidden ${mobileOpen ? "visible max-h-[calc(100dvh-64px)] overflow-y-auto border-b border-border-nav" : "invisible max-h-0 overflow-y-hidden"}`}
      >
        <ul className="flex flex-col gap-[18px] px-6 pt-4 pb-5">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={followDrawerLink} className={DRAWER_LINK}>{link.label}</a>
            </li>
          ))}
          <li>
            <button
              type="button"
              className={`${DRAWER_LINK} cursor-pointer`}
              onClick={() => {
                // The drawer hides this button, so the dialog returns focus to the hamburger instead
                hamburgerRef.current?.focus();
                setMobileOpen(false);
                openResume();
              }}
            >
              Resume
            </button>
          </li>
          <li>
            <a href="#contact" onClick={followDrawerLink} className="inline-block rounded-md border border-transparent bg-accent px-5 py-[9px] font-body text-[0.875rem] font-bold text-on-accent">
              Hire me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
