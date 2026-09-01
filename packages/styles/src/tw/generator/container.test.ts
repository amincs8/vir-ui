import { describe, it, expect } from "vitest";
import { EXPECTED, VIR_THEME } from "@/tw/test/consts-test";
import { generateContainer } from "./container";

describe("Tailwind Generators: Container", () => {
  it("should generate container utility", () => {
    expect(generateContainer(VIR_THEME.container, VIR_THEME.prefix)).toBe(EXPECTED.container);
  });
});