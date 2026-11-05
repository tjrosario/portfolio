interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  path: string;
}

export default function SectionHeader({ title, subtitle, path }: SectionHeaderProps) {
  return (
    <div style={{ marginBottom: 48 }}>
      <p aria-hidden="true" style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", fontWeight: 600, color: "var(--color-accent)", margin: "0 0 10px" }}>
        {path}
      </p>
      <h2 className="font-display" style={{
        fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
        fontWeight: 800,
        color: "var(--color-text-primary)",
        margin: 0,
        letterSpacing: "-0.02em",
      }}>
        <span aria-hidden="true" className="jsx-bracket">&lt;</span>
        {title}
        <span aria-hidden="true" className="jsx-bracket">{" />"}</span>
      </h2>
      {subtitle && (
        <p style={{ marginTop: 10, color: "var(--color-text-secondary)", fontSize: "0.95rem", maxWidth: 520, lineHeight: 1.6 }}>
          <span aria-hidden="true" style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent)" }}>{"// "}</span>
          {subtitle}
        </p>
      )}
    </div>
  );
}
