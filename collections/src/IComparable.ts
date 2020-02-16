export type CompareResult = -1 | 0 | 1;

export interface IComparable<T> {
  compareTo: (obj: T) => CompareResult;
}

export interface ISortableCollection<T> {
  array: Array<T>;
  compare(left: T, right: T): CompareResult;
}
