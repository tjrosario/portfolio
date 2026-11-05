"use client";

import { useSeason } from "@/lib/season";
import { ART } from "./SeasonalArt";

const PARTICLES = [
  { left: "3%",  size: 26, duration: 14, delay: 0 },
  { left: "11%", size: 34, duration: 18, delay: 4 },
  { left: "19%", size: 24, duration: 12, delay: 8 },
  { left: "28%", size: 32, duration: 16, delay: 2 },
  { left: "37%", size: 26, duration: 20, delay: 6 },
  { left: "46%", size: 36, duration: 15, delay: 10 },
  { left: "55%", size: 24, duration: 13, delay: 1 },
  { left: "64%", size: 32, duration: 19, delay: 7 },
  { left: "73%", size: 26, duration: 14, delay: 3 },
  { left: "82%", size: 34, duration: 17, delay: 9 },
  { left: "91%", size: 24, duration: 13, delay: 5 },
  { left: "97%", size: 30, duration: 16, delay: 11 },
];

export default function SeasonalParticles() {
  const season = useSeason();
  if (!season) return null;

  return (
    <div aria-hidden="true" style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {PARTICLES.map((p, i) => (
        <svg
          key={p.left}
          className="season-particle"
          width={p.size} height={p.size} viewBox="0 0 24 24"
          style={{
            left: p.left,
            color: season.colors[i % season.colors.length],
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay - 8}s`,
          }}
        >
          {ART[season.particles[i % season.particles.length]]}
        </svg>
      ))}
      {season.stripe && (
        <div style={{
          position: "absolute", left: 0, right: 0, bottom: 0, height: 10,
          background: `repeating-linear-gradient(-45deg, ${season.stripe.map((c, n) => `${c} ${n * 16}px ${(n + 1) * 16}px`).join(", ")})`,
        }} />
      )}
    </div>
  );
}
