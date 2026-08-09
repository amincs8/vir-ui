
const DOT_PATH_REGEX = /^(?:\.[\p{L}\p{N}_$]+|\[\d+\])+$/u;

export function pathToArray (path: string): PropertyKey[] {
  const result: PropertyKey[] = [];

  if (DOT_PATH_REGEX.test(path)) {
    const splited = path.replace(/\[0*(\d+)\]/g, ".$1").split(".");
    for (const value of splited) {
      if (value) {
        result.push(value);
      }
    }
  }

  return result;
}