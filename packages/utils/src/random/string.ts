import { isFunction, isPositive, isStringNonEmpty } from "../type-guards";
import { randomInteger } from "./integer";

function mergeModes (...funct: (() => string)[]): string {
  const index = randomInteger(0, funct.length - 1);

  return funct[index]!();
}

const MODES = {
  lowercase: () => String.fromCharCode(randomInteger(97, 122)),
  uppercase: () => String.fromCharCode(randomInteger(65, 90)),
  numeric: () => String.fromCharCode(randomInteger(48, 57)),

  alphabet: () => mergeModes(MODES.lowercase, MODES.uppercase),
  "lowercase-numberic": () => mergeModes(MODES.lowercase, MODES.numeric),
  "uppercase-numberic": () => mergeModes(MODES.uppercase, MODES.numeric),
  alphanumberic: () => mergeModes(MODES.alphabet, MODES.numeric),
};

export function randomString(length: number, mode: keyof typeof MODES): string;
export function randomString(length: number, chars: string): string;

export function randomString (length = 8, chars?: keyof typeof MODES | (string & {})): string {
  let result = "";

  if (isPositive(length) && isStringNonEmpty(chars)) {
    let randFunc: () => string;

    if (isFunction(MODES[chars as keyof typeof MODES])) {
      randFunc = MODES[chars as keyof typeof MODES];
    } else {
      const characters = Array.from(chars);
      randFunc = () => {
        const index = randomInteger(0, characters.length - 1);
        return characters[index]!;
      };
    }

    for (let i = 0; i < length; i++) {
      result += randFunc();
    }
  }

  return result;
}