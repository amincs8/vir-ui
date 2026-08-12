import { describe, expect, it } from "vitest";
import { map } from "./map";
import { isNonNullable } from "../type-guards";

describe("Collection: map", () => {
  it.for([
    {
      value: [1, 2, 3],
      callback: (v: number) => 2 * v,
      expected: [2, 4, 6],
    },
    {
      value: ["string-one", "string-2", "string-three"],
      callback: (v: string) => v.length,
      expected: [10, 8, 12],
    },
    {
      value: [1, null, "str"],
      callback: (v: any) => isNonNullable(v),
      expected: [true, false, true],
    },
    {
      value: {
        "key1": { key1_1: "value1_2" },
        "key2": { key1_1: "value2_1" },
        "key3": { key1_1: "value3_1" },
      },
      callback: (v: any) => v.key1_1,
      expected: [
        "value1_2",
        "value2_1",
        "value3_1",
      ],
    },
  ])("map $value", ({ value, callback, expected }) => {
    expect(map<any, any>(value, callback)).toEqual(expected);
  });
});