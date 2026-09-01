import { isUndefined } from "@vir/utils";
import { Theme } from "@/types";
import { OUTLINE_PREFIX, generateVarName, generateThemeValue } from "@/tw/utils";
import { VarType } from "@/tw/utils/utils";

type KeyType = keyof Theme["outline"];

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
  offset: {
    type: "",
  },
};

export function generateOutline (outline: Theme["outline"], themePrefix: Theme["prefix"]): string {
  let outlineSection = "";

  for (const key in KEYS) {
    const keyValue = outline[key as KeyType];
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
      outlineSection += `${generateVarName(OUTLINE_PREFIX, themePrefix, key)}: ${generatedValue};\n`;
    }
  }

  return outlineSection;
}