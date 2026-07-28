import { isString } from "../type-guards";

export function escapeRegExp (value: string): string {
  return isString(value) ? value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") : "";
}