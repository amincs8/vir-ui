import { isPlainObject } from "@vir/utils";
import { Theme } from "@/types";
import { DEFAULT_ROLE_NAME } from "./consts";
import { generateColorVarLine } from "../utils/color";

export function generateColors (colors: Theme["colors"], themePrefix: string): string {
  let result = "";

  if (isPlainObject(colors)) {
    for (const colorName in colors) {
      const colorValue = isPlainObject(colors[colorName])
        ? colors[colorName]
        : {
          [DEFAULT_ROLE_NAME]: colors[colorName]!,
        };

      for (const scale in colorValue) {
        result = `${result}${generateColorVarLine({
          colorValue: colorValue[scale]!,
          colorScale: scale,
          colorName: colorName,
          themePrefix,
        })}\n`;
      }
    }
  }

  return result;
}