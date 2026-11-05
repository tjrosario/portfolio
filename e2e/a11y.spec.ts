import { expect, test } from "@playwright/test";
import { siteConfig } from "@/site.config";
import { clickUntil, expectNoAxeViolations, gotoSeason, openResume } from "./helpers";

for (const colorScheme of ["dark", "light"] as const) {
  for (const season of siteConfig.seasons) {
    test.describe(`${season.id} ${colorScheme}`, () => {
      test.use({ colorScheme });

      test("home page", async ({ page }) => {
        await gotoSeason(page, season);
        await expectNoAxeViolations(page);
      });

      test("resume", async ({ page }) => {
        await gotoSeason(page, season);
        const dialog = await openResume(page);
        await expect(dialog.getByRole("region", { name: "Resume content" })).toBeVisible();
        await expectNoAxeViolations(page);
      });

      test("resume error", async ({ page }) => {
        await page.route("**/api/resume", route => route.fulfill({ status: 500 }));
        await gotoSeason(page, season);
        const dialog = await openResume(page);
        await expect(dialog.getByRole("alert")).toBeVisible();
        await expectNoAxeViolations(page);
      });

      test.describe("mobile", () => {
        test.use({ viewport: { width: 375, height: 760 } });

        test("open drawer", async ({ page }) => {
          await gotoSeason(page, season);
          await clickUntil(page.getByRole("button", { name: "Menu" }), page.getByRole("navigation", { name: "Mobile navigation" }));
          await expectNoAxeViolations(page);
        });
      });
    });
  }
}
