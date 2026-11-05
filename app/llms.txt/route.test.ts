import { expect, it } from "vitest";
import resume from "@/data/resume.json";
import { GET } from "./route";

it("lists every role and the education the page no longer renders", async () => {
  const body = await GET().text();

  for (const role of [...resume.experience, ...resume.earlierRoles]) {
    expect(body).toContain(role.company);
    expect(body).toContain(role.summary);
  }
  expect(body).toContain(resume.education.school);
});
