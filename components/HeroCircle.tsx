import Image from "next/image";
import { siteConfig } from "@/site.config";

const CARDINAL_DOTS = [
  "top-[1%] left-1/2 -translate-x-1/2",
  "bottom-[1%] left-1/2 -translate-x-1/2",
  "top-1/2 left-[1%] -translate-y-1/2",
  "top-1/2 right-[1%] -translate-y-1/2",
];

export default function HeroCircle() {
  return (
    <div className="relative aspect-square w-[clamp(128px,32vw,184px)] shrink-0">
      <div className="absolute inset-0 animate-[spin_22s_linear_infinite] rounded-full border border-border" />
      <div className="absolute inset-[4%] animate-[spin_16s_linear_infinite_reverse] rounded-full border border-dashed border-border" />
      <div className="absolute inset-[8%] overflow-hidden rounded-full border border-border-hover bg-bg-card shadow-(--shadow-glow)">
        <Image
          src="/caricature.png"
          alt={`Caricature of ${siteConfig.name} coding at his desk`}
          fill
          sizes="160px"
          className="object-cover object-[50%_32%]"
          preload
        />
      </div>
      {CARDINAL_DOTS.map(position => (
        <div key={position} className={`absolute aspect-square w-[2.7%] rounded-full bg-accent opacity-65 ${position}`} />
      ))}
    </div>
  );
}
