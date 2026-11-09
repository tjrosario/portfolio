"use client";

import { useResume } from "@/lib/resume";
import { buttonClass } from "./Button";

export default function ResumeButton({ className }: { className?: string }) {
  const { open } = useResume();

  return (
    <button type="button" onClick={open} className={buttonClass({ variant: "outline" }, className)}>
      View Resume
    </button>
  );
}
