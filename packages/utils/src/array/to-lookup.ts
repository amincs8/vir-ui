import { getValue } from "../object";
import { isDotPath } from "../object/_object";
import type { DotPath } from "../object/object";
import { isFunction, isIterable, isObject } from "../type-guards";

type Lookup<V = unknown> = Record<PropertyKey, V>;
type LookupIteratee<T = unknown, V = unknown> = (value: T) => [PropertyKey, V];
type LookupKeyValue<V = unknown> = {
  $key: DotPath;
  $value: V;
};

export function toLookup<T>(values: Iterable<T>): Lookup<true>;
export function toLookup<T>(values: Iterable<T>, iteratee: DotPath): Lookup<T>;
export function toLookup<T, V>(values: Iterable<T>, iteratee: LookupIteratee<T, V>): Lookup<V>;
export function toLookup<T, V>(values: Iterable<T>, iteratee: LookupKeyValue<V>): Lookup<V>;

export function toLookup<T, V = true> (
  values: Iterable<T>,
  iteratee: LookupIteratee<T, V> | LookupKeyValue<V> | DotPath | V = true as V,
): Lookup<V> {
  const result: Lookup<V> = {};

  if (isIterable(values)) {
    let itFunc: LookupIteratee<T, V>;

    if (isFunction(iteratee)) {
      itFunc = iteratee as LookupIteratee<T, V>;
    } else if (isDotPath(iteratee)) {
      itFunc = (value: unknown) => [getValue(value as object, iteratee) as PropertyKey, value as V];
    } else if (isObject(iteratee)) {
      itFunc = (value: unknown) => [
        getValue(value as object, iteratee.$key) as PropertyKey,
        iteratee.$value as V,
      ];
    } else {
      itFunc = (value: unknown) => [value as PropertyKey, iteratee as V];
    }

    for (const value of values) {
      const [key, mappedValue] = itFunc(value);

      result[key] = mappedValue;
    }
  }

  return result;
}