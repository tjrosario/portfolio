import { expect, test, type Page } from "@playwright/test";
import { clickUntil } from "./helpers";

test("skip link moves past the header", async ({ page }) => {
  await page.goto("/");

  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to content" })).toBeFocused();
  await page.keyboard.press("Enter");

  await expect(page).toHaveURL(/#main$/);
});

test("keyboard focus never lands under the fixed header", async ({ page }) => {
  await page.goto("/");
  const stops = await page.locator("a[href], button").count();
  const covered = new Set<string>();

  for (const key of ["Tab", "Shift+Tab"]) {
    for (let i = 0; i < stops; i++) {
      await page.keyboard.press(key);
      const hidden = await page.evaluate(() => {
        const active = document.activeElement;
        const header = document.querySelector("header");
        if (!active || !header || active === document.body || header.contains(active)) return null;
        // The skip link is drawn above the header on purpose
        if (active.matches(".skip-link")) return null;
        const isCovered = active.getBoundingClientRect().top < header.getBoundingClientRect().bottom;
        return isCovered ? active.textContent : null;
      });
      if (hidden !== null) covered.add(hidden);
    }
  }

  expect([...covered]).toEqual([]);
});

test.describe("mobile drawer", () => {
  test.use({ viewport: { width: 375, height: 760 } });

  const openDrawer = async (page: Page) => {
    await page.goto("/");
    const menu = page.getByRole("button", { name: "Menu" });
    const drawer = page.getByRole("navigation", { name: "Mobile navigation" });
    await clickUntil(menu, drawer);
    return { menu, drawer };
  };

  test("Escape closes it and returns focus to the menu button", async ({ page }) => {
    const { menu, drawer } = await openDrawer(page);

    await expect(menu).toHaveAttribute("aria-expanded", "true");
    await page.keyboard.press("Escape");

    await expect(drawer).toBeHidden();
    await expect(menu).toHaveAttribute("aria-expanded", "false");
    await expect(menu).toBeFocused();
  });

  test("a link closes it and moves focus to its section", async ({ page }) => {
    const { drawer } = await openDrawer(page);

    await drawer.getByRole("link", { name: "Contact" }).first().click();

    await expect(drawer).toBeHidden();
    await expect(page.locator("#contact")).toBeFocused();
  });

  test("tabbing out closes it", async ({ page }) => {
    const { drawer } = await openDrawer(page);

    await drawer.getByRole("link").last().focus();
    await page.keyboard.press("Tab");

    await expect(drawer).toBeHidden();
  });
});
