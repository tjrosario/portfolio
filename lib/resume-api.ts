import type resumeData from "@/data/resume.json";

export type Resume = typeof resumeData;

const REQUEST_TIMEOUT_MS = 10_000;

/** Fetches the resume, through the MSW mock in development and the real route otherwise */
export async function fetchResume(): Promise<Resume> {
  // msw/browser has no Node entry, so the window check drops this import from the SSR compile
  if (process.env.NODE_ENV === "development" && typeof window !== "undefined") {
    const { startMocks } = await import("@/mocks/browser");
    await startMocks();
  }

  const response = await fetch("/api/resume", { signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS) });
  if (!response.ok) throw new Error(`Resume request failed with ${response.status}`);
  return response.json();
}
