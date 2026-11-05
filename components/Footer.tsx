import { siteConfig } from "@/site.config";

export default function Footer() {
  return (
    <footer role="contentinfo" style={{
      background: "var(--color-accent)",
      color: "var(--color-on-accent)",
      fontFamily: "var(--font-mono)",
      fontSize: "0.78rem",
      fontWeight: 600,
    }}>
      <div style={{
        maxWidth: 1152, margin: "0 auto", padding: "10px 24px",
        display: "flex", flexWrap: "wrap",
        alignItems: "center", justifyContent: "space-between", gap: "8px 24px",
      }}>
        <p aria-hidden="true" style={{ margin: 0 }}>{`<${siteConfig.firstName} />`}</p>
        <p style={{ margin: 0 }}>© {new Date().getFullYear()} {siteConfig.name}</p>
        <div style={{ display: "flex", gap: 24 }}>
          {[{ l: "GitHub", h: siteConfig.github }, { l: "LinkedIn", h: siteConfig.linkedin }].map(s => (
            <a key={s.l} href={s.h} target="_blank" rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "underline", textUnderlineOffset: 3 }}
            >{s.l}<span className="sr-only"> (opens in new tab)</span></a>
          ))}
        </div>
      </div>
    </footer>
  );
}
