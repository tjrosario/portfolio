import { expect, test } from "@playwright/test";
import resume from "@/data/resume.json";
import { openResume } from "./helpers";

test("loads on open and hands focus back on close", async ({ page }) => {
  await page.goto("/");
  const dialog = await openResume(page);

  await expect(dialog.getByRole("heading", { name: resume.experience[0].title })).toBeVisible();
  await page.keyboard.press("Escape");

  await expect(dialog).toBeHidden();
  await expect(page.locator("#hero").getByRole("button", { name: "View Resume" })).toBeFocused();
});

test("closes from the backdrop but not from a click inside", async ({ page }) => {
  await page.goto("/");
  const dialog = await openResume(page);

  await dialog.getByRole("region", { name: "Resume content" }).click();
  await expect(dialog).toBeVisible();

  await page.mouse.click(4, 4);
  await expect(dialog).toBeHidden();
});

test("recovers from a failed request", async ({ page }) => {
  await page.route("**/api/resume", route => route.fulfill({ status: 500 }), { times: 1 });
  await page.goto("/");
  const dialog = await openResume(page);

  await dialog.getByRole("button", { name: "Try again" }).click();

  await expect(dialog.getByRole("button", { name: "Close resume" })).toBeFocused();
  await expect(dialog.getByRole("region", { name: "Resume content" })).toBeVisible();
});

test("prints on one page", async ({ page }) => {
  await page.goto("/");
  const dialog = await openResume(page);
  await expect(dialog.getByRole("region", { name: "Resume content" })).toBeVisible();

  await page.emulateMedia({ media: "print" });
  const pdf = await page.pdf({ format: "Letter" });

  expect(pdf.toString("latin1").match(/\/Type\s*\/Page[^s]/g)).toHaveLength(1);
});
