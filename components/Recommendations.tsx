import { siteConfig } from "@/site.config";
import Card from "./Card";
import ExternalLink from "./ExternalLink";
import Section from "./Section";

export default function Recommendations() {
  return (
    <Section id="recommendations" path="$ cat recommendations.md" title="Recommendations" subtitle="What managers and colleagues have said about working with me.">
      <ul className="grid gap-5 md:grid-cols-2">
        {siteConfig.recommendations.map(rec => (
          <li key={rec.name} className="flex">
            <Card as="figure" className="flex flex-1 flex-col gap-5 p-[26px]">
              <span aria-hidden="true" className="font-display text-[2.5rem] leading-[0.6] text-accent">“</span>
              <blockquote className="flex-1 text-[0.95rem] leading-[1.7] text-text-secondary">
                <p>{rec.quote}</p>
              </blockquote>
              <figcaption className="border-t border-border pt-4">
                <p className="font-display text-[0.95rem] font-bold text-text-primary">{rec.name}</p>
                <p className="mt-[3px] text-[0.8rem] text-text-muted">{rec.title}</p>
                <p className="mt-[3px] font-mono text-[0.72rem] text-accent">{rec.relationship}</p>
              </figcaption>
            </Card>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-[0.9rem]">
        <ExternalLink href={siteConfig.linkedin} className="font-semibold text-accent underline-offset-4 hover:underline">
          Read all {siteConfig.linkedinRecommendationCount} recommendations on LinkedIn
        </ExternalLink>
      </p>
    </Section>
  );
}
