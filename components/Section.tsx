import SectionHeader from "./SectionHeader";

interface SectionProps {
  id: string;
  path: string;
  title: string;
  subtitle: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({ id, path, title, subtitle, className = "", children }: SectionProps) {
  return (
    <section id={id} className={`py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader path={path} title={title} subtitle={subtitle} />
        {children}
      </div>
    </section>
  );
}
