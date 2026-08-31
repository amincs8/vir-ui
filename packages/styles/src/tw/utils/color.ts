import { generateTailwindThemeValue } from "@/private-utils";
import { Numberish } from "@vir/utils";
import { DEFAULT_ROLE_NAME, TypePrefix } from "./consts";
import { generateVarName } from "./var";

interface GenerateColorVarNameOptions {
  colorName: string;
  colorScale: Numberish;
  colorValue: Numberish;
  themePrefix: string;
}

export function generateColorVarName ({
  colorName,
  colorScale,
  colorValue,
  themePrefix,
}: GenerateColorVarNameOptions): string {
  const value = generateTailwindThemeValue({
    value: colorValue,
    type: "color",
    themePrefix,
  });

  const varName = generateVarName(
    TypePrefix.color.prefix,
    colorName,
    colorScale === DEFAULT_ROLE_NAME ? "" : String(colorScale),
  );

  return `${varName}: ${value};`;
}