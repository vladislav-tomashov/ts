import { sort } from "./Sorter";
import { NumberCollection } from "./NumberCollection";

const collection = new NumberCollection([
  10,
  0,
  -5,
  -5,
  0,
  300,
  9,
  65476754,
  8,
  10,
  10,
  10,
  10,
  0
]);
const sorted = sort(collection);

console.log(JSON.stringify(sorted));
console.log(
  `Collection length=${collection.length}, compareCount=${collection.compareCount}`
);
