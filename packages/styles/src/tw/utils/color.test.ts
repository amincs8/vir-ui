import { describe, expect, it } from "vitest";
import { generateColorVarLine } from "./color";

describe("Tailwind/utils: generateColorVarLine", () => {
  it.for([
    { name: "primary", value: ".blue.500", expected: "--color-primary: var(--color-blue-500);" },
    { name: "primary", value: "blue", expected: "--color-primary: blue;" },
    { name: "primary", value: "", expected: "--color-primary: \"\";" },
  ])("Shoult return $expected for $name, $value args", ({ name, value, expected }) => {
    expect(
      generateColorVarLine({
        colorName: name,
        colorValue: value,
        colorScale: "",
        themePrefix: "",
      }),
    ).toBe(expected);
  });
});