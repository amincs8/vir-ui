import { EmptyString, NonEmptyString } from "./type-guards";

export function isString (value: unknown): value is string {
  return typeof value === "string";
}

export function isStringEmpty (value: unknown): value is EmptyString {
  return isString(value) && value.length === 0;
}

export function isStringNonEmpty (value: unknown): value is NonEmptyString {
  return isString(value) && value.length > 0;
}