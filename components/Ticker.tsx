import { siteConfig } from "@/site.config";

export default function Ticker() {
  const items = [...siteConfig.tickerWords, ...siteConfig.tickerWords];

  return (
    <div aria-hidden="true" className="overflow-hidden border-y border-border bg-bg-section py-3">
      <div className="animate-marquee flex whitespace-nowrap will-change-transform">
        {items.map((word, i) => (
          <span key={i} className={`mx-4 inline-flex items-center gap-4 ${i >= siteConfig.tickerWords.length ? "ticker-repeat" : ""}`}>
            <span className="font-mono text-[0.72rem] font-semibold text-text-muted">{word}</span>
            <span className="font-mono text-[0.72rem] text-accent">{"//"}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
