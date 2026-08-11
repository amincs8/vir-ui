export function isNull (value: unknown): value is null {
  return value === null;
}

export function isNonNullable <T> (value: T): value is NonNullable<T> {
  return value !== null && value !== undefined;
}