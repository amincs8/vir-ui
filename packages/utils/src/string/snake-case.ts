import { splitWordsPrepare } from "./split-words";

export function snakeCase (value: string): string {
  return splitWordsPrepare(value)
    .toLowerCase()
    .replace(/\p{Z}+/gu, "_");
}