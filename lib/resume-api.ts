import type resumeData from "@/data/resume.json";

export type Resume = typeof resumeData;

/** Fetches the resume, through the MSW mock in development and the real route otherwise */
export async function fetchResume(): Promise<Resume> {
  // msw/browser has no Node entry, so the window check drops this import from the SSR compile
  if (process.env.NODE_ENV === "development" && typeof window !== "undefined") {
    const { startMocks } = await import("@/mocks/browser");
    await startMocks();
  }

  const response = await fetch("/api/resume");
  if (!response.ok) throw new Error(`Resume request failed with ${response.status}`);
  return response.json();
}
