import { expect, test, type Page } from "@playwright/test";
import { clickUntil, expectNoAxeViolations } from "./helpers";

const pauseButton = (page: Page) => page.getByRole("button", { name: "Pause animations" });
const playButton = (page: Page) => page.getByRole("button", { name: "Play animations" });

test.describe("with motion allowed", () => {
  test.use({ contextOptions: { reducedMotion: "no-preference" } });

  test("the pause stops looping animations and survives a reload", async ({ page }) => {
    await page.goto("/");
    await clickUntil(pauseButton(page), playButton(page));

    const ticker = page.locator(".ticker-repeat").first();
    await expect(ticker.locator("xpath=..")).toHaveCSS("animation-play-state", "paused");

    await page.reload();
    await expect(page.locator("html")).toHaveAttribute("data-motion", "paused");
    await expect(playButton(page)).toBeVisible();
  });
});

test.describe("axe with motion allowed", () => {
  test.use({ contextOptions: { reducedMotion: "no-preference" } });

  test("the pause control and particles pass", async ({ page }) => {
    await page.goto("/");
    await expect(pauseButton(page)).toBeVisible();
    // Text fading in reads as low contrast until the entrance animation ends
    await page.waitForFunction(() =>
      [...document.querySelectorAll(".anim-hidden")].every(el => getComputedStyle(el).opacity === "1"));
    await expectNoAxeViolations(page);
  });
});

test("the control is hidden when the system already reduces motion", async ({ page }) => {
  await page.goto("/");

  await expect(pauseButton(page)).toBeHidden();
});
