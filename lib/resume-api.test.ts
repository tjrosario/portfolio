import { afterEach, expect, it, vi } from "vitest";
import resume from "@/data/resume.json";
import { resumeFailure, resumeHang } from "@/mocks/handlers";
import { server } from "@/mocks/node";
import { fetchResume } from "./resume-api";

afterEach(() => vi.restoreAllMocks());

it("returns the resume", async () => {
  await expect(fetchResume()).resolves.toEqual(resume);
});

it("rejects when the server responds with an error", async () => {
  server.use(resumeFailure);

  await expect(fetchResume()).rejects.toThrow("Resume request failed with 500");
});

it("gives up on a request that never answers", async () => {
  const timeout = AbortSignal.timeout.bind(AbortSignal);
  vi.spyOn(AbortSignal, "timeout").mockImplementation(() => timeout(10));
  server.use(resumeHang);

  await expect(fetchResume()).rejects.toThrow();
});
