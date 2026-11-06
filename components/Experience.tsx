import type { ExperienceEntry } from "@/lib/experience.types";
import Card from "./Card";
import ChipList from "./ChipList";
import Section from "./Section";

function formatDate(d: string) {
  if (d === "Present") return "Present";
  const [year, month] = d.split("-");
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const mo = parseInt(month, 10);
  return mo >= 1 && mo <= 12 ? `${months[mo - 1]} ${year}` : year;
}

const commitSlug = (company: string) => company.toLowerCase().replace(/[^a-z0-9]+/g, "-");

function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  return (
    <div className="relative pb-10 pl-7">
      <div className="absolute top-3 bottom-0 left-0 w-px bg-linear-to-b from-border-hover to-border opacity-60" />
      <Card interactive className="peer ml-5 p-[22px]">
        <p aria-hidden="true" className="mb-2.5 flex flex-wrap items-center gap-2 font-mono text-[0.72rem] text-text-muted">
          <span><span className="text-accent">commit</span> {commitSlug(entry.company)}</span>
          {entry.endDate === "Present" && (
            <span className="rounded bg-accent px-1.5 font-semibold text-on-accent">HEAD</span>
          )}
        </p>
        <div className="mb-1 flex flex-wrap justify-between gap-2">
          <div>
            <h3 className="m-0 font-display text-[1.05rem] font-bold tracking-[-0.01em] text-text-primary">{entry.title}</h3>
            <p className="mt-[3px] text-[0.85rem] font-semibold text-accent">{entry.company}</p>
          </div>
          <div className="shrink-0 sm:text-right">
            <p className="font-mono text-[0.73rem] text-text-muted">
              {formatDate(entry.startDate)} — {formatDate(entry.endDate)}
            </p>
            {entry.location && <p className="mt-[3px] text-[0.73rem] text-text-muted">{entry.location}</p>}
          </div>
        </div>

        {entry.bullets.length > 0 && (
          <ul className="mt-3.5 flex flex-col gap-[7px]">
            {entry.bullets.map(bullet => (
              <li key={bullet} className="flex gap-2 text-[0.855rem] leading-[1.65] text-text-secondary">
                <span aria-hidden="true" className="shrink-0 font-mono font-bold text-diff-add">+</span>
                {bullet}
              </li>
            ))}
          </ul>
        )}

        {entry.tech && entry.tech.length > 0 && <ChipList items={entry.tech} size="md" className="mt-3.5" />}
      </Card>
      {/* Follows the card in the DOM so it can react to the card's hover */}
      <div className="absolute top-3 -left-1 size-2 rounded-full border-2 border-accent bg-bg-base transition-[background-color,box-shadow] duration-200 peer-hover:bg-accent peer-hover:shadow-[0_0_10px_color-mix(in_srgb,var(--color-accent)_40%,transparent)]" />
    </div>
  );
}

export default function Experience({ entries }: { entries: ExperienceEntry[] }) {
  return (
    <Section id="experience" className="bg-bg-section" path="$ git log --career" title="Experience" subtitle="Places I've worked and the things I've built.">
      {entries.length > 0 ? (
        <div className="max-w-[760px]">
          {entries.map((entry, i) => <ExperienceCard key={i} entry={entry} />)}
        </div>
      ) : (
        <p className="text-text-muted">No experience entries found.</p>
      )}
    </Section>
  );
}
