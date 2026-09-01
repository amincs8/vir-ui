import { isUndefined } from "@vir/utils";
import { Theme } from "@/types";
import { BORDER_PREFIX, generateVarLine, generateVarName, generateThemeValue } from "@/tw/utils";
import { VarType } from "@/tw/utils/utils.d";

type KeyType = keyof Theme["border"];

const KEYS: Record<KeyType, { type: VarType }> = {
  width: {
    type: "spacing",
  },
  style: {
    type: "none",
  },
  color: {
    type: "color",
  },
  radius: {
    type: "border-radius",
  },
};

export function generateBorder (border: Theme["border"], themePrefix: Theme["prefix"]): string {
  let borderSection = "";

  for (const key in KEYS) {
    const keyValue = border[key as KeyType];
    const keyInfo = KEYS[key as KeyType];

    if (!isUndefined(keyValue)) {
      const generatedValue = generateThemeValue({
        value: keyValue,
        type: keyInfo.type,
        themePrefix,
      });
      borderSection += `${generateVarName(themePrefix, BORDER_PREFIX, key)}: ${generatedValue};\n`;
    }
  }

  if (!isUndefined(border.radius)) {
    borderSection += `${generateVarLine({
      type: KEYS["radius"].type,
      value: border.radius,
      name: themePrefix,
      themePrefix,
    })}\n`;
  }

  return borderSection;
}