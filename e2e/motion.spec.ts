import { expect, test, type Page } from "@playwright/test";

const pauseButton = (page: Page) => page.getByRole("button", { name: "Pause animations" });
const playButton = (page: Page) => page.getByRole("button", { name: "Play animations" });

test.describe("with motion allowed", () => {
  test.use({ contextOptions: { reducedMotion: "no-preference" } });

  test("the pause stops looping animations and survives a reload", async ({ page }) => {
    await page.goto("/");
    await expect(async () => {
      await pauseButton(page).click();
      await expect(playButton(page)).toBeVisible({ timeout: 1000 });
    }).toPass();

    const ticker = page.locator(".ticker-repeat").first();
    await expect(ticker.locator("xpath=..")).toHaveCSS("animation-play-state", "paused");

    await page.reload();
    await expect(page.locator("html")).toHaveAttribute("data-motion", "paused");
    await expect(playButton(page)).toBeVisible();
  });
});

test("the control is hidden when the system already reduces motion", async ({ page }) => {
  await page.goto("/");

  await expect(pauseButton(page)).toBeHidden();
});
