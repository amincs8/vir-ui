import { numberToColorHex } from "@/private-utils/color";
import { VarType } from "./utils";

export const DOT_REPLACE_REGEX = /(?<!\\)\./g;
export const SLASH_DOT_REPLACE_REGEX = /\\\./g;
export const THEME_DOT_PREFIX = "..";
export const GLOBAL_DOT_PREFIX = ".";
export const VAR_PREFIX = "--";
export const VAR_SEPARATOR = "-";
export const DEFAULT_ROLE_NAME = "DEFAULT";
export const BORDER_PREFIX = "border";
export const DIVIDER_PREFIX = "divider";
export const OUTLINE_PREFIX = "outline";
export const UTILITY_PREFIX = "@utility";

function addPx (value: number): string {
  return `${value}px`;
}

export const TypePrefix: Record<
  VarType,
  {
    numberFn?: (value: number) => string;
    prefix: string;
  }
> = {
  color: {
    numberFn: numberToColorHex,
    prefix: "color",
  },
  spacing: {
    numberFn: addPx,
    prefix: "spacing",
  },
  "font-size": {
    numberFn: addPx,
    prefix: "text",
  },
  "font-family": {
    prefix: "font",
  },
  breakpoint: {
    prefix: "breakpoint",
    numberFn: addPx,
  },
  container: {
    prefix: "container",
    numberFn: addPx,
  },
  "font-weight": {
    prefix: "font-weight",
  },
  "line-height": {
    prefix: "leading",
  },
  "letter-spacing": {
    prefix: "tracking",
  },
  "border-radius": {
    prefix: "radius",
    numberFn: addPx,
  },
};