import { isArray, isStringNonEmpty, kebabCase } from "@vir/utils";
import { DEFAULT_ROLE_NAME, TypePrefix, VAR_PREFIX, VAR_SEPARATOR } from "./consts";
import { generateThemeValue } from "./tw";
import { generateThemeValueOptions } from "./utils";
import { Theme } from "@/types";

type Arg = string | undefined;

interface GenerateVarLineOptions {
  type: keyof typeof TypePrefix;
  name: string | string[];
  value: generateThemeValueOptions["value"];
  themePrefix: Theme["prefix"];
}

export function generateVarName(...values: Arg[]): string;
export function generateVarName(values: Arg[]): string;

export function generateVarName (...values: [Arg[]] | Arg[]): string {
  const parts = isArray(values[0]) ? values[0] : values;
  let result = VAR_PREFIX;

  if (parts.length > 0) {
    result = `${result}${parts[0]}`;
  }

  for (let i = 1; i < parts.length; ++i) {
    if (isStringNonEmpty(parts[i]) && parts[i] !== DEFAULT_ROLE_NAME) {
      result = `${result}${VAR_SEPARATOR}${kebabCase(parts[i]! as string)}`;
    }
  }

  return result;
}

export function generateVarLine (options: GenerateVarLineOptions): string {
  const generatedValue = generateThemeValue({
    value: options.value,
    type: options.type,
    themePrefix: options.themePrefix,
  });

  const varName = generateVarName([
    TypePrefix[options.type].prefix,
    ...(isArray(options.name) ? options.name : [options.name]),
  ]);

  return `${varName}: ${generatedValue || "\"\""};`;
}