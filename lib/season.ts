"use client";

import { useSyncExternalStore } from "react";
import { siteConfig } from "@/site.config";

const noopSubscribe = () => () => {};

/** Reads the season the blocking script in app/layout.tsx set before paint */
export function useSeason() {
  const id = useSyncExternalStore(
    noopSubscribe,
    () => document.documentElement.getAttribute("data-season"),
    () => null,
  );
  return siteConfig.seasons.find(s => s.id === id) ?? null;
}
