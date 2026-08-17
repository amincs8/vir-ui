import { describe, it, expect } from "vitest";
import { generateDivider } from "./divider";

describe("Twailwind Generators: Divider", () => {
  it("should generate CSS variables for divider", () => {
    const result = generateDivider(
      {
        width: "1px",
        style: "solid",
        color: "black",
      },
      "default",
    );
    expect(result).toBe(
      `--divider-default-width: 1px;
--divider-default-style: solid;
--divider-default-color: black;
`,
    );
  });
});