import { describe, expect, it } from "vitest";
import { randomColor } from "./color";

describe("Random: Color", () => {
  it("returns valid hex color", () => {
    const color = randomColor();

    expect(color).toMatch(/^#[0-9a-f]{6}$/);
  });

  it("always returns 7 characters", () => {
    expect(randomColor()).toHaveLength(7);
  });
});