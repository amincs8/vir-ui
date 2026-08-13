import { describe, it, expect } from "vitest";
import { merge } from "./merge";

describe("Object: merge", () => {
  const now = new Date();
  it("merge two objects", () => {
    const defaults = {
      k1: "v1",
      k2: null,
      k3: undefined,
      k4: {
        k4_1: "v4_1",
        k4_2: [1, 2, 3],
      },
      k5: now,
    };
    const overrides = {
      k3: "ovalue3",
      k4: {
        k4_1: "o4_1",
        k4_2: [1, 2, 3, 4],
        defaults,
      },
      ko1: {
        defaults,
      },
    };
    const result = {
      k1: "v1",
      k2: null,
      k3: "ovalue3",
      k4: {
        k4_1: "o4_1",
        k4_2: [1, 2, 3, 4],
        defaults,
      },
      k5: now,
      ko1: {
        defaults,
      },
    };

    expect(merge(defaults, overrides)).toEqual(result);
  });
});