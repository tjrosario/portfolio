import { expect, test } from "@playwright/test";
import { siteConfig } from "@/site.config";
import { clickUntil, expectNoAxeViolations, openResume } from "./helpers";

for (const colorScheme of ["dark", "light"] as const) {
  test.describe(`${colorScheme} theme`, () => {
    test.use({ colorScheme });

    for (const { id } of siteConfig.seasons) {
      test(`${id} home page`, async ({ page }) => {
        await page.goto(`/?season=${id}`);
        await expectNoAxeViolations(page);
      });
    }

    test("resume", async ({ page }) => {
      await page.goto("/");
      const dialog = await openResume(page);
      await expect(dialog.getByRole("region", { name: "Resume content" })).toBeVisible();
      await expectNoAxeViolations(page);
    });

    test("resume error", async ({ page }) => {
      await page.route("**/api/resume", route => route.fulfill({ status: 500 }));
      await page.goto("/");
      const dialog = await openResume(page);
      await expect(dialog.getByRole("alert")).toBeVisible();
      await expectNoAxeViolations(page);
    });
  });
}

test.describe("mobile", () => {
  test.use({ viewport: { width: 375, height: 760 } });

  test("open drawer", async ({ page }) => {
    await page.goto("/");
    await clickUntil(page.getByRole("button", { name: "Menu" }), page.getByRole("navigation", { name: "Mobile navigation" }));
    await expectNoAxeViolations(page);
  });
});
