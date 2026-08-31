import { isArray, isStringNonEmpty } from "@vir/utils";
import { VAR_PREFIX, VAR_SEPARATOR } from "./consts";

type Arg = string | undefined;

export function generateVarName(...values: Arg[]): string;
export function generateVarName(values: Arg[]): string;

export function generateVarName (...values: [Arg[]] | Arg[]): string {
  const parts = isArray(values[0]) ? values[0] : values;
  let result = VAR_PREFIX;

  if (parts.length > 0) {
    result = `${result}${parts[0]}`;
  }

  for (let i = 1; i < parts.length; ++i) {
    if (isStringNonEmpty(parts[i])) {
      result = `${result}${VAR_SEPARATOR}${parts[i]}`;
    }
  }

  return result;
}