import { isArrayNonEmpty, isPlainObject, isTrue } from "../type-guards";
import { isStringNonEmpty } from "../type-guards/string";
import { ClassList } from "./classlists";

function flatten (input: ClassList): string {
  let result: string = "";

  if (isStringNonEmpty(input)) {
    result = input;
  } else if (isArrayNonEmpty<ClassList>(input)) {
    for (const inp of input) {
      const newResult = flatten(inp);
      if (newResult.length === 0) {
        continue;
      }

      if (result.length > 0) {
        result += " ";
      }

      result += newResult;
    }
  } else if (isPlainObject(input)) {
    for (const key in input) {
      if (Object.hasOwn(input, key) && isTrue(input[key])) {
        if (result.length > 0) {
          result += " ";
        }
        result += key;
      }
    }
  }

  return result;
}

export function cn (...inputs: ClassList[]) {
  return flatten(inputs);
}