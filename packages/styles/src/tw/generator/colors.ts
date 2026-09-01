import { isPlainObject } from "@vir/utils";
import { Theme } from "@/types";
import { DEFAULT_ROLE_NAME, generateVarLine } from "../utils";

export function generateColors (colors: Theme["colors"], themePrefix: Theme["prefix"]): string {
  let result = "";

  if (isPlainObject(colors)) {
    for (const colorName in colors) {
      const colorValue = isPlainObject(colors[colorName])
        ? colors[colorName]
        : {
          [DEFAULT_ROLE_NAME]: colors[colorName]!,
        };

      for (const scale in colorValue) {
        result = `${result}${generateVarLine({
          type: "color",
          name: [colorName, scale],
          value: colorValue[scale]!,
          themePrefix,
        })}\n`;
      }
    }
  }

  return result;
}