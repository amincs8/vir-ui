import { splitWordsPrepare } from "./split-words";

export function camelCase (value: string): string {
  return splitWordsPrepare(value)
    .toLowerCase()
    .replace(/\p{Z}+(\p{L})?/gu, (_, match: string) => (match ? match.toUpperCase() : ""))
    .replace(/^(.)/, (m) => m.toLowerCase());
}