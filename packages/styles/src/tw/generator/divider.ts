import { isUndefined } from "@vir/utils";
import { Theme } from "@/types";
import { generateThemeValue } from "@/tw/utils";
import { DIVIDER_PREFIX, generateVarName } from "../utils";
import { VarType } from "../utils/utils";

type KeyType = keyof Theme["divider"];

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
};
export function generateDivider (divider: Theme["divider"], themePrefix: Theme["prefix"]): string {
  let dividerSection = "";

  for (const key in KEYS) {
    const keyValue = divider[key as keyof Theme["divider"]];
    const keyInfo = KEYS[key as keyof Theme["divider"]];

    if (!isUndefined(keyValue)) {
      const generatedValue =
        keyInfo.type === ""
          ? keyValue
          : generateThemeValue({
            value: keyValue,
            type: keyInfo.type,
            themePrefix,
          });
      dividerSection += `${generateVarName(DIVIDER_PREFIX, themePrefix, key)}: ${generatedValue};\n`;
    }
  }

  return dividerSection;
}