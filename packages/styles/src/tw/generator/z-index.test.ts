import { describe, expect, it } from "vitest";
import { generateZIndex } from "./z-index";
import { EXPECTED, VIR_THEME } from "../test/consts-test";

describe("Tailwind Generators: zIndex", () => {
  it("should generate z-index utilities", () => {
    expect(generateZIndex(VIR_THEME.zIndex)).toBe(EXPECTED.zIndex);
  });
});