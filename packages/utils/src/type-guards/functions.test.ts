import { describe, expect, it } from "vitest";
import { isFunction, isFunctionAsync } from "./function";

describe("Type Guards: Functions", () => {
  it.for([
    {
      value: () => 0,
      expectations: {
        isFunction: true,
        isFunctionAsync: false,
      },
    },
    {
      value: async () => 0,
      expectations: {
        isFunction: true,
        isFunctionAsync: true,
      },
    },
    {
      value: async () => Promise.resolve(0),
      expectations: {
        isFunction: true,
        isFunctionAsync: true,
      },
    },
    { value: "string", expected: false },
    { value: "", expected: false },
    { value: undefined, expected: false },
    { value: 100, expected: false },
    { value: false, expected: false },
    { value: true, expected: false },
    { value: {}, expected: false },
    { value: { foo: true }, expected: false },
    { value: [], expected: false },
    { value: [1, 2, 3], expected: false },
    { value: new Date(), expected: false },
    { value: new Set(), expected: false },
    { value: new Map(), expected: false },
  ])("array predicates for $value", ({ value, expectations, expected }) => {
    expect(isFunction(value)).toBe(expected ?? expectations.isFunction);
    expect(isFunctionAsync(value)).toBe(expected ?? expectations.isFunctionAsync);
  });
});