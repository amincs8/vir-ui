import { describe, expect, it } from "vitest";
import { getValue } from "./get-value";
import { array, keySym1, keySym2, mainObject } from "./has-key.test";

describe("Object: getValue", () => {
  it.for([
    {
      path: ".key1",
      obj: mainObject,
      _objName: "mainObject",
      expected: mainObject["key1"],
    },
    {
      path: ".key1.key1_1",
      obj: mainObject,
      _objName: "mainObject",
      expected: mainObject["key1"]["key1_1"],
    },
    {
      path: ".key1.key1_1.key1_1_1",
      obj: mainObject,
      _objName: "mainObject",
      expected: mainObject["key1"]["key1_1"]["key1_1_1"],
    },
    {
      path: ".key2",
      obj: mainObject,
      _objName: "mainObject",
      expected: mainObject["key2"],
    },
    {
      path: ".key2.key2_1",
      obj: mainObject,
      _objName: "mainObject",
      expected: mainObject["key2"]["key2_1"],
    },
    {
      path: ".key2.key2_1.key2_1_1",
      obj: mainObject,
      _objName: "mainObject",
      expected: mainObject["key2"]["key2_1"]["key2_1_1"],
    },
    {
      path: ".key2.key2_1.key2_1_2",
      obj: mainObject,
      _objName: "mainObject",
      expected: mainObject["key2"]["key2_1"]["key2_1_2"],
    },
    {
      path: ".key2.key2_1.key2_1_2.key2_1_2_1",
      obj: mainObject,
      _objName: "mainObject",
      expected: mainObject["key2"]["key2_1"]["key2_1_2"]["key2_1_2_1"],
    },
    {
      path: ".key3",
      obj: mainObject,
      _objName: "mainObject",
      expected: mainObject["key3"],
    },
    {
      path: ".key3.key3_1",
      obj: mainObject,
      _objName: "mainObject",
      expected: mainObject["key3"]["key3_1"],
    },
    {
      path: ".key3.key3_1.key3_1_1",
      obj: mainObject,
      _objName: "mainObject",
      expected: mainObject["key3"]["key3_1"]["key3_1_1"],
    },
    {
      path: ".key3.key3_1.key3_1_2",
      obj: mainObject,
      _objName: "mainObject",
      expected: mainObject["key3"]["key3_1"]["key3_1_2"],
    },
    {
      path: ".key4",
      obj: mainObject,
      _objName: "mainObject",
      expected: mainObject["key4"],
    },
    {
      path: ".key4[0]",
      obj: mainObject,
      _objName: "mainObject",
      expected: mainObject["key4"][0],
    },
    {
      path: ".key4[000]",
      obj: mainObject,
      _objName: "mainObject",
      expected: mainObject["key4"][0],
    },
    {
      path: ".key4[1].key4_1",
      obj: mainObject,
      _objName: "mainObject",
      expected: (mainObject["key4"]![1] as any)!["key4_1"],
    },
    {
      path: ".key4[001].key4_1",
      obj: mainObject,
      _objName: "mainObject",
      expected: (mainObject["key4"]![1] as any)["key4_1"],
    },
    {
      path: ".key4[1].key4_1[0]",
      obj: mainObject,
      _objName: "mainObject",
      expected: (mainObject["key4"]![1] as any)!["key4_1"][0],
    },
    {
      path: ".key4[1].key4_1[1].key4_1_1",
      obj: mainObject,
      _objName: "mainObject",
      expected: (mainObject["key4"]![1] as any)["key4_1"][1]["key4_1_1"],
    },
    {
      path: ".key4.1.key4_1[1].key4_1_1",
      obj: mainObject,
      _objName: "mainObject",
      expected: (mainObject["key4"]![1] as any)["key4_1"][1]["key4_1_1"],
    },
    {
      path: ".key4.1.key4_1[2].key4_1_1",
      obj: mainObject,
      _objName: "mainObject",
      expected: undefined,
    },
    {
      path: ".key_non",
      obj: mainObject,
      _objName: "mainObject",
      expected: undefined,
    },
    {
      path: "key1",
      obj: mainObject,
      _objName: "mainObject",
      expected: undefined,
    },

    {
      path: "[1].key1",
      obj: array,
      _objName: "array",
      expected: array[1]!["key1"],
    },
    {
      path: "[1].key1.key1_1",
      obj: array,
      _objName: "array",
      expected: array[1]!["key1"]!["key1_1"],
    },
    {
      path: "[1].key1.key1_1.key1_1_1",
      obj: array,
      _objName: "array",
      expected: array[1]!["key1"]!["key1_1"]!["key1_1_1"],
    },
    {
      path: "[1].key2",
      obj: array,
      _objName: "array",
      expected: array[1]!["key2"],
    },
    {
      path: "[1].key2.key2_1",
      obj: array,
      _objName: "array",
      expected: array[1]!["key2"]!["key2_1"],
    },
    {
      path: "[1].key2.key2_1.key2_1_1",
      obj: array,
      _objName: "array",
      expected: array[1]!["key2"]!["key2_1"]!["key2_1_1"],
    },
    {
      path: "[1].key2.key2_1.key2_1_2",
      obj: array,
      _objName: "array",
      expected: array[1]!["key2"]!["key2_1"]!["key2_1_2"],
    },
    {
      path: "[1].key2.key2_1.key2_1_2.key2_1_2_1",
      obj: array,
      _objName: "array",
      expected: array[1]!["key2"]!["key2_1"]!["key2_1_2"]!["key2_1_2_1"],
    },
    {
      path: "[1].key3",
      obj: array,
      _objName: "array",
      expected: array[1]!["key3"],
    },
    {
      path: "[1].key3.key3_1",
      obj: array,
      _objName: "array",
      expected: array[1]!["key3"]!["key3_1"],
    },
    {
      path: "[1].key3.key3_1.key3_1_1",
      obj: array,
      _objName: "array",
      expected: array[1]!["key3"]!["key3_1"]!["key3_1_1"],
    },
    {
      path: "[1].key3.key3_1.key3_1_2",
      obj: array,
      _objName: "array",
      expected: array[1]!["key3"]!["key3_1"]!["key3_1_2"],
    },
    {
      path: "[1].key4",
      obj: array,
      _objName: "array",
      expected: array[1]!["key4"],
    },
    {
      path: "[1].key4[0]",
      obj: array,
      _objName: "array",
      expected: array[1]!["key4"]![0],
    },
    {
      path: "[1].key4[000]",
      obj: array,
      _objName: "array",
      expected: array[1]!["key4"]![0],
    },
    {
      path: "[1].key4[1].key4_1",
      obj: array,
      _objName: "array",
      expected: (array[1]!["key4"]![1] as any as any)!["key4_1"],
    },
    {
      path: "[1].key4[001].key4_1",
      obj: array,
      _objName: "array",
      expected: (array[1]!["key4"]![1] as any as any)!["key4_1"],
    },
    {
      path: "[1].key4[1].key4_1[0]",
      obj: array,
      _objName: "array",
      expected: (array[1]!["key4"]![1] as any)!["key4_1"]![0],
    },
    {
      path: "[1].key4[1].key4_1[1].key4_1_1",
      obj: array,
      _objName: "array",
      expected: (array[1]!["key4"]![1] as any)!["key4_1"]![1]!["key4_1_1"],
    },
    {
      path: "[1].key4.1.key4_1[1].key4_1_1",
      obj: array,
      _objName: "array",
      expected: (array[1]!["key4"]![1] as any)!["key4_1"]![1]!["key4_1_1"],
    },
    {
      path: "[1].key4.1.key4_1[2].key4_1_1",
      obj: array,
      _objName: "array",
      expected: undefined,
    },
    {
      path: "[1].key_non",
      obj: array,
      _objName: "array",
      expected: undefined,
    },
  ] as {
    path: string;
    obj: object;
    _objName: string;
    expected: any;
  }[])(
    "getValue predicates for dot pathes: $_objName $path",
    ({ path, obj, _objName, expected }) => {
      expect(getValue(obj, path)).toEqual(expected);
    },
  );

  it.for([
    {
      path: ["key1"],
      obj: mainObject,
      _objName: "mainObject",
      expected: mainObject["key1"],
    },
    {
      path: ["key1", "key1_1"],
      obj: mainObject,
      _objName: "mainObject",
      expected: mainObject["key1"]!["key1_1"],
    },
    {
      path: ["key1", "key1_1", "key1_1_1"],
      obj: mainObject,
      _objName: "mainObject",
      expected: mainObject["key1"]!["key1_1"]!["key1_1_1"],
    },
    {
      path: ["key2"],
      obj: mainObject,
      _objName: "mainObject",
      expected: mainObject["key2"],
    },
    {
      path: ["key2", "key2_1"],
      obj: mainObject,
      _objName: "mainObject",
      expected: mainObject["key2"]!["key2_1"],
    },
    {
      path: ["key2", "key2_1", "key2_1_1"],
      obj: mainObject,
      _objName: "mainObject",
      expected: mainObject["key2"]!["key2_1"]!["key2_1_1"],
    },
    {
      path: ["key2", "key2_1", "key2_1_2"],
      obj: mainObject,
      _objName: "mainObject",
      expected: mainObject["key2"]!["key2_1"]!["key2_1_2"],
    },
    {
      path: ["key2", "key2_1", "key2_1_2", "key2_1_2_1"],
      obj: mainObject,
      _objName: "mainObject",
      expected: mainObject["key2"]!["key2_1"]!["key2_1_2"]!["key2_1_2_1"],
    },
    {
      path: ["key3"],
      obj: mainObject,
      _objName: "mainObject",
      expected: mainObject["key3"],
    },
    {
      path: ["key3", "key3_1"],
      obj: mainObject,
      _objName: "mainObject",
      expected: mainObject["key3"]!["key3_1"],
    },
    {
      path: ["key3", "key3_1", "key3_1_1"],
      obj: mainObject,
      _objName: "mainObject",
      expected: mainObject["key3"]!["key3_1"]!["key3_1_1"],
    },
    {
      path: ["key3", "key3_1", "key3_1_2"],
      obj: mainObject,
      _objName: "mainObject",
      expected: mainObject["key3"]!["key3_1"]!["key3_1_2"],
    },
    {
      path: ["key4"],
      obj: mainObject,
      _objName: "mainObject",
      expected: mainObject["key4"],
    },
    {
      path: ["key4", "0"],
      obj: mainObject,
      _objName: "mainObject",
      expected: mainObject["key4"]![0],
    },
    {
      path: ["key4", "1", "key4_1"],
      obj: mainObject,
      _objName: "mainObject",
      expected: (mainObject["key4"]![1] as any)["key4_1"],
    },
    {
      path: ["key4", 1, "key4_1", 0],
      obj: mainObject,
      _objName: "mainObject",
      expected: (mainObject["key4"]![1] as any)["key4_1"][0],
    },
    {
      path: ["key4", "1", "key4_1", "1", "key4_1_1"],
      obj: mainObject,
      _objName: "mainObject",
      expected: (mainObject["key4"]![1] as any)["key4_1"][1]["key4_1_1"],
    },
    {
      path: ["key4", 1, "key4_1", 1, "key4_1_1"],
      obj: mainObject,
      _objName: "mainObject",
      expected: (mainObject["key4"]![1] as any)["key4_1"][1]["key4_1_1"],
    },
    {
      path: ["key4", "1", "key4_1", 1, "key4_1_1"],
      obj: mainObject,
      _objName: "mainObject",
      expected: (mainObject["key4"]![1] as any)["key4_1"][1]["key4_1_1"],
    },
    {
      path: [keySym1],
      obj: mainObject,
      _objName: "mainObject",
      expected: mainObject[keySym1],
    },
    {
      path: [keySym1, 0],
      obj: mainObject,
      _objName: "mainObject",
      expected: mainObject[keySym1]![0],
    },
    {
      path: [keySym1, 1],
      obj: mainObject,
      _objName: "mainObject",
      expected: mainObject[keySym1]![1],
    },
    {
      path: [keySym1, 2],
      obj: mainObject,
      _objName: "mainObject",
      expected: mainObject[keySym1]![2] as any,
    },
    {
      path: [keySym1, 2, keySym2],
      obj: mainObject,
      _objName: "mainObject",
      expected: (mainObject[keySym1]![2] as any as any)![keySym2],
    },
    {
      path: [keySym1, 2, keySym2, keySym1],
      obj: mainObject,
      _objName: "mainObject",
      expected: (mainObject[keySym1]![2] as any)![keySym2]![keySym1],
    },
    {
      path: ["key_non"],
      obj: mainObject,
      _objName: "mainObject",
      expected: undefined,
    },

    {
      path: [1, "key1"],
      obj: array,
      _objName: "array",
      expected: array[1]!["key1"],
    },
    {
      path: [1, "key1", "key1_1"],
      obj: array,
      _objName: "array",
      expected: array[1]!["key1"]!["key1_1"],
    },
    {
      path: [1, "key1", "key1_1", "key1_1_1"],
      obj: array,
      _objName: "array",
      expected: array[1]!["key1"]!["key1_1"]!["key1_1_1"],
    },
    {
      path: [1, "key2"],
      obj: array,
      _objName: "array",
      expected: array[1]!["key2"],
    },
    {
      path: [1, "key2", "key2_1"],
      obj: array,
      _objName: "array",
      expected: array[1]!["key2"]!["key2_1"],
    },
    {
      path: [1, "key2", "key2_1", "key2_1_1"],
      obj: array,
      _objName: "array",
      expected: array[1]!["key2"]!["key2_1"]!["key2_1_1"],
    },
    {
      path: [1, "key2", "key2_1", "key2_1_2"],
      obj: array,
      _objName: "array",
      expected: array[1]!["key2"]!["key2_1"]!["key2_1_2"],
    },
    {
      path: [1, "key2", "key2_1", "key2_1_2", "key2_1_2_1"],
      obj: array,
      _objName: "array",
      expected: array[1]!["key2"]!["key2_1"]!["key2_1_2"]!["key2_1_2_1"],
    },
    {
      path: [1, "key3"],
      obj: array,
      _objName: "array",
      expected: array[1]!["key3"],
    },
    {
      path: [1, "key3", "key3_1"],
      obj: array,
      _objName: "array",
      expected: array[1]!["key3"]!["key3_1"],
    },
    {
      path: [1, "key3", "key3_1", "key3_1_1"],
      obj: array,
      _objName: "array",
      expected: array[1]!["key3"]!["key3_1"]!["key3_1_1"],
    },
    {
      path: [1, "key3", "key3_1", "key3_1_2"],
      obj: array,
      _objName: "array",
      expected: array[1]!["key3"]!["key3_1"]!["key3_1_2"],
    },
    {
      path: [1, "key4"],
      obj: array,
      _objName: "array",
      expected: array[1]!["key4"],
    },
    {
      path: [1, "key4", "0"],
      obj: array,
      _objName: "array",
      expected: array[1]!["key4"]![0],
    },
    {
      path: [1, "key4", "1", "key4_1"],
      obj: array,
      _objName: "array",
      expected: (array[1]!["key4"]![1] as any)!["key4_1"],
    },
    {
      path: [1, "key4", 1, "key4_1", 0],
      obj: array,
      _objName: "array",
      expected: (array[1]!["key4"]![1] as any)!["key4_1"][0],
    },
    {
      path: [1, "key4", "1", "key4_1", "1", "key4_1_1"],
      obj: array,
      _objName: "array",
      expected: ((array[1]!["key4"]![1] as any)!["key4_1"][1] as any)["key4_1_1"],
    },
    {
      path: [1, "key4", 1, "key4_1", 1, "key4_1_1"],
      obj: array,
      _objName: "array",
      expected: ((array[1]!["key4"]![1] as any)!["key4_1"][1] as any)["key4_1_1"],
    },
    {
      path: [1, "key4", "1", "key4_1", 1, "key4_1_1"],
      obj: array,
      _objName: "array",
      expected: ((array[1]!["key4"]![1] as any)!["key4_1"][1] as any)["key4_1_1"],
    },
    {
      path: [1, keySym1],
      obj: array,
      _objName: "array",
      expected: array[1]![keySym1],
    },
    {
      path: [1, keySym1, 0],
      obj: array,
      _objName: "array",
      expected: array[1]![keySym1]![0],
    },
    {
      path: [1, keySym1, 1],
      obj: array,
      _objName: "array",
      expected: array[1]![keySym1]![1],
    },
    {
      path: [1, keySym1, 2],
      obj: array,
      _objName: "array",
      expected: array[1]![keySym1]![2],
    },
    {
      path: [1, keySym1, 2, keySym2],
      obj: array,
      _objName: "array",
      expected: (array[1]![keySym1]![2] as any)![keySym2],
    },
    {
      path: [1, keySym1, 2, keySym2, keySym1],
      obj: array,
      _objName: "array",
      expected: (array[1]![keySym1]![2] as any)![keySym2]![keySym1],
    },
    {
      path: [1, "key_non"],
      obj: array,
      _objName: "array",
      expected: undefined,
    },
  ] as {
    path: string[];
    obj: object;
    _objName: string;
    expected: any;
  }[])(
    "getValue predicates for property-key: $_objName $path",
    ({ path, obj, _objName, expected }) => {
      expect(getValue(obj, path)).toEqual(expected);
    },
  );

  it.for([
    { value: null },
    { value: 1 },
    { value: "string" },
    { value: undefined },
    { value: Symbol() },
  ])("Return false for non objects", ({ value }) => {
    expect(getValue(value as unknown as object, ".key")).toBe(undefined);
  });
});