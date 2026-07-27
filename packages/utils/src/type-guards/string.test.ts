import { describe, expect, it } from "vitest";
import { isString, isStringEmpty, isStringNonEmpty } from "./string";

describe("Type Guards: String", () => {
  it.for([
    {
      value: "string",
      expectations: {
        isString: true,
        isStringEmpty: false,
        isStringNonEmpty: true,
      },
    },
    {
      value: "",
      expectations: {
        isString: true,
        isStringEmpty: true,
        isStringNonEmpty: false,
      },
    },
    { value: null, expected: false },
    { value: undefined, expected: false },
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
  ])("string predicates for $value", ({ value, expectations, expected }) => {
    expect(isString(value)).toBe(expected ?? expectations.isString);
    expect(isStringEmpty(value)).toBe(expected ?? expectations.isStringEmpty);
    expect(isStringNonEmpty(value)).toBe(expected ?? expectations.isStringNonEmpty);
  });
});