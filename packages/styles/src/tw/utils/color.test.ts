import { describe, expect, it } from "vitest";
import { generateColorVarName } from "./color";

describe("Tailwind/utils: generateColorVarName", () => {
  it.for([
    { name: "primary", value: ".blue.500", expected: "--color-primary: var(--color-blue-500)" },
  ])("Shoult return $expected for $name, $value args", ({ name, value, expected }) => {
    expect(generateColorVarName({
      colorName: name,
      colorValue: value,
      colorScale: "",
      themePrefix: "",
    })).toBe(expected);
  });
});