import { describe, it, expect } from "vitest";
import { generateColors } from "./colors";
import { Theme } from "@/types";
import { EXPECTED, VIR_THEME } from "@/tw/test/consts-test";

describe("Tailwind Generators: Colors", () => {
  it("should generate CSS variables for colors", () => {
    const result = generateColors(
      {
        ...VIR_THEME.colors,
        ...VIR_THEME.semanticColors,
      } as unknown as Theme["colors"],
      VIR_THEME.prefix,
    );

    expect(result.trim()).toBe([EXPECTED.colors, EXPECTED.semanticColors].join("\n"));
  });
});