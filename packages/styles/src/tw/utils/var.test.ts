import { describe, expect, it } from "vitest";
import { generateVarName } from "./var";

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