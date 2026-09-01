import { describe, it, expect } from "vitest";
import { generateDivider } from "./divider";
import { EXPECTED, VIR_THEME } from "@/tw/test/consts-test";

describe("Tailwind Generators: Divider", () => {
  it("should generate CSS variables for divider", () => {
    expect(generateDivider(VIR_THEME.divider, VIR_THEME.prefix)).toBe(EXPECTED.divider);
  });
});