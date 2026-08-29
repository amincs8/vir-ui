import { describe, it, expect } from "vitest";
import { numberToColorHex } from "./color";

describe("Private Utils: numberToColorHex", () => {
  it.for([
    { value: 255, expected: "#0000ff" },
    { value: 0x0000ff, expected: "#0000ff" },
    { value: 0x123456, expected: "#123456" },
  ])("should convert a number to a hex color", ({ value, expected }) => {
    expect(numberToColorHex(value)).toBe(expected);
  });
});