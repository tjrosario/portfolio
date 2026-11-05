"use client";

import { useCallback, useSyncExternalStore } from "react";

const root = () => document.documentElement;

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(root(), { attributes: true, attributeFilter: ["data-motion"] });
  return () => observer.disconnect();
}

/** Reads the preference the blocking script in app/layout.tsx restored before paint */
export function useMotionPause() {
  const paused = useSyncExternalStore(
    subscribe,
    () => root().getAttribute("data-motion") === "paused",
    () => false,
  );

  const toggle = useCallback(() => {
    const next = !paused;
    if (next) root().setAttribute("data-motion", "paused");
    else root().removeAttribute("data-motion");
    try {
      if (next) localStorage.setItem("motion", "paused");
      else localStorage.removeItem("motion");
    } catch {}
  }, [paused]);

  return { paused, toggle };
}
