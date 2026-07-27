import { describe, expect, it } from "vitest";
import { isUndefined } from "./undefined";

describe("Type Guards: Undefined", () => {
  it.for([
    { value: undefined, expected: true },
    { value: null, expected: false },
    { value: "string", expected: false },
    { value: 100, expected: false },
    { value: false, expected: false },
    { value: true, expected: false },
    { value: [], expected: false },
    { value: [1, 2, 3], expected: false },
    { value: {}, expected: false },
    { value: { foo: true }, expected: false },
    { value: new Date(), expected: false },
    { value: new Set(), expected: false },
    { value: new Map(), expected: false },
    { value: () => 0, expected: false },
  ])("undefined predicates for $value", ({ value, expected }) => {
    expect(isUndefined(value)).toBe(expected);
  });
});