import { Arrayable, isArray, isFunction, isNumber, isString } from "@vir/utils";
import { numberToColorHex } from "./color";
import { GenerateTailwindThemeValueOptions, VarType } from "./private-utils";

const DOT_REPLACE_REGEX = /(?<!\\)\./g;
const SLASH_DOT_REPLACE_REGEX = /\\\./g;
const THEME_DOT_PREFIX = "..";
const GLOBAL_DOT_PREFIX = ".";
const VAR_PREFIX = "--";

function addPx (value: number): string {
  return `${value}px`;
}

const TypePrefix: Record<
  VarType,
  {
    numberFn?: (value: number) => string;
    prefix: string;
  }
> = {
  color: {
    numberFn: numberToColorHex,
    prefix: "color",
  },
  spacing: {
    numberFn: addPx,
    prefix: "spacing",
  },
  "font-size": {
    numberFn: addPx,
    prefix: "text",
  },
  "font-family": {
    prefix: "font",
  },
  breakpoint: {
    prefix: "breakpoint",
    numberFn: addPx,
  },
  container: {
    prefix: "container",
    numberFn: addPx,
  },
  "font-weight": {
    prefix: "font-weight",
  },
  "line-height": {
    prefix: "leading",
  },
  "letter-spacing": {
    prefix: "tracking",
  },
  "border-radius": {
    prefix: "radius",
    numberFn: addPx,
  },
};

function replaceDots (str: string, prefix: string, index: number): string {
  return `${VAR_PREFIX}${prefix}-${str.slice(index).replace(DOT_REPLACE_REGEX, "-").replace(SLASH_DOT_REPLACE_REGEX, ".")}`;
}
function toVarName (type: VarType, value: string, themePrefix: string): string {
  const typePrefix = TypePrefix[type]?.prefix ?? "";
  let result: string;

  if (value.startsWith(THEME_DOT_PREFIX)) {
    result = replaceDots(value, themePrefix, 2);
  } else if (value.startsWith(GLOBAL_DOT_PREFIX)) {
    result = replaceDots(value, typePrefix, 1);
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
function toVarStatement (type: VarType, value: Arrayable<string>, themePrefix: string): string {
  return _toVarStatement(type, isArray(value) ? value : [value], 0, themePrefix);
}

export function generateTailwindThemeValue (options: GenerateTailwindThemeValueOptions): string {
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