import { describe, expect, it } from "vitest";
import { some } from "./some";

describe("Coleection: Some", () => {
  it.for([
    {
      value: [1, 2, 3, 4, 5],
      callback: (v: number) => v > 0,
      expected: true,
    },
    {
      value: [],
      callback: (v: number) => v > 0,
      expected: false,
    },
    {
      value: [0, 1, -2],
      callback: (v: number) => v > 0,
      expected: true,
    },
    {
      value: new Set([1, 2, 3, 0, -1]),
      callback: (v: number) => v > 0,
      expected: true,
    },
    {
      value: new Map([
        ["key1", "value1"],
        ["key2", "value2"],
        ["key3", ""],
      ]),
      callback: (v: [string, string]) => v[1].length > 0,
      expected: true,
    },
    {
      value: new Map([
        ["key1", ""],
        ["key2", ""],
        ["key3", ""],
      ]),
      callback: (v: [string, string]) => v[1].length > 0,
      expected: false,
    },
    { value: { key1: "value1" }, callback: Boolean, expected: false },
    { value: {}, callback: Boolean, expected: false },
    { value: null, callback: Boolean, expected: false },
    { value: undefined, callback: Boolean, expected: false },
    { value: 123, callback: Boolean, expected: false },
    { value: true, callback: Boolean, expected: false },
  ])("some predicates for $value", ({ value, callback, expected }) => {
    expect(some(value as any, callback as any)).toBe(expected);
  });
});