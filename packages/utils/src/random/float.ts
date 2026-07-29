export function randomFloat (min: number, max: number): number {
  let result = NaN;

  if (Number.isFinite(min) && Number.isFinite(max)) {
    if (min > max) {
      [min, max] = [max, min];
    }
    result = min + (max - min) * Math.random();
  }

  return result;
}