export function isIterable<T = unknown> (value: unknown): value is Iterable<T> {
  return value != null && typeof (value as any)[Symbol.iterator] === "function";
}

export function isAsyncIterable<T = unknown> (value: unknown): value is AsyncIterable<T> {
  return value != null && typeof (value as any)[Symbol.asyncIterator] === "function";
}

export function isIterator<T = unknown> (value: unknown): value is Iterator<T> {
  return (
    value !== null && typeof value === "object" && typeof (value as Iterator<T>).next === "function"
  );
}