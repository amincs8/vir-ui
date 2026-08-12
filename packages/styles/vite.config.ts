import { mergeConfig } from "vite";
import { baseVitestConfig } from "../../configs/vitest/base";

export default mergeConfig(
  baseVitestConfig,
  {},
);