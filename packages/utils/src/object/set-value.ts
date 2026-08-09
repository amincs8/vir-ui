import { isArray, isObject, isString } from "../type-guards";
import { pathToArray } from "./_object";
import { DotPath } from "./object";

export function setValue (obj: object, path: DotPath | PropertyKey[], value: unknown): unknown {
  let result: unknown = undefined;

  if (isObject(obj)) {
    const arrPath: PropertyKey[] = isString(path)
      ? pathToArray(path)
      : isArray(path as PropertyKey[])
        ? path
        : [];

    if (arrPath.length > 0) {
      const lastKey = arrPath.pop();
      let currentObj: object | undefined = obj;

      for (const key of arrPath) {
        if (!isObject(currentObj[key as keyof typeof currentObj])) {
          (currentObj as Record<PropertyKey, unknown>)[key] = {};
        }

        currentObj = (currentObj as Record<PropertyKey, unknown>)[key] as object;
      }

      if (isObject(currentObj)) {
        result = (currentObj[lastKey as keyof typeof currentObj] as unknown) = value;
      }
    }
  }

  return result;
}