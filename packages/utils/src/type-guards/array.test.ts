import { describe, expect, it } from "vitest";
import { isArray, isArrayEmpty, isArrayNonEmpty } from "./array";

describe("Type Guards: Array", () => {
  it.for([
    {
      value: [],
      expectations: {
        isArray: true,
        isArrayEmpty: true,
        isArrayNonEmpty: false,
      },
    },
    {
      value: [1, 2, 3],
      expectations: {
        isArray: true,
        isArrayEmpty: false,
        isArrayNonEmpty: true,
      },
    },
    {
      value: new Array(3),
      expectations: {
        isArray: true,
        isArrayEmpty: false,
        isArrayNonEmpty: true,
      },
    },
    { value: "string", expected: false },
    { value: "", expected: false },
    { value: undefined, expected: false },
    { value: undefined, expected: false },
    { value: 100, expected: false },
    { value: false, expected: false },
    { value: true, expected: false },
    { value: {}, expected: false },
    { value: { foo: true }, expected: false },
    { value: new Date(), expected: false },
    { value: new Set(), expected: false },
    { value: new Map(), expected: false },
    { value: () => 0, expected: false },
  ])("array predicates for $value", ({ value, expectations, expected }) => {
    expect(isArray(value)).toBe(expected ?? expectations.isArray);
    expect(isArrayEmpty(value)).toBe(expected ?? expectations.isArrayEmpty);
    expect(isArrayNonEmpty(value)).toBe(expected ?? expectations.isArrayNonEmpty);
  });
});