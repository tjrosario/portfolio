import { expect, test } from "@playwright/test";

const dates = [
  ["2026-12-26", "christmas"],
  ["2026-12-31", "newyear"],
  ["2027-01-03", "newyear"],
  ["2027-01-04", "winter"],
  ["2027-02-14", "valentines"],
  ["2027-03-20", "spring"],
  ["2027-07-04", "fourth"],
  ["2027-09-30", "fall"],
  ["2027-10-31", "halloween"],
  ["2027-11-05", "thanksgiving"],
];

for (const [date, season] of dates) {
  test(`${date} is ${season}`, async ({ page }) => {
    await page.clock.setFixedTime(new Date(`${date}T12:00:00`));
    await page.goto("/");

    await expect(page.locator("html")).toHaveAttribute("data-season", season);
  });
}

test("a preview overrides the date", async ({ page }) => {
  await page.clock.setFixedTime(new Date("2027-07-04T12:00:00"));
  await page.goto("/?season=halloween");

  await expect(page.locator("html")).toHaveAttribute("data-season", "halloween");
});

test("an unknown preview falls back to the date", async ({ page }) => {
  await page.clock.setFixedTime(new Date("2027-07-04T12:00:00"));
  await page.goto("/?season=nope");

  await expect(page.locator("html")).toHaveAttribute("data-season", "fourth");
});
