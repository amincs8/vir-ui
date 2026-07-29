import { PlainObject } from "./type-guards";

export function isObject (value: unknown): value is object {
  return typeof value === "object" && value !== null;
}


export function isObjectOfType<T extends object> (
  value: unknown,
  prototype: new (...args: any[]) => T,
): value is T {
  return (
    isObject(value) &&
    value instanceof prototype
  );
}

export function isPlainObject (value: unknown): value is PlainObject {
  return (
    value !== null &&
    typeof value === "object" &&
    Object.getPrototypeOf(value) === Object.prototype
  );
}