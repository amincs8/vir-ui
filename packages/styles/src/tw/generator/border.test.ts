import { describe, it, expect } from "vitest";
import { generateBorder } from "./border";

describe("Twailwind Generators: Border", () => {
  it("should generate CSS variables for border", () => {
    const result = generateBorder(
      {
        width: "1px",
        style: "solid",
        color: "black",
        radius: "4px",
      },
      "default",
    );
    expect(result).toBe(
      `--border-default-width: 1px;
--border-default-style: solid;
--border-default-color: black;
--border-default-radius: 4px;
`,
    );
  });
});