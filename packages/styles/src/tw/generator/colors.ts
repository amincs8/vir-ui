import { isPlainObject, isStringNonEmpty, kebabCase } from "@vir/utils";
import { Theme } from "@/types";
import { COLOR_VARIABLE_PREFIX, DEFAULT_ROLE_NAME } from "./consts";

export function generateColors (colors: Theme["colors"]): string {
  let result = "";

  if (isPlainObject(colors)) {
    for (const colorName in colors) {
      const colorValue = colors[colorName];
      if (isPlainObject(colorValue)) {
        for (const scale in colorValue) {
          if (scale === DEFAULT_ROLE_NAME) {
            result += `${COLOR_VARIABLE_PREFIX}${colorName}: ${colorValue[scale]};\n`;
          } else {
            result += `${COLOR_VARIABLE_PREFIX}${colorName}-${kebabCase(scale)}: ${colorValue[scale]};\n`;
          }
        }
      } else if (isStringNonEmpty(colorValue)) {
        result += `${COLOR_VARIABLE_PREFIX}${colorName}: ${colorValue};\n`;
      }
    }
  }

  return result;
}