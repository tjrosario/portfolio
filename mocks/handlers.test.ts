import { expect, it } from "vitest";
import { GET } from "@/app/api/resume/route";

it("serves the same body as the real route", async () => {
  const [mocked, real] = await Promise.all([fetch("/api/resume"), GET()]);

  expect(mocked.status).toBe(real.status);
  expect(await mocked.json()).toEqual(await real.json());
});
