import { ISortableCollection, CompareResult } from "./IComparable";

export class NumberCollection implements ISortableCollection<number> {
  private _counter = 0;

  constructor(public array: number[]) {}

  get compareCount() {
    return this._counter;
  }

  get length() {
    return this.array.length;
  }

  resetCompareCOunt() {
    this._counter = 0;
  }

  compare = (left: number, right: number): CompareResult => {
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
