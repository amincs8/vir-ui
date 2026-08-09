import { isArray, isObject, isString } from "../type-guards";
import { pathToArray } from "./_object";
import { DotPath } from "./object";

export function getValue (obj: object, path: DotPath | PropertyKey[]): unknown {
  let result: unknown = undefined;

  if (isObject(obj)) {
    const arrPath: PropertyKey[] = isString(path)
      ? pathToArray(path)
      : isArray(path as PropertyKey[])
        ? path
        : [];

    let currentObj = obj;

    for (const key of arrPath) {
      if (!isObject(currentObj) || !Object.hasOwn(currentObj, key)) {
        result = undefined;
        break;
      }

      result = currentObj = currentObj[key as keyof typeof currentObj];
    }
  }

  return result;
}