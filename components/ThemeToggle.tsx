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

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 6,
        padding: "6px 10px",
        borderRadius: 20,
        border: "1px solid var(--color-border)",
        background: "var(--color-bg-card)",
        cursor: "pointer",
        transition: "border-color 0.2s, box-shadow 0.2s",
        flexShrink: 0,
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = "var(--color-border-hover)";
        e.currentTarget.style.boxShadow = "0 0 12px rgba(249,115,22,0.12)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "var(--color-border)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Track */}
      <div style={{
        position: "relative",
        width: 36,
        height: 20,
        borderRadius: 10,
        background: isDark ? "rgba(249,115,22,0.15)" : "rgba(234,108,10,0.18)",
        border: "1px solid var(--color-border)",
        transition: "background 0.25s",
        flexShrink: 0,
      }}>
        {/* Thumb */}
        <div style={{
          position: "absolute",
          top: 2,
          left: isDark ? 2 : 16,
          width: 14,
          height: 14,
          borderRadius: "50%",
          background: "var(--color-accent)",
          transition: "left 0.25s cubic-bezier(0.34,1.56,0.64,1)",
          boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        </div>
      </div>

      {/* Icon */}
      <span style={{
        color: "var(--color-accent)",
        display: "flex",
        alignItems: "center",
        transition: "transform 0.3s, opacity 0.2s",
        transform: isDark ? "rotate(0deg)" : "rotate(180deg)",
      }}>
        {isDark ? <MoonIcon /> : <SunIcon />}
      </span>
    </button>
  );
}
