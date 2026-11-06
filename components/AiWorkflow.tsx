import { siteConfig } from "@/site.config";
import Card from "./Card";
import Section from "./Section";

export default function AiWorkflow() {
  const { intro, practices } = siteConfig.aiWorkflow;

  return (
    <Section id="ai" className="grid-bg" path="./ai-workflow.tsx" title="How I Build with AI" subtitle="AI-assisted engineering, with the guardrails to ship it.">
      <p className="mb-8 max-w-[720px] leading-[1.85] text-text-primary">{intro}</p>
      <div className="grid gap-5 sm:grid-cols-2">
        {practices.map(practice => (
          <Card key={practice.title} as="article" className="p-[22px]">
            <p aria-hidden="true" className="mb-3 font-mono text-[0.75rem] text-accent">$ {practice.command}</p>
            <h3 className="mb-2 font-display text-[1rem] font-bold tracking-[-0.01em] text-text-primary">{practice.title}</h3>
            <p className="text-[0.85rem] leading-[1.65] text-text-secondary">{practice.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
