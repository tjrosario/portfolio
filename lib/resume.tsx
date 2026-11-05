"use client";

import { createContext, useCallback, useContext, useRef } from "react";
import ResumeModal from "@/components/ResumeModal";

interface ResumeContextValue {
  open: () => void;
}

const ResumeContext = createContext<ResumeContextValue>({
  open: () => {},
});

export function ResumeProvider({ children }: { children: React.ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const open = useCallback(() => dialogRef.current?.showModal(), []);

  return (
    <ResumeContext.Provider value={{ open }}>
      {children}
      <ResumeModal ref={dialogRef} />
    </ResumeContext.Provider>
  );
}

export function useResume() {
  return useContext(ResumeContext);
}
