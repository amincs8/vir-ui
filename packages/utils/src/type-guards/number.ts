export function isBigInt (value: unknown): value is bigint {
  return typeof value === "bigint";
}

export function isNumber (value: unknown): value is number {
  return typeof value === "number";
}

export function isNegative (value: unknown): value is number {
  return isNumber(value) && Number.isFinite(value) && value < 0;
}

export function isPositive (value: unknown): value is number {
  return isNumber(value) && Number.isFinite(value) && value > 0;
}

export function isZero (value: unknown): value is number {
  return isNumber(value) && Number.isFinite(value) && value === 0;
}