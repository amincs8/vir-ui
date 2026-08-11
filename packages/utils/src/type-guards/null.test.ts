import { describe, expect, it } from "vitest";
import { isNonNullable, isNull } from "./null";

describe("Type Guards: Null", () => {
  it.for([
    { value: null, expected: true },
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
    expect(isNull(value)).toBe(expected);
  });
});

describe("Type Guards: isNonNullable", () => {
  it.for([
    { value: null, expected: false },
    { value: undefined, expected: false },
    { value: "string", expected: true },
    { value: 100, expected: true },
    { value: false, expected: true },
    { value: true, expected: true },
    { value: [], expected: true },
    { value: [1, 2, 3], expected: true },
    { value: {}, expected: true },
    { value: { foo: true }, expected: true },
    { value: new Date(), expected: true },
    { value: new Set(), expected: true },
    { value: new Map(), expected: true },
    { value: () => 0, expected: true },
  ])("isNonNullable predicates for $value", ({ value, expected }) => {
    expect(isNonNullable(value)).toBe(expected);
  });
});