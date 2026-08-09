import { isArray, isObject, isString } from "../type-guards";
import { pathToArray } from "./_object";
import { DotPath } from "./object";

export function hasKey (obj: object, path: DotPath | PropertyKey[]): boolean {
  let result = false;

  if (isObject(obj)) {
    const arrPath: PropertyKey[] = isString(path)
      ? pathToArray(path)
      : isArray(path as PropertyKey[])
        ? path
        : [];

    let currentObj = obj;

    for (const key of arrPath) {
      if (Object.hasOwn(currentObj, key)) {
        result = true;
        currentObj = currentObj[key as keyof typeof currentObj];
      } else {
        result = false;
        break;
      }
    }
  }

  return result;
}