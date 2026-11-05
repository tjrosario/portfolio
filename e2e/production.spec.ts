import { expect, test } from "@playwright/test";
import resume from "@/data/resume.json";
import { siteConfig } from "@/site.config";
import { openResume } from "./helpers";

test("the resume comes from the real route without MSW", async ({ page }) => {
  const requests: string[] = [];
  page.on("request", request => requests.push(request.url()));
  await page.goto("/");

  await openResume(page);
  await expect(page.getByRole("region", { name: "Resume content" })).toBeVisible();

  expect(requests.filter(url => url.includes("mockServiceWorker"))).toEqual([]);
  expect(await page.evaluate(() => navigator.serviceWorker.getRegistrations().then(r => r.length))).toBe(0);
});

test("the resume isn't in the page HTML", async ({ request }) => {
  const html = await (await request.get("/")).text();

  expect(html).toContain(siteConfig.name);
  expect(html).not.toContain(resume.education.school);
});

for (const [path, type] of [
  ["/api/resume", "application/json"],
  ["/llms.txt", "text/plain"],
  ["/robots.txt", "text/plain"],
  ["/sitemap.xml", "application/xml"],
  ["/og", "image/png"],
]) {
  test(`${path} responds`, async ({ request }) => {
    const response = await request.get(path);

    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain(type);
  });
}
