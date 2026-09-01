import { describe, expect, it } from "vitest";
import { generateTailwindTheme } from "./generate-tw-theme";
import { EXPECTED, VIR_THEME } from "./test/consts-test";

describe("generate-tw-theme", () => {
  it("Should generates tailwind theme vars", () => {
    expect(generateTailwindTheme(VIR_THEME).trim()).toBe(
      "@theme {\n" +
        [
          EXPECTED.colors.trim(),
          EXPECTED.semanticColors.trim(),
          EXPECTED.border.trim(),
          EXPECTED.divider.trim(),
          EXPECTED.outline.trim(),
          EXPECTED.surface.trim(),
          EXPECTED.typography.trim(),
        ].join("\n") +
        "\n}\n" + EXPECTED.zIndex.trim(),
    );
  });
});