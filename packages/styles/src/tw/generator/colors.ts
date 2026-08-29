import { isPlainObject, isStringNonEmpty, kebabCase } from "@vir/utils";
import { Theme } from "@/types";
import { COLOR_VARIABLE_PREFIX, DEFAULT_ROLE_NAME } from "./consts";
import { generateTailwindThemeValue } from "@/private-utils";

export function generateColors (colors: Theme["colors"], themePrefix: string): string {
  let result = "";

  if (isPlainObject(colors)) {
    for (const colorName in colors) {
      const colorValue = colors[colorName];
      if (isPlainObject(colorValue)) {
        for (const scale in colorValue) {
          const value = generateTailwindThemeValue({
            value: colorValue[scale]!,
            type: "color",
            themePrefix,
          });
          if (scale === DEFAULT_ROLE_NAME) {
            result += `${COLOR_VARIABLE_PREFIX}${colorName}: ${value};\n`;
          } else {
            result += `${COLOR_VARIABLE_PREFIX}${colorName}-${kebabCase(scale)}: ${value};\n`;
          }
        }
      } else if (isStringNonEmpty(colorValue)) {
        result += `${COLOR_VARIABLE_PREFIX}${colorName}: ${generateTailwindThemeValue({
          value: colorValue!,
          type: "color",
          themePrefix,
        })};\n`;
      }
    }
  }

  return result;
}