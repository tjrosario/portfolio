import AxeBuilder from "@axe-core/playwright";
import { expect, type Locator, type Page } from "@playwright/test";

const WCAG_22_AA = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"];

/** Retries because a click can land before React hydrates the server-rendered button */
export async function clickUntil(button: Locator, condition: Locator) {
  await expect(async () => {
    if (!(await condition.isVisible())) await button.click({ timeout: 1000 });
    await expect(condition).toBeVisible({ timeout: 1000 });
  }).toPass();
}

/** Waits for the greeting, which renders after hydration, so scans see the seasonal text */
export async function gotoSeason(page: Page, { id, greeting }: { id: string; greeting: string }) {
  await page.goto(`/?season=${id}`);
  await expect(page.getByText(greeting, { exact: true }).first()).toBeAttached();
}

export async function openResume(page: Page) {
  const dialog = page.getByRole("dialog");
  await clickUntil(page.locator("#hero").getByRole("button", { name: "View Resume" }), dialog);
  return dialog;
}

export async function expectNoAxeViolations(page: Page) {
  const { violations } = await new AxeBuilder({ page }).withTags(WCAG_22_AA).analyze();
  const summary = violations.map(v => `${v.id}: ${v.nodes.map(n => n.target).join(" | ")}`);
  expect(summary).toEqual([]);
}
