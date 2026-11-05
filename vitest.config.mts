import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  resolve: { tsconfigPaths: true },
  test: {
    environment: "jsdom",
    setupFiles: ["./test/setup.ts"],
    include: ["{app,components,lib,mocks}/**/*.test.{ts,tsx}", "*.test.ts"],
  },
});
