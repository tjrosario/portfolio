"use client";

import { useSeason } from "@/lib/season";
import { ART } from "./SeasonalArt";

/** Holiday hat on the corner of the hero editor */
export default function SeasonHat() {
  const season = useSeason();
  if (!season?.hat) return null;

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="season-hat">
      {ART[season.hat]}
    </svg>
  );
}
