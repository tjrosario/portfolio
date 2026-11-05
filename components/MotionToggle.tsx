"use client";

import { useMotionPause } from "@/lib/motion";

export default function MotionToggle() {
  const { paused, toggle } = useMotionPause();

  return (
    <button type="button" className="motion-toggle" onClick={toggle}>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
        {paused
          ? <path d="M2 1l7 4-7 4z" />
          : <path d="M2 1h2v8H2zM6 1h2v8H6z" />}
      </svg>
      {paused ? "Play animations" : "Pause animations"}
    </button>
  );
}
