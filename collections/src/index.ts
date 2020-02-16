import { sort } from "./Sorter";
import { NumberCollection } from "./NumberCollection";
import { StringCollection } from "./StringCollection";

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

const sortableString = new StringCollection(
  "ljnfjhbfub fjhfkgb kbgdfjkbfjhbvfhjvhjvfhjngknbg gjgnbj08748656452fhbemjnbrbhrgh98773526453e53653487498vfhfvhjfvjhfv".split(
    ""
  )
);
const ascString = sort(sortableString).join("");

console.log(JSON.stringify(ascString));
console.log(
  `Collection length=${sortableString.length}, compareCount=${sortableString.compareCount}`
);

const stringCollection = new StringCollection(["b", "a", "x"]);
const sortedString = sort(stringCollection);

console.log(JSON.stringify(sortedString));
console.log(
  `Collection length=${stringCollection.length}, compareCount=${stringCollection.compareCount}`
);
