import { ISortableCollection } from "./IComparable";

const sort = <T>(
  collection: ISortableCollection<T>,
  ascending: boolean = true
): Array<T> => {
  const { array, compare } = collection;
  const { length } = array;
  const coef = ascending ? 1 : -1;

  if (!length) {
    return array;
  }

  const pivot = array[0];
  const smaller: T[] = [];
  const bigger: T[] = [];

  for (let i = 1; i < length; i++) {
    const element = array[i];

    if (compare(pivot, element) === coef) {
      smaller.push(element);
    } else {
      bigger.push(element);
    }
  }

  const sortedSmaller = sort({ array: smaller, compare });
  const sortedBigger = sort({ array: bigger, compare });

  return [...sortedSmaller, pivot, ...sortedBigger];
};

export { sort };
