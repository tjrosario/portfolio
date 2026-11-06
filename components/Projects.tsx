import { siteConfig, type Project } from "@/site.config";
import Card from "./Card";
import ChipList from "./ChipList";
import Section from "./Section";
import { TrafficLights } from "./WindowFrame";

const GH = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);
const EXT = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const PROJECT_ICONS: Record<Project["icon"], React.ReactNode> = {
  store: <><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></>,
  video: <><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></>,
  ai: <><path d="M11 3l2 5.5L18.5 10.5 13 12.5 11 18l-2-5.5L3.5 10.5 9 8.5z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/></>,
  food: <><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/></>,
};

function ProjectIcon({ icon }: { icon: Project["icon"] }) {
  return (
    <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-border-hover bg-border text-accent">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {PROJECT_ICONS[icon]}
      </svg>
    </span>
  );
}

function ProjectLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} (opens in new tab)`}
      className="flex text-text-muted transition-colors duration-200 hover:text-accent"
    >
      {children}
    </a>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const address = (project.live ?? project.github).replace("https://", "");

  return (
    <Card as="article" interactive className="group flex flex-col overflow-hidden">
      <div aria-hidden="true" className="browser-bar">
        <TrafficLights />
        <span className="browser-address">{address}</span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-[22px]">
        <div className="flex items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-2.5">
            <ProjectIcon icon={project.icon} />
            <h3 className="m-0 font-display text-[1rem] font-bold tracking-[-0.01em] text-text-primary transition-colors duration-200 group-hover:text-accent">
              {project.name}
            </h3>
          </div>
          <div className="flex shrink-0 gap-2.5">
            {project.github && <ProjectLink href={project.github} label={`${project.name} on GitHub`}><GH /></ProjectLink>}
            {project.live && <ProjectLink href={project.live} label={`${project.name} live site`}><EXT /></ProjectLink>}
          </div>
        </div>

        <p className="flex-1 text-[0.85rem] leading-[1.65] text-text-secondary">{project.description}</p>

        <ul className="flex flex-col gap-1">
          {project.highlights.map(highlight => (
            <li key={highlight} className="flex gap-[7px] text-[0.76rem] text-text-muted">
              <span aria-hidden="true" className="shrink-0 font-bold text-accent">✓</span>{highlight}
            </li>
          ))}
        </ul>

        <ChipList items={project.stack} size="sm" className="border-t border-border pt-2.5" />
      </div>
    </Card>
  );
}

export default function Projects() {
  return (
    <Section id="projects" className="bg-bg-section" path="./projects/*" title="Projects" subtitle="Things I've built, from production storefronts to AI-powered apps.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {siteConfig.projects.map(project => <ProjectCard key={project.name} project={project} />)}
      </div>
    </Section>
  );
}
