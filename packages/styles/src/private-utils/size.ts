import { isNumber } from "@vir/utils";

export function toSize (size: string | number): string {
  return isNumber(size)
    ? `${size}px`
    : size;
}