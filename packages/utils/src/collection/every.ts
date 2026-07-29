import { isFunction, isIterable } from "../type-guards";
import { IterableCallback } from "./collection";

export function every<T = unknown> (values: Iterable<T>, callback: IterableCallback<T, boolean>): boolean {
  let result = false;
  let index = 0;

  if (isIterable(values) && isFunction(callback)) {
    result = true;
    for (const value of values) {
      result = callback(value, index++);

      if (!result) {
        break;
      }
    }
  }

  return result;
}