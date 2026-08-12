import { isFunction, isIterable, isPlainObject } from "../type-guards";
import { PlainObject } from "../type-guards/type-guards";

export function reduce<T = unknown, R = unknown> (
  values: Iterable<T> | PlainObject<T>,
  iteratee: (result: R, value: T, key: PropertyKey | number) => R,
  accumulator: R,
): R {
  let result = accumulator;

  if (isFunction(iteratee)) {
    if (isIterable(values)) {
      let index = 0;
      for (const value of values) {
        result = iteratee(result, value, index++);
      }
    } else if (isPlainObject(values)) {
      for (const key in values) {
        result = iteratee(result, values[key]!, key);
      }
    }
  }

  return result;
}