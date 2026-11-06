import { siteConfig } from "@/site.config";
import { ArrowIcon } from "./Icons";
import Section from "./Section";
import TerminalWindow from "./TerminalWindow";

export default function About() {
  return (
    <Section id="about" path="./about.tsx" title="About" subtitle="A little about who I am and what I do.">
      <div className="grid items-start gap-14 lg:grid-cols-2">
        <div className="flex flex-col gap-[18px]">
          <p className="leading-[1.85] text-text-primary">{siteConfig.bio}</p>
          <p className="leading-[1.85] text-text-primary">{siteConfig.bioExtended}</p>
          <p className="leading-[1.85] text-text-secondary">
            When I&apos;m not in front of a screen, you&apos;ll find me enjoying life at the Jersey Shore,
            hitting the gym, or spending time with my wife and kids. Being a husband and father
            is the best job I&apos;ve got.
          </p>
          <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-1.5 self-start text-[0.875rem] font-semibold text-accent">
            {siteConfig.email}
            <ArrowIcon />
          </a>
        </div>

        <TerminalWindow label="highlights.sh" command="./highlights --all">
          <ul className="flex flex-col gap-2.5">
            {siteConfig.bioHighlights.map(highlight => (
              <li key={highlight} className="terminal-line flex gap-2.5">
                <span aria-hidden="true" className="tok-string">✓</span>
                {highlight}
              </li>
            ))}
          </ul>
        </TerminalWindow>
      </div>
    </Section>
  );
}
