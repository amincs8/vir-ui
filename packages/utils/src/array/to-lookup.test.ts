import { describe, expect, it } from "vitest";
import { toLookup } from "./to-lookup";

describe("Array: toLookup", () => {
  it.for([
    {
      value: [1, 2, 3],
      expected: {
        1: true,
        2: true,
        3: true,
      },
    },
  ])("toLookup of $value with default value", ({ value, expected }) => {
    expect(toLookup(value)).toEqual(expected);
  });
  it.for([
    {
      value: [1, 2, 3],
      iteratee: true,
      expected: {
        1: true,
        2: true,
        3: true,
      },
    },
    {
      value: ["v1", "v2", "v3"],
      iteratee: "string",
      expected: {
        v1: "string",
        v2: "string",
        v3: "string",
      },
    },
    {
      value: ["v1", "v2", "v3"],
      iteratee: (v: string) => [v, v.length],
      expected: {
        v1: 2,
        v2: 2,
        v3: 2,
      },
    },
  ])("toLookup of $value with value = $iteratee", ({ value, expected, iteratee }) => {
    expect(toLookup(value as Iterable<unknown>, iteratee)).toEqual(expected);
  });

  it.for([
    {
      value: ["v1", "v2", "v3"],
      iteratee: ".length",
      expected: {
        2: "v3",
      },
    },
    {
      value: [
        {
          key1: "value11",
          key2: "value12",
        },
        {
          key1: "value21",
          key2: "value22",
        },
      ],
      iteratee: ".key1",
      expected: {
        value11: {
          key1: "value11",
          key2: "value12",
        },
        value21: {
          key1: "value21",
          key2: "value22",
        },
      },
    },
  ])("toLookup of $value with dot path value $iteratee", ({ value, expected, iteratee }) => {
    expect(toLookup(value as Iterable<unknown>, iteratee)).toEqual(expected);
  });
});