import { describe, expect, it } from "vitest";
import { hasKey } from "./has-key";

export const keySym1 = Symbol();
export const keySym2 = Symbol();

export const mainObject = {
  key1: {
    key1_1: {
      key1_1_1: "value1_1_1",
    },
  },
  key2: {
    key2_1: {
      key2_1_1: "value2_1_1",
      key2_1_2: {
        key2_1_2_1: "value2_2_1",
      },
    },
  },
  key3: {
    key3_1: {
      key3_1_1: "value3_1_1",
      key3_1_2: "value3_1_1",
    },
  },
  key4: [
    "value4",
    {
      key4_1: [
        "value4_1",
        {
          key4_1_1: "value4_1_1",
        },
      ],
    },
  ],
  [keySym1]: [
    "value5_1",
    "value5_2",
    {
      [keySym2]: "value5_3",
    },
  ],
};

export const array: [string, typeof mainObject] = ["value1", mainObject];
describe("Object: hasKey", () => {
  it.for([
    {
      path: ".key1",
      obj: mainObject,
      _objName: "mainObject",
      expected: true,
    },
    {
      path: ".key1.key1_1",
      obj: mainObject,
      _objName: "mainObject",
      expected: true,
    },
    {
      path: ".key1.key1_1.key1_1_1",
      obj: mainObject,
      _objName: "mainObject",
      expected: true,
    },
    {
      path: ".key2",
      obj: mainObject,
      _objName: "mainObject",
      expected: true,
    },
    {
      path: ".key2.key2_1",
      obj: mainObject,
      _objName: "mainObject",
      expected: true,
    },
    {
      path: ".key2.key2_1.key2_1_1",
      obj: mainObject,
      _objName: "mainObject",
      expected: true,
    },
    {
      path: ".key2.key2_1.key2_1_2",
      obj: mainObject,
      _objName: "mainObject",
      expected: true,
    },
    {
      path: ".key2.key2_1.key2_1_2.key2_1_2_1",
      obj: mainObject,
      _objName: "mainObject",
      expected: true,
    },
    {
      path: ".key3",
      obj: mainObject,
      _objName: "mainObject",
      expected: true,
    },
    {
      path: ".key3.key3_1",
      obj: mainObject,
      _objName: "mainObject",
      expected: true,
    },
    {
      path: ".key3.key3_1.key3_1_1",
      obj: mainObject,
      _objName: "mainObject",
      expected: true,
    },
    {
      path: ".key3.key3_1.key3_1_2",
      obj: mainObject,
      _objName: "mainObject",
      expected: true,
    },
    {
      path: ".key4",
      obj: mainObject,
      _objName: "mainObject",
      expected: true,
    },
    {
      path: ".key4[0]",
      obj: mainObject,
      _objName: "mainObject",
      expected: true,
    },
    {
      path: ".key4[000]",
      obj: mainObject,
      _objName: "mainObject",
      expected: true,
    },
    {
      path: ".key4[1].key4_1",
      obj: mainObject,
      _objName: "mainObject",
      expected: true,
    },
    {
      path: ".key4[001].key4_1",
      obj: mainObject,
      _objName: "mainObject",
      expected: true,
    },
    {
      path: ".key4[1].key4_1[0]",
      obj: mainObject,
      _objName: "mainObject",
      expected: true,
    },
    {
      path: ".key4[1].key4_1[1].key4_1_1",
      obj: mainObject,
      _objName: "mainObject",
      expected: true,
    },
    {
      path: ".key4.1.key4_1[1].key4_1_1",
      obj: mainObject,
      _objName: "mainObject",
      expected: true,
    },
    {
      path: ".key4.1.key4_1[2].key4_1_1",
      obj: mainObject,
      _objName: "mainObject",
      expected: false,
    },
    {
      path: ".key_non",
      obj: mainObject,
      _objName: "mainObject",
      expected: false,
    },
    {
      path: "key1",
      obj: mainObject,
      _objName: "mainObject",
      expected: false,
    },

    {
      path: "[1].key1",
      obj: array,
      _objName: "array",
      expected: true,
    },
    {
      path: "[1].key1.key1_1",
      obj: array,
      _objName: "array",
      expected: true,
    },
    {
      path: "[1].key1.key1_1.key1_1_1",
      obj: array,
      _objName: "array",
      expected: true,
    },
    {
      path: "[1].key2",
      obj: array,
      _objName: "array",
      expected: true,
    },
    {
      path: "[1].key2.key2_1",
      obj: array,
      _objName: "array",
      expected: true,
    },
    {
      path: "[1].key2.key2_1.key2_1_1",
      obj: array,
      _objName: "array",
      expected: true,
    },
    {
      path: "[1].key2.key2_1.key2_1_2",
      obj: array,
      _objName: "array",
      expected: true,
    },
    {
      path: "[1].key2.key2_1.key2_1_2.key2_1_2_1",
      obj: array,
      _objName: "array",
      expected: true,
    },
    {
      path: "[1].key3",
      obj: array,
      _objName: "array",
      expected: true,
    },
    {
      path: "[1].key3.key3_1",
      obj: array,
      _objName: "array",
      expected: true,
    },
    {
      path: "[1].key3.key3_1.key3_1_1",
      obj: array,
      _objName: "array",
      expected: true,
    },
    {
      path: "[1].key3.key3_1.key3_1_2",
      obj: array,
      _objName: "array",
      expected: true,
    },
    {
      path: "[1].key4",
      obj: array,
      _objName: "array",
      expected: true,
    },
    {
      path: "[1].key4[0]",
      obj: array,
      _objName: "array",
      expected: true,
    },
    {
      path: "[1].key4[000]",
      obj: array,
      _objName: "array",
      expected: true,
    },
    {
      path: "[1].key4[1].key4_1",
      obj: array,
      _objName: "array",
      expected: true,
    },
    {
      path: "[1].key4[001].key4_1",
      obj: array,
      _objName: "array",
      expected: true,
    },
    {
      path: "[1].key4[1].key4_1[0]",
      obj: array,
      _objName: "array",
      expected: true,
    },
    {
      path: "[1].key4[1].key4_1[1].key4_1_1",
      obj: array,
      _objName: "array",
      expected: true,
    },
    {
      path: "[1].key4.1.key4_1[1].key4_1_1",
      obj: array,
      _objName: "array",
      expected: true,
    },
    {
      path: "[1].key4.1.key4_1[2].key4_1_1",
      obj: array,
      _objName: "array",
      expected: false,
    },
    {
      path: "[1].key_non",
      obj: array,
      _objName: "array",
      expected: false,
    },
  ])("hasKey predicates for dot pathes: $_objName $path", ({ path, obj, _objName, expected }) => {
    expect(hasKey(obj, path)).toBe(expected);
  });

  it.for([
    {
      path: ["key1"],
      obj: mainObject,
      _objName: "mainObject",
      expected: true,
    },
    {
      path: ["key1", "key1_1"],
      obj: mainObject,
      _objName: "mainObject",
      expected: true,
    },
    {
      path: ["key1", "key1_1", "key1_1_1"],
      obj: mainObject,
      _objName: "mainObject",
      expected: true,
    },
    {
      path: ["key2"],
      obj: mainObject,
      _objName: "mainObject",
      expected: true,
    },
    {
      path: ["key2", "key2_1"],
      obj: mainObject,
      _objName: "mainObject",
      expected: true,
    },
    {
      path: ["key2", "key2_1", "key2_1_1"],
      obj: mainObject,
      _objName: "mainObject",
      expected: true,
    },
    {
      path: ["key2", "key2_1", "key2_1_2"],
      obj: mainObject,
      _objName: "mainObject",
      expected: true,
    },
    {
      path: ["key2", "key2_1", "key2_1_2", "key2_1_2_1"],
      obj: mainObject,
      _objName: "mainObject",
      expected: true,
    },
    {
      path: ["key3"],
      obj: mainObject,
      _objName: "mainObject",
      expected: true,
    },
    {
      path: ["key3", "key3_1"],
      obj: mainObject,
      _objName: "mainObject",
      expected: true,
    },
    {
      path: ["key3", "key3_1", "key3_1_1"],
      obj: mainObject,
      _objName: "mainObject",
      expected: true,
    },
    {
      path: ["key3", "key3_1", "key3_1_2"],
      obj: mainObject,
      _objName: "mainObject",
      expected: true,
    },
    {
      path: ["key4"],
      obj: mainObject,
      _objName: "mainObject",
      expected: true,
    },
    {
      path: ["key4", "0"],
      obj: mainObject,
      _objName: "mainObject",
      expected: true,
    },
    {
      path: ["key4", "1", "key4_1"],
      obj: mainObject,
      _objName: "mainObject",
      expected: true,
    },
    {
      path: ["key4", 1, "key4_1", 0],
      obj: mainObject,
      _objName: "mainObject",
      expected: true,
    },
    {
      path: ["key4", "1", "key4_1", "1", "key4_1_1"],
      obj: mainObject,
      _objName: "mainObject",
      expected: true,
    },
    {
      path: ["key4", 1, "key4_1", 1, "key4_1_1"],
      obj: mainObject,
      _objName: "mainObject",
      expected: true,
    },
    {
      path: ["key4", "1", "key4_1", 2, "key4_1_1"],
      obj: mainObject,
      _objName: "mainObject",
      expected: false,
    },
    {
      path: [keySym1],
      obj: mainObject,
      _objName: "mainObject",
      expected: true,
    },
    {
      path: [keySym1, 0],
      obj: mainObject,
      _objName: "mainObject",
      expected: true,
    },
    {
      path: [keySym1, 1],
      obj: mainObject,
      _objName: "mainObject",
      expected: true,
    },
    {
      path: [keySym1, 2],
      obj: mainObject,
      _objName: "mainObject",
      expected: true,
    },
    {
      path: [keySym1, 2, keySym2],
      obj: mainObject,
      _objName: "mainObject",
      expected: true,
    },
    {
      path: [keySym1, 2, keySym2, keySym1],
      obj: mainObject,
      _objName: "mainObject",
      expected: false,
    },
    {
      path: ["key_non"],
      obj: mainObject,
      _objName: "mainObject",
      expected: false,
    },

    {
      path: [1, "key1"],
      obj: array,
      _objName: "array",
      expected: true,
    },
    {
      path: [1, "key1", "key1_1"],
      obj: array,
      _objName: "array",
      expected: true,
    },
    {
      path: [1, "key1", "key1_1", "key1_1_1"],
      obj: array,
      _objName: "array",
      expected: true,
    },
    {
      path: [1, "key2"],
      obj: array,
      _objName: "array",
      expected: true,
    },
    {
      path: [1, "key2", "key2_1"],
      obj: array,
      _objName: "array",
      expected: true,
    },
    {
      path: [1, "key2", "key2_1", "key2_1_1"],
      obj: array,
      _objName: "array",
      expected: true,
    },
    {
      path: [1, "key2", "key2_1", "key2_1_2"],
      obj: array,
      _objName: "array",
      expected: true,
    },
    {
      path: [1, "key2", "key2_1", "key2_1_2", "key2_1_2_1"],
      obj: array,
      _objName: "array",
      expected: true,
    },
    {
      path: [1, "key3"],
      obj: array,
      _objName: "array",
      expected: true,
    },
    {
      path: [1, "key3", "key3_1"],
      obj: array,
      _objName: "array",
      expected: true,
    },
    {
      path: [1, "key3", "key3_1", "key3_1_1"],
      obj: array,
      _objName: "array",
      expected: true,
    },
    {
      path: [1, "key3", "key3_1", "key3_1_2"],
      obj: array,
      _objName: "array",
      expected: true,
    },
    {
      path: [1, "key4"],
      obj: array,
      _objName: "array",
      expected: true,
    },
    {
      path: [1, "key4", "0"],
      obj: array,
      _objName: "array",
      expected: true,
    },
    {
      path: [1, "key4", "1", "key4_1"],
      obj: array,
      _objName: "array",
      expected: true,
    },
    {
      path: [1, "key4", 1, "key4_1", 0],
      obj: array,
      _objName: "array",
      expected: true,
    },
    {
      path: [1, "key4", "1", "key4_1", "1", "key4_1_1"],
      obj: array,
      _objName: "array",
      expected: true,
    },
    {
      path: [1, "key4", 1, "key4_1", 1, "key4_1_1"],
      obj: array,
      _objName: "array",
      expected: true,
    },
    {
      path: [1, "key4", "1", "key4_1", 2, "key4_1_1"],
      obj: array,
      _objName: "array",
      expected: false,
    },
    {
      path: [1, keySym1],
      obj: array,
      _objName: "array",
      expected: true,
    },
    {
      path: [1, keySym1, 0],
      obj: array,
      _objName: "array",
      expected: true,
    },
    {
      path: [1, keySym1, 1],
      obj: array,
      _objName: "array",
      expected: true,
    },
    {
      path: [1, keySym1, 2],
      obj: array,
      _objName: "array",
      expected: true,
    },
    {
      path: [1, keySym1, 2, keySym2],
      obj: array,
      _objName: "array",
      expected: true,
    },
    {
      path: [1, keySym1, 2, keySym2, keySym1],
      obj: array,
      _objName: "array",
      expected: false,
    },
    {
      path: [1, "key_non"],
      obj: array,
      _objName: "array",
      expected: false,
    },
  ])("hasKey predicates for property-key: $_objName $path", ({ path, obj, _objName, expected }) => {
    expect(hasKey(obj, path)).toBe(expected);
  });

  it.for([
    { value: null },
    { value: 1 },
    { value: "string" },
    { value: undefined },
    { value: Symbol() },
  ])("Return false for non objects", ({ value }) => {
    expect(hasKey(value as unknown as object, ".key")).toBe(false);
  });
});