export const minBy = <T>(array: T[], cb: (item: T) => number): T | undefined => {
  if (!Array.isArray(array) || array.length === 0) {
    return undefined;
  }

  return array.reduce((prev, curr) => {
    const prevValue = cb(prev);
    const currValue = cb(curr);

    if (currValue < prevValue) {
      return curr;
    }
    return prev;
  });
};

export function maxBy<T>(array: T[], cb: (item: T) => number): T | undefined {
  if (!Array.isArray(array) || array.length === 0) {
    return undefined;
  }

  return array.reduce((prev, curr) => {
    const prevValue = cb(prev);
    const currValue = cb(curr);

    if (currValue > prevValue) {
      return curr;
    }
    return prev;
  });
}
