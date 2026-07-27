import { AnyFunction, AnyFunctionAsync } from "./type-guards";

export function isFunction<T extends AnyFunction = AnyFunction> (value: unknown): value is T {
  return typeof value === "function";
}

export function isFunctionAsync<T extends AnyFunctionAsync = AnyFunctionAsync> (value: unknown): value is T {
  return (
    isFunction(value) &&
    value.constructor.name === "AsyncFunction"
  );
}