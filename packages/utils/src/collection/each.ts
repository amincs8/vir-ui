import { isFunction, isIterable, isPlainObject } from "../type-guards";
import { PlainObject } from "../type-guards/type-guards";
import { IterableCallback, PlainObjectCallback } from "./collection";

const BREAK_VALUE = false;

export function each<T = unknown>(values: Iterable<T>, callback: IterableCallback<T>): void;
export function each<T extends PlainObject>(values: T, callback: PlainObjectCallback<T>): void;

export function each (
  values: Iterable<unknown> | PlainObject,
  callback: IterableCallback | PlainObjectCallback,
): void {
  let index = 0;
  if (!isFunction(callback)) {
    return;
  }

  if (isIterable(values)) {
    for (const value of values) {
      const res = (callback as IterableCallback)(value, index++);

      if (res === BREAK_VALUE) {
        break;
      }
    }
  } else if (isPlainObject(values)) {
    for (const key in values) {
      const res = (callback as PlainObjectCallback)(key, values[key] as [keyof PlainObject], index++);

      if (res === BREAK_VALUE) {
        break;
      }
    }
  }
}

export const forEach = each;