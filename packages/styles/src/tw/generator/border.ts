import { isUndefined } from "@vir/utils";
import { Theme } from "@/types";
import { BORDER_PREFIX, generateVarLine, generateVarName } from "../utils";
import { generateThemeValue } from "@/tw/utils";
import { VarType } from "../utils/utils";

type KeyType = keyof Theme["border"];

const KEYS: Record<KeyType, { type: VarType | "" }> = {
  width: {
    type: "spacing",
  },
  style: {
    type: "",
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
      const generatedValue =
        keyInfo.type === ""
          ? keyValue
          : generateThemeValue({
            value: keyValue,
            type: keyInfo.type,
            themePrefix,
          });
      borderSection += `${generateVarName(BORDER_PREFIX, themePrefix, key)}: ${generatedValue};\n`;
    }
  }

  if (!isUndefined(border.radius)) {
    borderSection += `${generateVarLine({
      type: KEYS["radius"].type as VarType,
      value: border.radius,
      name: themePrefix,
      themePrefix,
    })}\n`;
  }

  return borderSection;
}