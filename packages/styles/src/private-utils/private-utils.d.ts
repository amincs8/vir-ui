import { Numberish } from "@vir/utils";

export type VarType =
  | "color"
  | "spacing"
  | "font-size"
  | "font-family"
  | "breakpoint"
  | "container"
  | "font-weight"
  | "line-height"
  | "letter-spacing"
  | "border-radius";

export interface GenerateTailwindThemeValueOptions {
  type: VarType;
  value: Numberish | string[];
  themePrefix: string;
}