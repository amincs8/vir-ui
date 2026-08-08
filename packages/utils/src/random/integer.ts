import { randomFloat } from "./float";

export function randomInteger (min: number, max: number): number {
  let result = NaN;

  if (Number.isFinite(min) && Number.isFinite(max)) {
    min = Math.ceil(min);
    max = Math.floor(max);

    if (min > max) {
      [min, max] = [max, min];
    }

    result = Math.floor(randomFloat(min, max + 1));
  }


  return result;
}