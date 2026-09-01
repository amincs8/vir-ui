import { Border, ColorValue, Divider, Outline, Theme } from "@/types";
import { generateColors } from "./colors";
import { isPlainObject } from "@vir/utils";
import { generateBorder } from "./border";
import { generateDivider } from "./divider";
import { generateOutline } from "./outline";
import { BORDER_PREFIX, DIVIDER_PREFIX, OUTLINE_PREFIX, SURFACE_PREFIX, VAR_SEPARATOR } from "../utils";

export function generateSurface (surface: Theme["surface"], themePrefix: Theme["prefix"]): string {
  let result = "";

  result += generateColors(
    {
      surface: surface.surface as unknown as ColorValue,
      surfaceVariant: surface.surfaceVariant as unknown as ColorValue,
    },
    themePrefix,
  );

  const border: Border = isPlainObject(surface.border) ? surface.border : {
    width: `...${themePrefix}${VAR_SEPARATOR}${BORDER_PREFIX}.width`,
    color: `...${themePrefix}${VAR_SEPARATOR}${BORDER_PREFIX}.color`,
    style: `...${themePrefix}${VAR_SEPARATOR}${BORDER_PREFIX}.style`,
    radius: `...${themePrefix}${VAR_SEPARATOR}${BORDER_PREFIX}.radius`,
  };
  const outline: Outline = isPlainObject(surface.outline) ? surface.outline : {
    width: `...${themePrefix}${VAR_SEPARATOR}${OUTLINE_PREFIX}.width`,
    color: `...${themePrefix}${VAR_SEPARATOR}${OUTLINE_PREFIX}.color`,
    style: `...${themePrefix}${VAR_SEPARATOR}${OUTLINE_PREFIX}.style`,
    offset: `...${themePrefix}${VAR_SEPARATOR}${OUTLINE_PREFIX}.offset`,
  };
  const divider: Divider = isPlainObject(surface.divider) ? surface.divider : {
    width: `...${themePrefix}${VAR_SEPARATOR}${DIVIDER_PREFIX}.width`,
    color: `...${themePrefix}${VAR_SEPARATOR}${DIVIDER_PREFIX}.color`,
    style: `...${themePrefix}${VAR_SEPARATOR}${DIVIDER_PREFIX}.style`,
  };

  result += generateBorder(border, `${themePrefix}${VAR_SEPARATOR}${SURFACE_PREFIX}`);
  result += generateOutline(outline, `${themePrefix}${VAR_SEPARATOR}${SURFACE_PREFIX}`);
  result += generateDivider(divider, `${themePrefix}${VAR_SEPARATOR}${SURFACE_PREFIX}`);

  return result;
}