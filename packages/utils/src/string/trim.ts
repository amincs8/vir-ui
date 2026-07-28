import { isStringNonEmpty } from "../type-guards";
import { escapeRegExp } from "./escape";

const DEFAULT_TRIM = "[\\p{Z}\\s]";

export function trim (value: string, chars?: string): string {
  const pattern = chars ? `[${escapeRegExp(chars)}]` : DEFAULT_TRIM;
  const regex = new RegExp(`^${pattern}+|${pattern}+$`, "gu");

  return isStringNonEmpty(value)
    ? value.replace(regex, "")
    : "";
}

export function trimStart (value: string, chars?: string): string {
  const pattern = chars ? `[${escapeRegExp(chars)}]` : DEFAULT_TRIM;
  const regex = new RegExp(`^${pattern}+`, "gu");

  return isStringNonEmpty(value)
    ? value.replace(regex, "")
    : "";
}

export function trimEnd (value: string, chars?: string): string {
  const pattern = chars ? `[${escapeRegExp(chars)}]` : DEFAULT_TRIM;
  const regex = new RegExp(`${pattern}+$`, "gu");

  return isStringNonEmpty(value)
    ? value.replace(regex, "")
    : "";
}