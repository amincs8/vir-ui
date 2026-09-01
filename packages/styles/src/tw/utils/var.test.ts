import { describe, expect, it } from "vitest";
import { generateVarLine, generateVarName } from "./var";

describe("Tailwind/utils: generateVarName", () => {
  it.for([
    { values: ["v1", "v2", "v3"], expected: "--v1-v2-v3" },
    { values: ["v1", "v2", ""], expected: "--v1-v2" },
    { values: ["v1", "v2", undefined], expected: "--v1-v2" },
  ])("Should return $expected for $values args", ({ values, expected }) => {
    expect(generateVarName(values)).toBe(expected);
    expect(generateVarName(...values)).toBe(expected);
  });
});

describe("Tailwind/utils: generateVarLine", () => {
  it.for([
    {
      values: {
        type: "color",
        name: "primary",
        value: ".blue.500",
        themePrefix: "base",
      },
      expected: "--color-primary: var(--color-blue-500);",
    },
    {
      values: {
        type: "color",
        name: "secondary",
        value: ".red.500",
        themePrefix: "base",
      },
      expected: "--color-secondary: var(--color-red-500);",
    },
    {
      values: {
        type: "color",
        name: ["tertiary", "on", "container"],
        value: ".green.500",
        themePrefix: "base",
      },
      expected: "--color-tertiary-on-container: var(--color-green-500);",
    },
  ])("Should return $expected for $values args", ({ values, expected }) => {
    expect(generateVarLine(values as Parameters<typeof generateVarLine>[0])).toBe(expected);
  });
});