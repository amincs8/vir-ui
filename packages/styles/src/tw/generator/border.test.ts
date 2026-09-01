import { describe, it, expect } from "vitest";
import { generateBorder } from "./border";
import { EXPECTED, VIR_THEME } from "../test/consts-test";

describe("Tailwind Generators: Border", () => {
  it("should generate CSS variables for border", () => {
    expect(generateBorder(VIR_THEME.border, VIR_THEME.prefix)).toBe(EXPECTED.border);
  });
});
