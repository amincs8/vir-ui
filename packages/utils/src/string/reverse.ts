import { isString } from "../type-guards";

export function reverse (value: string) {
  return isString(value) ? [...value].reverse().join("") : "";
}