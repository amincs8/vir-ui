import { describe, expect, it, vi } from "vitest";
import { each, forEach } from "./each";

describe("Coleesction: Each", () => {
  it.for([
    { value: [1, 2, 3]},
    { value: new Set([1, 2, 3]) },
    {
      value: new Map([
        ["key1", "value1"],
        ["key2", "value2"],
      ]),
    },
    { value: "abc" },
  ])("iterates $value", ({ value }) => {
    const fn = vi.fn();

    each(value, fn);

    expect(fn).toHaveBeenCalledTimes([...value].length);
  });

  it.for([
    { value: [1, 2, 3], expected: [1, 2, 3]},
    { value: new Set([1, 2, 3]), expected: [1, 2, 3]},
    {
      value: new Map([
        ["key1", "value1"],
        ["key2", "value2"],
      ]),
      expected: [
        ["key1", "value1"],
        ["key2", "value2"],
      ],
    },
    { value: "abc", expected: ["a", "b", "c"]},
  ])("passes value and index for $value", ({ value, expected }) => {
    const fn = vi.fn();

    each(value, fn);

    (expected as []).forEach((val, index) => {
      expect(fn).toHaveBeenNthCalledWith(index + 1, val, index);
    });
  });

  it.for([{ value: { a: 1, b: 2 }}, { value: { name: "Name", age: 25 }}])(
    "iterates object $value",
    ({ value }) => {
      const fn = vi.fn();

      forEach(value, fn);

      expect(fn).toHaveBeenCalledTimes(Object.keys(value).length);

      Object.entries(value).forEach(([key, val], index) => {
        expect(fn).toHaveBeenNthCalledWith(index + 1, key, val, index);
      });
    },
  );

  it.for([{ value: [1, 2, 3]}, { value: new Set([1, 2, 3]) }, { value: { a: 1, b: 2, c: 3 }}])(
    "stops when callback returns false for $value",
    ({ value }) => {
      const fn = vi.fn(() => false);

      each(value as never, fn);

      expect(fn).toHaveBeenCalledTimes(1);
    },
  );

  it.for([{ value: null }, { value: undefined }, { value: 123 }, { value: true }])(
    "does nothing for $value",
    ({ value }) => {
      const fn = vi.fn();

      each(value as never, fn);

      expect(fn).not.toHaveBeenCalled();
    },
  );
});