import { isString, isStringNonEmpty } from "../type-guards";

export function splitWordsPrepare (value: string): string {
  return isString(value)
    ? value
      .replace(/([\p{Ll}\p{N}])(\p{Lu})/gu, "$1 $2")
      .replace(/(\p{Lu})(\p{Lu}\p{Ll})/gu, "$1 $2")
      .replace(/[^\p{L}\p{N}]+/gu, " ")
      .trim()
    : "";
}

export function splitWords (value: string): string[] {
  const preparedValue = splitWordsPrepare(value);
  return isStringNonEmpty(preparedValue)
    ? preparedValue
      .split(/\s+/)
    : [];
}