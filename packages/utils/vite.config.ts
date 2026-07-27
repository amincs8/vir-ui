import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      fileName: "index",
      formats: ["es"],
    },
    sourcemap: true,
  },

  plugins: [
    dts({
      copyDtsFiles: true,
      exclude: [
        "**/*.test.*",
        "**/*.spec.*",
        "**/*.stories.*",
        "**/__tests__.ts",
        "**/__tests__/**",
        "**/__mocks__/**",
      ],
      insertTypesEntry: true,
    }),
  ],
});