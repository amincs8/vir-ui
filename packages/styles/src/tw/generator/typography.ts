import { generateVarLine } from "@/tw/utils";
import { Theme } from "@/types";
import { isArray, isUndefined, reduce, trim } from "@vir/utils";
import { VarType } from "@/tw/utils/utils.d";

const KEYS: {
  key: string;
  type: VarType;
  valueConvertor?: (value: any) => string;
}[] = [
  {
    key: "fontFamily",
    type: "font-family",
  },
  {
    key: "fontSize",
    type: "font-size",
  },
  {
    key: "fontWeight",
    type: "font-weight",
  },
  {
    key: "lineHeight",
    type: "line-height",
  },
  {
    key: "letterSpacing",
    type: "letter-spacing",
  },
];

export function generateTypography (
  typography: Theme["typography"],
  themePrefix: Theme["prefix"],
): string {
  let result = "";

  for (const key of KEYS) {
    const value = typography[key.key as keyof Theme["typography"]];
    if (!isUndefined(value)) {
      result = `${result}${generateVarLine({
        type: key.type,
        name: themePrefix,
        themePrefix,
        value: isArray(value) ? trim(reduce(value, (res, val, _) => `${res}"${val}", `, ""), " ,") : value,
      })}\n`;
    }
  }

  return result;
}