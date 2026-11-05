"use client";

import { createContext, useCallback, useContext, useRef, useState } from "react";
import ResumeModal from "@/components/ResumeModal";
import { fetchResume, type Resume } from "@/lib/resume-api";

export type ResumeState =
  | { status: "idle" | "loading" | "error" }
  | { status: "ready"; resume: Resume };

interface ResumeContextValue {
  open: () => void;
}

const ResumeContext = createContext<ResumeContextValue>({
  open: () => {},
});

export function ResumeProvider({ children }: { children: React.ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [state, setState] = useState<ResumeState>({ status: "idle" });

  const load = useCallback(() => {
    setState({ status: "loading" });
    fetchResume().then(
      resume => setState({ status: "ready", resume }),
      () => setState({ status: "error" }),
    );
  }, []);

  // The resume loads on first open, so visitors who never open it don't download it
  const open = useCallback(() => {
    dialogRef.current?.showModal();
    if (state.status === "idle" || state.status === "error") load();
  }, [load, state.status]);

  return (
    <ResumeContext.Provider value={{ open }}>
      {children}
      <ResumeModal ref={dialogRef} state={state} onRetry={load} />
    </ResumeContext.Provider>
  );
}

export function useResume() {
  return useContext(ResumeContext);
}
