interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div style={{ marginBottom: 48 }}>
      <h2 className="font-display" style={{
        fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
        fontWeight: 800,
        color: "var(--color-text-primary)",
        display: "inline-flex",
        alignItems: "baseline",
        gap: 2,
        margin: 0,
        letterSpacing: "-0.02em",
      }}>
        {title}
        <span style={{ color: "var(--color-accent)", fontSize: "2.6rem", lineHeight: 1 }}>.</span>
      </h2>
      {subtitle && (
        <p style={{ marginTop: 8, color: "var(--color-text-secondary)", fontSize: "0.95rem", maxWidth: 460, lineHeight: 1.6 }}>
          {subtitle}
        </p>
      )}
      <div style={{
        marginTop: 16, width: 36, height: 3, borderRadius: 2,
        background: "var(--color-accent)", opacity: 0.9,
      }} />
    </div>
  );
}
