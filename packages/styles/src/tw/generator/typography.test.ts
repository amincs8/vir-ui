import { describe, expect, it } from "vitest";
import { generateTypography } from "./typography";

describe("Twailwind Generators: Typography", () => {
  it("should generate CSS vars for typography", () => {
    const result = generateTypography(
      {
        fontFamily: ["sans"],
        fontSize: 16,
        fontWeight: 700,
        lineHeight: 1.5,
        letterSpacing: "0",
      },
      "base",
    );

    expect(result).toBe(
      `--font-base: sans;
--text-base: 16px;
--font-weight-base: 700;
--leading-base: 1.5;
--tracking-base: 0;
`,
    );
  });
});