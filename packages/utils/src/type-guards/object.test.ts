import { describe, expect, it } from "vitest";
import { isObject, isObjectOfType, isPlainObject } from "./object";

describe("Type Guards: Object", () => {
  it.for([
    {
      value: {},
      instanceOf: Object,
      expectations: {
        isObject: true,
        isObjectOfType: true,
        isPlainObject: true,
      },
    },
    {
      value: [],
      instanceOf: ArrayBuffer,
      expectations: {
        isObject: true,
        isObjectOfType: false,
        isPlainObject: false,
      },
    },
    {
      value: [],
      instanceOf: Array,
      expectations: {
        isObject: true,
        isObjectOfType: true,
        isPlainObject: false,
      },
    },
    {
      value: [1, 2, 3],
      instanceOf: Object,
      expectations: {
        isObject: true,
        isObjectOfType: true,
        isPlainObject: false,
      },
    },
    {
      value: new Date(),
      instanceOf: Date,
      expectations: {
        isObject: true,
        isObjectOfType: true,
        isPlainObject: false,
      },
    },
    {
      value: new Set(),
      instanceOf: Set,
      expectations: {
        isObject: true,
        isObjectOfType: true,
        isPlainObject: false,
      },
    },
    {
      value: new Map(),
      instanceOf: Map,
      expectations: {
        isObject: true,
        isObjectOfType: true,
        isPlainObject: false,
      },
    },

    { value: "string", expected: false },
    { value: "", expected: false },
    { value: undefined, expected: false },
    { value: 100, expected: false },
    { value: false, expected: false },
    { value: true, expected: false },
    { value: () => 0, expected: false },
  ])(
    "object predicates for $value, $instanceOf",
    ({ value, expectations, expected, instanceOf = Object }) => {
      expect(isObject(value)).toBe(expected ?? expectations.isObject);
      expect(isObjectOfType(value, instanceOf)).toBe(expected ?? expectations.isObjectOfType);
      expect(isPlainObject(value)).toBe(expected ?? expectations.isPlainObject);
    },
  );
});