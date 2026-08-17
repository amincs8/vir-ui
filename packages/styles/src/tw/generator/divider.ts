import { isUndefined } from "@vir/utils";
import { Theme } from "../../types";

const KEYS = [
  "width",
  "style",
  "color",
] as const satisfies readonly (keyof Theme["divider"])[];

export function generateDivider (divider: Theme["divider"], prefix: Theme["prefix"]): string {
  let dividerSection = "";

  for (const key of KEYS) {
    if (!isUndefined(divider[key])) {
      dividerSection += `--divider-${prefix}-${key}: ${divider[key]};\n`;
    }
  }

  return dividerSection;
}