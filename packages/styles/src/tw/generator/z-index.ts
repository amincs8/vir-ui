import { Theme } from "@/types";
import { UTILITY_PREFIX } from "@/tw/utils";

export function generateZIndex (zIndex: Theme["zIndex"]): string {
  let zIndexSection = "";

  for (const key in zIndex) {
    zIndexSection += `${UTILITY_PREFIX} z-${key} { z-index: ${zIndex[key as keyof typeof zIndex]}; }\n`;
  }

  return zIndexSection;
}