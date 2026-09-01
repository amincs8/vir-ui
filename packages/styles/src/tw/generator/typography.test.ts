import { describe, expect, it } from "vitest";
import { generateTypography } from "./typography";
import { EXPECTED, VIR_THEME } from "@/tw/test/consts-test";

describe("Tailwind Generators: Typography", () => {
  it("should generate CSS vars for typography", () => {
    expect(generateTypography(VIR_THEME.typography, VIR_THEME.prefix)).toBe(EXPECTED.typography);
  });
});