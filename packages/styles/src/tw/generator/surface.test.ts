import { describe, it, expect } from "vitest";
import { generateSurface } from "./surface";
import { EXPECTED, VIR_THEME } from "@/tw/test/consts-test";

describe("Tailwind Generators: Surface", () => {
  it("should generate CSS variables for surface", () => {
    expect(generateSurface(VIR_THEME.surface, VIR_THEME.prefix)).toBe(EXPECTED.surface);
  });
});