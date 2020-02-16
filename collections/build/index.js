"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumberCollection_1 = require("./NumberCollection");
var StringCollection_1 = require("./StringCollection");
var collection = new NumberCollection_1.NumberCollection([
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
var sorted = Sorter_1.sort(collection);
console.log(JSON.stringify(sorted));
console.log("Collection length=" + collection.length + ", compareCount=" + collection.compareCount);
var sortableString = new StringCollection_1.StringCollection("ljnfjhbfub fjhfkgb kbgdfjkbfjhbvfhjvhjvfhjngknbg gjgnbj08748656452fhbemjnbrbhrgh98773526453e53653487498vfhfvhjfvjhfv".split(""));
var ascString = Sorter_1.sort(sortableString).join("");
console.log(JSON.stringify(ascString));
console.log("Collection length=" + sortableString.length + ", compareCount=" + sortableString.compareCount);
var stringCollection = new StringCollection_1.StringCollection(["b", "a", "x"]);
var sortedString = Sorter_1.sort(stringCollection);
console.log(JSON.stringify(sortedString));
console.log("Collection length=" + stringCollection.length + ", compareCount=" + stringCollection.compareCount);
