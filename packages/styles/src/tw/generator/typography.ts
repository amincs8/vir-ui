import { generateThemeValue } from "@/tw/utils";
import { Theme } from "@/types";
import { isArray, isUndefined, kebabCase } from "@vir/utils";

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

export function generateTypography (
  typography: Theme["typography"],
  themePrefix: Theme["prefix"],
): string {
  let result = "";

  for (const key of KEYS) {
    if (!isUndefined(typography[key.key as keyof Theme["typography"]])) {
      let value: string;

      if (isArray(typography[key.key as keyof Theme["typography"]])) {
        const values: string[] = [];
        for (const val of typography[key.key as keyof Theme["typography"]] as string[]) {
          values.push(
            generateThemeValue({
              value: val!,
              type: kebabCase(key.key) as any,
              themePrefix,
            }),
          );
        }

        value = values.join(", ");
      } else {
        value = generateThemeValue({
          value: typography[key.key as keyof Theme["typography"]]!,
          type: kebabCase(key.key) as any,
          themePrefix,
        });
      }

      result += `${key.prefix}-${themePrefix}: ${value};\n`;
    }
  }

  return result;
}