import { describe, expect, it } from "vitest";
import { toSize } from "./size";

describe("toSize", () => {
  it.for([
    { value: 24, expected: "24px" },
    { value: "20px", expected: "20px" },
    { value: "1rem", expected: "1rem" },
  ])("should convert $value to $expected", ({ value, expected }) => {
    expect(toSize(value)).toBe(expected);
  });
});