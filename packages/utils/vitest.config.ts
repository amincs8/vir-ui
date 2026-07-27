import { mergeConfig } from "vite";
import { defineConfig } from "vitest/config";

import { baseVitestConfig } from "../../configs/vitest/base";

export default mergeConfig(
  baseVitestConfig,
  defineConfig({
    test: {
      environment: "node",
    },
  }),
);