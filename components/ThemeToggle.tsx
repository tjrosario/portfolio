"use client";

import { useTheme } from "@/lib/theme";

const SunIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1"  x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22"   x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1"  y1="12" x2="3"  y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22"  y1="19.78" x2="5.64"  y2="18.36"/>
    <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="relative flex shrink-0 cursor-pointer items-center gap-1.5 overflow-hidden rounded-[20px] border border-border bg-bg-card px-2.5 py-1.5 transition-[border-color,box-shadow] duration-200 hover:border-border-hover hover:shadow-[0_0_12px_color-mix(in_srgb,var(--color-accent)_12%,transparent)]"
    >
      <div className="relative h-5 w-9 shrink-0 rounded-[10px] border border-border bg-[color-mix(in_srgb,var(--color-accent)_16%,transparent)]">
        <div
          className="absolute top-0.5 size-3.5 rounded-full border border-transparent bg-accent shadow-[0_1px_4px_rgba(0,0,0,0.2)] transition-[left] duration-250 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          style={{ left: isDark ? 2 : 16 }}
        />
      </div>
      <span className="flex items-center text-accent transition-transform duration-300" style={{ transform: isDark ? "none" : "rotate(180deg)" }}>
        {isDark ? <MoonIcon /> : <SunIcon />}
      </span>
    </button>
  );
}
