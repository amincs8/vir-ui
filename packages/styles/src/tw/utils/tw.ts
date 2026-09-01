import { Arrayable, isArray, isFunction, isNumber, isString, isStringNonEmpty } from "@vir/utils";
import { generateThemeValueOptions, VarType } from "./utils";
import { Theme } from "@/types";
import {
  TypePrefix,
  DOT_REPLACE_REGEX,
  SLASH_DOT_REPLACE_REGEX,
  THEME_DOT_PREFIX,
  GLOBAL_DOT_PREFIX,
  VAR_PREFIX,
  NOTHING_DOT_PREFIX,
  VAR_SEPARATOR,
} from "./consts";

function replaceDots (str: string, prefix: string, index: number): string {
  const pr = isStringNonEmpty(prefix) ? `${prefix}${VAR_SEPARATOR}` : "";
  return `${VAR_PREFIX}${pr}${str.slice(index).replace(DOT_REPLACE_REGEX, VAR_SEPARATOR).replace(SLASH_DOT_REPLACE_REGEX, ".")}`;
}
function toVarName (type: VarType, value: string, themePrefix: Theme["prefix"]): string {
  const typePrefix = TypePrefix[type]?.prefix ?? "";
  let result: string;

  if (value.startsWith(NOTHING_DOT_PREFIX)) {
    result = replaceDots(value, "", NOTHING_DOT_PREFIX.length);
  } else if (value.startsWith(THEME_DOT_PREFIX)) {
    result = replaceDots(value, themePrefix, THEME_DOT_PREFIX.length);
  } else if (value.startsWith(GLOBAL_DOT_PREFIX)) {
    result = replaceDots(value, typePrefix, GLOBAL_DOT_PREFIX.length);
  } else {
    result = value;
  }

  return result;
}
function _toVarStatement (
  type: VarType,
  value: string[],
  index: number,
  themePrefix: string,
): string {
  const varName = toVarName(type, value[index]!.trim(), themePrefix);
  let result = "";

  if (varName.startsWith(VAR_PREFIX)) {
    const lastIndex = value.length - 1;
    if (index === lastIndex) {
      result += `var(${varName})`;
    } else if (index < lastIndex) {
      const nextVar = _toVarStatement(type, value, index + 1, themePrefix);

      if (nextVar.length > 0) {
        result += `var(${varName}, ${nextVar})`;
      } else {
        result += `var(${varName})`;
      }
    }
  } else {
    result = varName;
  }

  return result;
}
function toVarStatement (
  type: VarType,
  value: Arrayable<string>,
  themePrefix: Theme["prefix"],
): string {
  return _toVarStatement(type, isArray(value) ? value : [value], 0, themePrefix);
}

export function generateThemeValue (options: generateThemeValueOptions): string {
  let result = "";

  if (isString(options.value) || isArray(options.value)) {
    result = toVarStatement(options.type, options.value, options.themePrefix);
  } else if (isNumber(options.value)) {
    if (isFunction(TypePrefix[options.type].numberFn)) {
      result = TypePrefix[options.type].numberFn!(options.value);
    } else {
      result = options.value.toString();
    }
  }

  return result;
}