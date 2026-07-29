export type AnyFunction<T = unknown> = (...args: any[]) => T;

export type AnyFunctionAsync<T = unknown> = (...args: any[]) => Promise<T>;

export type EmptyString = {
  readonly __brand: "EmptyString";
} & string;
export type NonEmptyString = {
  readonly __brand: "NonEmptyString";
} & string;

export type PlainObject = Record<string | number | symbol, unknown>