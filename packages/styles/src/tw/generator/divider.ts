import { isUndefined } from "@vir/utils";
import { Theme } from "@/types";
import { generateThemeValue, DIVIDER_PREFIX, generateVarName } from "@/tw/utils";
import { VarType } from "@/tw/utils/utils.d";

type KeyType = keyof Theme["divider"];

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
};
export function generateDivider (divider: Theme["divider"], themePrefix: Theme["prefix"]): string {
  let dividerSection = "";

  for (const key in KEYS) {
    const keyValue = divider[key as keyof Theme["divider"]];
    const keyInfo = KEYS[key as keyof Theme["divider"]];

    if (!isUndefined(keyValue)) {
      const generatedValue = generateThemeValue({
        value: keyValue,
        type: keyInfo.type,
        themePrefix,
      });
      dividerSection += `${generateVarName(themePrefix, DIVIDER_PREFIX, key)}: ${generatedValue};\n`;
    }
  }

  return dividerSection;
}