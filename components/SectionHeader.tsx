interface SectionHeaderProps {
  title: string;
  subtitle: string;
  path: string;
}

export default function SectionHeader({ title, subtitle, path }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <p aria-hidden="true" className="mb-2.5 font-mono text-[0.75rem] font-semibold text-accent">{path}</p>
      <h2 className="m-0 font-display text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-[-0.02em] text-text-primary">
        <span aria-hidden="true" className="jsx-bracket">&lt;</span>
        {title}
        <span aria-hidden="true" className="jsx-bracket">{" />"}</span>
      </h2>
      <p className="mt-2.5 max-w-[520px] text-[0.95rem] leading-[1.6] text-text-secondary">
        <span aria-hidden="true" className="font-mono text-accent">{"// "}</span>
        {subtitle}
      </p>
    </div>
  );
}
