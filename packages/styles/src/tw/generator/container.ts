import { Theme } from "@/types";
import { CONTAINER_CLASS_NAME, DEFAULT_ROLE_NAME, UTILITY_PREFIX } from "../utils";
import { isArray, isNumber, isStringNonEmpty, Numberish } from "@vir/utils";

function breakpoint (value: Numberish): string {
  let result = "";

  if (isNumber(value)) {
    result = `[${value}px]:`;
  } else if (isStringNonEmpty(value) && value !== DEFAULT_ROLE_NAME) {
    result = `${value}:`;
  }

  return result;
}

export function generateContainer (
  container: Theme["container"],
  _themePrefix: Theme["prefix"],
): string {
  let classes = "";
  const paddingX: [Numberish, number][] = isNumber(container.paddingX)
    ? [[DEFAULT_ROLE_NAME, container.paddingX]]
    : isArray(container.paddingX)
      ? container.paddingX
      : [];
  const paddingY: [Numberish, number][] = isNumber(container.paddingY)
    ? [[DEFAULT_ROLE_NAME, container.paddingY]]
    : isArray(container.paddingY)
      ? container.paddingY
      : [];

  if (container.center === true) {
    classes = "mx-auto";
  }

  for (const key of paddingX) {
    if (isArray(key) && key.length === 2) {
      classes = `${classes} ${breakpoint(key[0])}px-${key[1]}`;
    }
  }

  for (const key of paddingY) {
    if (isArray(key) && key.length === 2) {
      classes = `${classes} ${breakpoint(key[0])}py-${key[1]}`;
    }
  }

  return `${UTILITY_PREFIX} ${CONTAINER_CLASS_NAME} { @apply ${classes.trim()} }`;
}