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

export function randomSecureInteger (min: number, max: number): number {
  let result = NaN;

  if (Number.isFinite(min) && Number.isFinite(max)) {
    min = Math.ceil(min);
    max = Math.floor(max);

    if (min > max) {
      [min, max] = [max, min];
    }

    const range = max - min + 1;
    const maxUint32 = 0x100000000;

    const limit = Math.floor(maxUint32 / range) * range;

    const buffer = new Uint32Array(1);

    let random: number;

    do {
      crypto.getRandomValues(buffer);
      random = buffer[0]!;
    } while (random >= limit);

    result = min + (random % range);
  }


  return result;
}