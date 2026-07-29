import { describe, expect, it } from "vitest";
import { every } from "./every";

describe("Coleection: Every", () => {
  it.for([
    {
      value: [1, 2, 3, 4, 5],
      callback: (v: number) => v > 0,
      expected: true,
    },
    {
      value: [],
      callback: (v: number) => v > 0,
      expected: true,
    },
    {
      value: [0, 1, 2],
      callback: (v: number) => v > 0,
      expected: false,
    },
    {
      value: new Set([1, 2, 3]),
      callback: (v: number) => v > 0,
      expected: true,
    },
    {
      value: new Map([
        ["key1", "value1"],
        ["key2", "value2"],
      ]),
      callback: (v: [string, string]) => v[1].length > 0,
      expected: true,
    },
    {
      value: new Map([
        ["key1", "value1"],
        ["key2", "value2"],
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
  ])("every predicates for $value", ({ value, callback, expected }) => {
    expect(every(value as any, callback as any)).toBe(expected);
  });
});