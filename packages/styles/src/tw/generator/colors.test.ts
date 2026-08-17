import { describe, it, expect } from "vitest";
import { generateColors } from "./colors";
import { Theme } from "../../types";

describe("Twailwind Generators: Colors", () => {
  it("should generate CSS variables for colors", () => {
    const color = {
      DEFAULT: "white",
      on: "white",
      hover: "white",
      active: "white",
      container: "white",
      containerHover: "white",
      onContainer: "white",
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

    const result = generateColors(colors as unknown as Theme["colors"]);
    expect(result).toBe(
      `--color-primary: #000000;
--color-secondary-50: #f5f5f5;
--color-secondary-100: #e5e5e5;
--color-blue: blue;
--color-tertiary: white;
--color-tertiary-on: white;
--color-tertiary-hover: white;
--color-tertiary-active: white;
--color-tertiary-container: white;
--color-tertiary-container-hover: white;
--color-tertiary-on-container: white;
--color-success: white;
--color-success-on: white;
--color-success-hover: white;
--color-success-active: white;
--color-success-container: white;
--color-success-container-hover: white;
--color-success-on-container: white;
--color-warning: white;
--color-warning-on: white;
--color-warning-hover: white;
--color-warning-active: white;
--color-warning-container: white;
--color-warning-container-hover: white;
--color-warning-on-container: white;
--color-danger: white;
--color-danger-on: white;
--color-danger-hover: white;
--color-danger-active: white;
--color-danger-container: white;
--color-danger-container-hover: white;
--color-danger-on-container: white;
--color-info: white;
--color-info-on: white;
--color-info-hover: white;
--color-info-active: white;
--color-info-container: white;
--color-info-container-hover: white;
--color-info-on-container: white;
`,
    );
  });
});