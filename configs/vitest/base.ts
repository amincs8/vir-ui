import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export const baseVitestConfig = defineConfig({
  test: {
    clearMocks: true,
    globals: true,
    include: ["src/**/*.test.ts"],
    restoreMocks: true,
  },
  plugins: [
    tsconfigPaths(),
  ],
});