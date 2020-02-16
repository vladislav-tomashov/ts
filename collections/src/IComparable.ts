export type CompareResult = -1 | 0 | 1;

export interface ISortableCollection<T> {
  array: Array<T>;
  compare(left: T, right: T): CompareResult;
}
