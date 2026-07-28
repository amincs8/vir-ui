import { isString } from "../type-guards";

export function capitalize (value: string) {
  return isString(value)
    ? value.toLowerCase().replace(/^\p{L}/gu, (match) => match.toUpperCase())
    : "";
}