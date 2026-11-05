import { expect, it } from "vitest";
import resume from "@/data/resume.json";
import { GET } from "./route";

it("returns the resume as JSON", async () => {
  const response = GET();

  expect(response.status).toBe(200);
  expect(response.headers.get("content-type")).toContain("application/json");
  expect(await response.json()).toEqual(resume);
});
