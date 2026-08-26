import { toSize } from "@/private-utils";
import { Theme } from "@/types";
import { isFunction } from "@vir/utils";

const KEYS: {
  key: string;
  prefix: string;
  valueConvertor?: (value: any) => string;
}[] = [
  {
    key: "fontFamily",
    prefix: "--font",
  },
  {
    key: "fontSize",
    prefix: "--text",
    valueConvertor: toSize,
  },
  {
    key: "fontWeight",
    prefix: "--font-weight",
  },
  {
    key: "lineHeight",
    prefix: "--leading",
  },
  {
    key: "letterSpacing",
    prefix: "--tracking",
  },
];

export function generateTypography (typography: Theme["typography"], prefix: Theme["prefix"]): string {
  let result = "";

  for (const key of KEYS) {
    const value = isFunction(key.valueConvertor)
      ? key.valueConvertor(typography[key.key as keyof Theme["typography"]])
      : typography[key.key as keyof Theme["typography"]];
    result += `${key.prefix}-${prefix}: ${value};\n`;
  }

  return result;
}