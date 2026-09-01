import { isArray, isStringNonEmpty, kebabCase, Numberish } from "@vir/utils";
import { DEFAULT_ROLE_NAME, TypePrefix, VAR_PREFIX, VAR_SEPARATOR } from "./consts";
import { generateTailwindThemeValue } from "@/private-utils";

type Arg = string | undefined;

interface GenerateVarLineOptions {
  type: keyof typeof TypePrefix;
  name: string | string[];
  value: Numberish;
  themePrefix: string;
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
  const generatedValue = generateTailwindThemeValue({
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