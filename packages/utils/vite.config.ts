import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: "src/index.ts",
      fileName: "index",
      formats: ["es"],
    },
    sourcemap: false,
    rolldownOptions: {
      external: [],
      output: {
        preserveModules: true, // 👈 keep module structure
        preserveModulesRoot: "src", // 👈 trim folder nesting
        entryFileNames: "[name].js",
      },
    },
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