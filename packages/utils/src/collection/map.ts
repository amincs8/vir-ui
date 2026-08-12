import { isFunction, isIterable, isPlainObject } from "../type-guards";
import { PlainObject } from "../type-guards/type-guards";

export function map<T = unknown, R = unknown> (values: Iterable<T> | PlainObject<T>, iteratee: (value: T) => R): R[] {
  const result: R[] = [];

  if (isFunction(iteratee)) {
    if (isIterable(values)) {
      for (const value of values) {
        result.push(iteratee(value));
      }
    } else if (isPlainObject(values)) {
      for (const key in values) {
        result.push(iteratee(values[key] as T));
      }
    }
  }

  return result;
}