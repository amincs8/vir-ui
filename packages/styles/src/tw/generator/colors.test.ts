import { describe, it, expect } from "vitest";
import { generateColors } from "./colors";
import { Theme } from "@/types";

describe("Tailwind Generators: Colors", () => {
  it("should generate CSS variables for colors", () => {
    const color = {
      DEFAULT: ".white",
      on: ".gray.200",
      hover: ".gray.400",
      active: ".gray.400",
      container: ".gray.200",
      containerHover: ".gray.200",
      onContainer: "..info.800",
    };
    const colors = {
      primary: "#000000",
      secondary: {
        50: "#f5f5f5",
        100: "#e5e5e5",
      },
      blue: "blue",
      non: undefined,
      non_2: null,
      tertiary: color,
      success: color,
      warning: color,
      danger: color,
      info: color,
    };

    const result = generateColors(colors as unknown as Theme["colors"], "base");
    expect(result).toBe(
      `--color-primary: #000000;
--color-secondary-50: #f5f5f5;
--color-secondary-100: #e5e5e5;
--color-blue: blue;
--color-tertiary: var(--color-white);
--color-tertiary-on: var(--color-gray-200);
--color-tertiary-hover: var(--color-gray-400);
--color-tertiary-active: var(--color-gray-400);
--color-tertiary-container: var(--color-gray-200);
--color-tertiary-container-hover: var(--color-gray-200);
--color-tertiary-on-container: var(--base-info-800);
--color-success: var(--color-white);
--color-success-on: var(--color-gray-200);
--color-success-hover: var(--color-gray-400);
--color-success-active: var(--color-gray-400);
--color-success-container: var(--color-gray-200);
--color-success-container-hover: var(--color-gray-200);
--color-success-on-container: var(--base-info-800);
--color-warning: var(--color-white);
--color-warning-on: var(--color-gray-200);
--color-warning-hover: var(--color-gray-400);
--color-warning-active: var(--color-gray-400);
--color-warning-container: var(--color-gray-200);
--color-warning-container-hover: var(--color-gray-200);
--color-warning-on-container: var(--base-info-800);
--color-danger: var(--color-white);
--color-danger-on: var(--color-gray-200);
--color-danger-hover: var(--color-gray-400);
--color-danger-active: var(--color-gray-400);
--color-danger-container: var(--color-gray-200);
--color-danger-container-hover: var(--color-gray-200);
--color-danger-on-container: var(--base-info-800);
--color-info: var(--color-white);
--color-info-on: var(--color-gray-200);
--color-info-hover: var(--color-gray-400);
--color-info-active: var(--color-gray-400);
--color-info-container: var(--color-gray-200);
--color-info-container-hover: var(--color-gray-200);
--color-info-on-container: var(--base-info-800);
`,
    );
  });
});