import { siteConfig } from "@/site.config";
import ExternalLink from "./ExternalLink";

const LINKS = [
  { label: "GitHub", href: siteConfig.github },
  { label: "LinkedIn", href: siteConfig.linkedin },
];

export default function Footer() {
  return (
    <footer role="contentinfo" className="bg-accent font-mono text-[0.78rem] font-semibold text-on-accent">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-2.5">
        <p aria-hidden="true">{`<${siteConfig.firstName} />`}</p>
        <p>© {new Date().getFullYear()} {siteConfig.name}</p>
        <div className="flex gap-6">
          {LINKS.map(link => (
            <ExternalLink key={link.label} href={link.href} className="underline underline-offset-3">{link.label}</ExternalLink>
          ))}
        </div>
      </div>
    </footer>
  );
}
