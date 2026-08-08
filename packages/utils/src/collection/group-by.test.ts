import { describe, expect, it } from "vitest";
import { groupBy } from "./group-by";

describe("Collections: GroupBy", () => {
  describe("iterable", () => {
    it.for([
      {
        collection: [1, 2, 3, 4, 5, 6],
        iteratee: (value: number) => value % 2,
        expected: {
          0: [2, 4, 6],
          1: [1, 3, 5],
        },
      },
      {
        collection: ["apple", "apricot", "banana", "blueberry"],
        iteratee: (value: string) => value[0]!,
        expected: {
          a: ["apple", "apricot"],
          b: ["banana", "blueberry"],
        },
      },
    ])("groups values", ({ collection, iteratee, expected }) => {
      expect(groupBy(collection as any, iteratee as any)).toEqual(expected);
    });

    it("groups a Set", () => {
      const collection = new Set([1, 2, 3, 4]);

      expect(groupBy(collection, (value) => value % 2)).toEqual({
        0: [2, 4],
        1: [1, 3],
      });
    });

    it("groups a generator", () => {
      function* values () {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
      }

      expect(groupBy(values(), (value) => value % 2)).toEqual({
        0: [2, 4],
        1: [1, 3],
      });
    });
  });

  describe("plain object", () => {
    it.for([
      {
        collection: {
          alice: { name: "Alice", age: 20 },
          bob: { name: "Bob", age: 30 },
          charlie: { name: "Charlie", age: 20 },
        },
        iteratee: (value: { age: number }) => value.age,
        expected: {
          20: [
            { name: "Alice", age: 20 },
            { name: "Charlie", age: 20 },
          ],
          30: [{ name: "Bob", age: 30 }],
        },
      },
    ])("groups object values", ({ collection, iteratee, expected }) => {
      expect(groupBy(collection, iteratee)).toEqual(expected);
    });
  });

  describe("edge cases", () => {
    it("returns an empty object for an empty array", () => {
      expect(groupBy([], (value: never) => value)).toEqual({});
    });

    it("returns an empty object for an empty object", () => {
      expect(groupBy({}, (value: never) => value)).toEqual({});
    });

    it("creates a group for every unique key", () => {
      expect(groupBy([1, 2, 3], (value) => value)).toEqual({
        1: [1],
        2: [2],
        3: [3],
      });
    });

    it("preserves the original values", () => {
      const values = [
        { id: 1, type: "a" },
        { id: 2, type: "b" },
        { id: 3, type: "a" },
      ];

      const result = groupBy(values, (value) => value.type);

      expect(result.a).toEqual([values[0], values[2]]);
      expect(result.b).toEqual([values[1]]);
    });
  });
});