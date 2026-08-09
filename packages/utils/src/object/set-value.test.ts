import { describe, expect, it } from "vitest";
import { setValue } from "./set-value";

describe("Object: setValue", () => {
  it.for([
    {
      path: ".key1",
      value: "value1",
      expected: {
        key1: "value1",
      },
    },
    {
      path: ".key1.key1_1",
      value: "value1_1",
      expected: {
        key1: {
          key1_1: "value1_1",
        },
      },
    },
    {
      path: ["key1", "key1_1"],
      value: "value1_1",
      expected: {
        key1: {
          key1_1: "value1_1",
        },
      },
    },
  ])("set value at path: $path", ({ path, value, expected }) => {
    const object = {};

    const result = setValue(object, path, value);

    expect(result).toBe(value);
    expect(object).toEqual(expected);
  });

  it("updates an existing value", () => {
    const object = {
      key1: {
        key1_1: "value1_1",
      },
      key2: "value2",
    };

    const result = setValue(object, ".key1.key1_1", "value1_1_updated");
    const result2 = setValue(object, ".key2.key2_1.key2_1_1", "value2_1_1_updated");

    expect(result).toBe("value1_1_updated");
    expect(result2).toBe("value2_1_1_updated");
    expect(object).toEqual({
      key1: {
        key1_1: "value1_1_updated",
      },
      key2: {
        key2_1: {
          key2_1_1: "value2_1_1_updated",
        },
      },
    });
  });

  it("creates missing intermediate objects", () => {
    const object: Record<string, unknown> = {};

    setValue(object, ".key1.key1_1.key1_1_1", "value1_1_1");

    expect(object).toEqual({
      key1: {
        key1_1: {
          key1_1_1: "value1_1_1",
        },
      },
    });
  });

  it("sets a symbol key", () => {
    const key = Symbol();
    const object: Record<PropertyKey, unknown> = {};

    setValue(object, [key], "value");
    expect(object[key]).toBe("value");
  });

  it("sets a numeric key", () => {
    const object: Record<PropertyKey, unknown> = {};

    setValue(object, [1], "value");

    expect(object[1]).toBe("value");
  });

  it("returns undefined for an empty path", () => {
    const object = {};

    const result = setValue(object, [], "value");

    expect(result).toBeUndefined();
    expect(object).toEqual({});
  });

  it("sets undefined as a value", () => {
    const object = {
      key: "value",
    };

    const result = setValue(object, ".key", undefined);

    expect(result).toBeUndefined();
    expect(object).toEqual({
      key: undefined,
    });
  });

  it.for([
    { value: null },
    { value: 1 },
    { value: "string" },
    { value: undefined },
    { value: Symbol() },
  ])("Return false for non objects", ({ value }) => {
    expect(setValue(value as unknown as object, ".key", "value")).toBe(undefined);
  });
});