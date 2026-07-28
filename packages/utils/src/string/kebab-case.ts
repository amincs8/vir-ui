import { splitWordsPrepare } from "./split-words";

export function kebabCase (value: string): string {
  return splitWordsPrepare(value)
    .toLowerCase()
    .replace(/\p{Z}+/gu, "-");
}