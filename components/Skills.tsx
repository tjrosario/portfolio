import { siteConfig } from "@/site.config";
import Card from "./Card";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" path="./skills.json" title="Skills" subtitle="Technologies and tools I work with day-to-day.">
      <div className="mb-11">
        <p className="mb-3.5 font-mono text-[0.75rem] text-text-muted">
          <span aria-hidden="true">{"// "}</span>core strengths
        </p>
        <ul role="list" className="flex flex-wrap gap-2.5">
          {siteConfig.coreStrengths.map(strength => (
            <li key={strength} className="rounded-[7px] border border-border-hover bg-border px-4 py-[7px] font-mono text-[0.8rem] font-semibold text-accent">
              <span aria-hidden="true">{"<"}</span>{strength}<span aria-hidden="true">{" />"}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {siteConfig.skillGroups.map(group => (
          <Card key={group.label} className="p-[18px]">
            <h3 className="mb-3.5 font-mono text-[0.8rem] font-semibold text-text-primary">
              <span aria-hidden="true" className="tok-json-key">&quot;</span>
              <span className="tok-json-key">{group.label}</span>
              <span aria-hidden="true" className="tok-json-key">&quot;</span>
              <span aria-hidden="true" className="text-text-muted">: [</span>
            </h3>
            <ul role="list" className="flex flex-wrap gap-[7px]">
              {group.skills.map(skill => (
                <li key={skill}>
                  <span className="inline-block rounded-md border border-border bg-bg-card px-[11px] py-[5px] text-[0.78rem] text-text-secondary transition-all duration-[180ms] hover:border-border-hover hover:bg-border hover:text-text-primary hover:shadow-(--shadow-card)">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
            <p aria-hidden="true" className="mt-3.5 font-mono text-[0.8rem] text-text-muted">]</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
