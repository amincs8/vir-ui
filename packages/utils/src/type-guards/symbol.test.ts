import { describe, expect, it } from "vitest";
import { isSymbol } from "./symbol";

describe("Type Guards: Symbol", () => {
  it.for([
    { value: Symbol(), expected: true },
    { value: Symbol("symbol"), expected: true },
    { value: null, expected: false },
    { value: undefined, expected: false },
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
  ])("null predicates for $value", ({ value, expected }) => {
    expect(isSymbol(value)).toBe(expected);
  });
});