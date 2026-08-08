import { describe, expect, it } from "vitest";
import { randomBoolean } from "./boolean";

describe("randomBoolean", () => {
  it("returns a boolean", () => {
    const result = randomBoolean();

    expect(result).toBeTypeOf("boolean");
  });

  it.for([true, false])("can return $0", (expected) => {
    let found = false;

    for (let i = 0; i < 1000; i++) {
      if (randomBoolean() === expected) {
        found = true;
        break;
      }
    }

    expect(found).toBe(true);
  });
});