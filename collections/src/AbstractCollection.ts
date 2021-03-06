import { ISortableCollection, CompareResult } from "./IComparable";

export class AbstractCollection<T> implements ISortableCollection<T> {
  private _counter = 0;

  constructor(public array: T[]) {}

  get compareCount() {
    return this._counter;
  }

  get length() {
    return this.array.length;
  }

  resetCompareCount() {
    this._counter = 0;
  }

  compare = (left: T, right: T): CompareResult => {
    this._counter++;

    if (left === right) {
      return 0;
    }

    if (left < right) {
      return -1;
    }

    return 1;
  };
}
