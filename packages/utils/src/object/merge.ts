import { isPlainObject, isUndefined } from "../type-guards";
import type { PlainObject } from "../type-guards/type-guards";

export function merge<D extends PlainObject, O extends PlainObject> (
  defaults: D,
  overrides: O,
): PlainObject {
  const result: PlainObject = {};

  if (!isPlainObject(defaults) || !isPlainObject(overrides)) {
    return result;
  }

  for (const key in defaults) {
    const defaultValue = defaults[key];
    const overrideValue = overrides[key];

    if (isUndefined(overrideValue)) {
      result[key] = defaultValue;
    } else if (isPlainObject(defaultValue) && isPlainObject(overrideValue)) {
      result[key] = merge(defaultValue, overrideValue);
    } else {
      result[key] = overrideValue;
    }
  }

  for (const key in overrides) {
    if (!Object.hasOwn(result, key)) {
      result[key] = overrides[key];
    }
  }

  return result;
}