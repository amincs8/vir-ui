import { describe, expect, it } from "vitest";
import {
  isBigInt,
  isNumber,
  isNegative,
  isPositive,
  isZero,
} from "./number";

describe("Type Guards: Number", () => {
  it.for([
    {
      value: 0,
      expectations: {
        isBigInt: false,
        isNumber: true,
        isNegative: false,
        isPositive: false,
        isZero: true,
      },
    },
    {
      value: 100,
      expectations: {
        isBigInt: false,
        isNumber: true,
        isNegative: false,
        isPositive: true,
        isZero: false,
      },
    },
    {
      value: -100,
      expectations: {
        isBigInt: false,
        isNumber: true,
        isNegative: true,
        isPositive: false,
        isZero: false,
      },
    },
    {
      value: 100n,
      expectations: {
        isBigInt: true,
        isNumber: false,
        isNegative: false,
        isPositive: false,
        isZero: false,
      },
    },
    { value: "string", expected: false },
    { value: "", expected: false },
    { value: null, expected: false },
    { value: undefined, expected: false },
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
  ])("number predicates for $value", ({ value, expectations, expected }) => {
    expect(isBigInt(value)).toBe(expected ?? expectations.isBigInt);
    expect(isNumber(value)).toBe(expected ?? expectations.isNumber);
    expect(isNegative(value)).toBe(expected ?? expectations.isNegative);
    expect(isPositive(value)).toBe(expected ?? expectations.isPositive);
    expect(isZero(value)).toBe(expected ?? expectations.isZero);
  });
});