import { isIterable, isPlainObject } from "../type-guards";
import type { PlainObject } from "../type-guards/type-guards";

type Grouped<T> = Record<PropertyKey, T[]>;

export function groupBy<T>(
  collection: Iterable<T>,
  iteratee: (value: T) => PropertyKey,
): Grouped<T>;

export function groupBy<T>(
  collection: Record<string, T>,
  iteratee: (value: T) => PropertyKey,
): Grouped<T>;

export function groupBy<T = unknown> (
  collection: Iterable<T> | PlainObject,
  iteratee: (value: T) => PropertyKey,
): Grouped<T> {
  const result: Grouped<T> = {};

  const add = (value: T): void => {
    const key = iteratee(value);

    (result[key] ??= []).push(value);
  };

  if (isIterable(collection)) {
    for (const value of collection) {
      add(value);
    }
  } else if (isPlainObject(collection)) {
    for (const value of Object.values(collection)) {
      add(value as T);
    }
  }

  return result;
}