import { describe, expect, it } from "vitest";
import { reduce } from "./reduce";

describe("Collection: reduce", () => {
  it.for([
    {
      value: [1, 2, 3],
      iteratee: (result: number, v: number, _index: number) => result + v,
      accumulator: 0,
      expected: 6,
    },
    {
      value: { a: 1, b: 2, c: 3 },
      iteratee: (result: string, value: number, key: string) => result + `${key}:${value};`,
      accumulator: "",
      expected: "a:1;b:2;c:3;",
    },
  ])("reduce of $value", ({ value, iteratee, accumulator, expected }) => {
    expect(reduce(value, iteratee as any, accumulator)).toEqual(expected);
  });
});