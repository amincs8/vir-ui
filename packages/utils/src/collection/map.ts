import { isFunction, isIterable, isPlainObject } from "../type-guards";
import { PlainObject } from "../type-guards/type-guards";

export function map<T = unknown, R = unknown> (values: Iterable<T> | PlainObject<T>, callback: (value: T) => R): R[] {
  const result: R[] = [];

  if (isFunction(callback)) {
    if (isIterable(values)) {
      for (const value of values) {
        result.push(callback(value));
      }
    } else if (isPlainObject(values)) {
      for (const key in values) {
        result.push(callback(values[key] as T));
      }
    }
  }

  return result;
}