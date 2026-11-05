import { defineConfig, devices } from "@playwright/test";

const PORT = 4100;
const baseURL = `http://localhost:${PORT}`;

export default defineConfig({
  testDir: "e2e",
  // Full-page axe scans take several seconds even on a quiet machine
  timeout: 60_000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  reporter: process.env.CI ? "github" : "list",
  use: {
    ...devices["Desktop Chrome"],
    baseURL,
    // Entrance animations would otherwise be mid-flight during scans and focus checks
    contextOptions: { reducedMotion: "reduce" },
    trace: "retain-on-failure",
  },
  // Runs the production build, the only place MSW must be absent
  webServer: {
    command: "bun run start",
    env: { PORT: String(PORT) },
    url: baseURL,
    reuseExistingServer: !process.env.CI,
  },
});
