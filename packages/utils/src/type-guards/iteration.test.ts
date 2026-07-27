import { describe, expect, it } from "vitest";
import { isAsyncIterable, isIterable, isIterator } from "./iteration";

describe("Type Guards: Iteration", () => {
  it.for([
    {
      value: "string",
      expectations: {
        isIterable: true,
        isAsyncIterable: false,
      },
    },
    {
      value: "",
      expectations: {
        isIterable: true,
        isAsyncIterable: false,
      },
    },
    {
      value: new Set(),
      expectations: {
        isIterable: true,
        isAsyncIterable: false,
      },
    },
    {
      value: new Map(),
      expectations: {
        isIterable: true,
        isAsyncIterable: false,
      },
    },
    {
      value: [],
      expectations: {
        isIterable: true,
        isAsyncIterable: false,
      },
    },
    {
      value: [1, 2, 3],
      expectations: {
        isIterable: true,
        isAsyncIterable: false,
      },
    },
    {
      value: (async function* () {
        yield 1;
      })(),
      expectations: {
        isIterable: false,
        isAsyncIterable: true,
      },
    },
    {
      value: {
        async *[Symbol.asyncIterator] (): AsyncGenerator<number> {
          yield 1;
        },
      },
      expectations: {
        isIterable: false,
        isAsyncIterable: true,
      },
    },

    { value: undefined, expected: false },
    { value: 100, expected: false },
    { value: false, expected: false },
    { value: true, expected: false },
    { value: {}, expected: false },
    { value: { foo: true }, expected: false },
    { value: new Date(), expected: false },
    { value: () => 0, expected: false },
  ])("iteration predicates for $value", ({ value, expectations, expected }) => {
    const isIter = isIterable(value);
    expect(isIter).toBe(expected ?? expectations.isIterable);
    expect(isAsyncIterable(value)).toBe(expected ?? expectations.isAsyncIterable);
    if (isIter) {
      expect(isIterator(value[Symbol.iterator]())).toBe(true);
    }
  });
});