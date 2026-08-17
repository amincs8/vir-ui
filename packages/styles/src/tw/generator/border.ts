import { isUndefined } from "@vir/utils";
import { Theme } from "../../types";

const KEYS = [
  "width",
  "style",
  "color",
  "radius",
] as const satisfies readonly (keyof Theme["border"])[];

export function generateBorder (border: Theme["border"], prefix: Theme["prefix"]): string {
  let borderSection = "";

  for (const key of KEYS) {
    if (!isUndefined(border[key])) {
      borderSection += `--border-${prefix}-${key}: ${border[key]};\n`;
    }
  }

  return borderSection;
}