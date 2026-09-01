import { describe, it, expect } from "vitest";
import { EXPECTED, VIR_THEME } from "@/tw/test/consts-test";
import { generateOutline } from "./outline";

describe("Tailwind Generators: Outline", () => {
  it("should generate CSS variables for outline", () => {
    expect(generateOutline(VIR_THEME.outline, VIR_THEME.prefix)).toBe(EXPECTED.outline);
  });
});