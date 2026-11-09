import { siteConfig } from "@/site.config";
import AvailabilityBadge from "./AvailabilityBadge";
import { LinkButton } from "./Button";
import ExternalLink from "./ExternalLink";
import ResumeButton from "./ResumeButton";
import Section from "./Section";
import TerminalWindow from "./TerminalWindow";

const EXTERNAL_LINKS = [
  { label: "github  ", href: siteConfig.github, text: siteConfig.github.replace("https://", "") },
  { label: "linkedin", href: siteConfig.linkedin, text: siteConfig.linkedin.replace("https://www.", "").replace(/\/$/, "") },
];

function TerminalRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <li className="terminal-line flex min-w-0 gap-3">
      <span className="tok-key shrink-0 whitespace-pre">{label}</span>
      {children}
    </li>
  );
}

export default function Contact() {
  return (
    <Section id="contact" path="./contact.sh" title="Contact" subtitle="Hiring, or have a project in mind? Let's talk.">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div className="flex flex-col gap-7">
          <div>
            <h3 className="mb-3 font-display text-[clamp(1.5rem,3vw,2rem)] leading-[1.15] font-extrabold tracking-[-0.02em] text-text-primary">
              Let&apos;s build something <span className="text-accent">great</span> together.
            </h3>
            <p className="text-[0.95rem] leading-[1.8] text-text-secondary">
              Hiring for a full-time role, need a contractor, or want a consultant on a specific problem? Tell me what you&apos;re working on and I&apos;ll get back to you.
            </p>
          </div>

          <LinkButton variant="primary" href={`mailto:${siteConfig.email}`} className="max-w-full self-start wrap-anywhere">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span className="min-w-0">{siteConfig.email}</span>
          </LinkButton>

          <ResumeButton className="self-start" />
          <AvailabilityBadge />
        </div>

        <TerminalWindow label="contact.sh" command="./hire-tommy --info">
          <ul className="flex flex-col gap-2">
            <TerminalRow label="email   ">
              <a className="terminal-link" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </TerminalRow>
            {EXTERNAL_LINKS.map(link => (
              <TerminalRow key={link.label} label={link.label}>
                <ExternalLink className="terminal-link" href={link.href}>{link.text}</ExternalLink>
              </TerminalRow>
            ))}
            <TerminalRow label="location">{siteConfig.location}</TerminalRow>
          </ul>
        </TerminalWindow>
      </div>
    </Section>
  );
}
