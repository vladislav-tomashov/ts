"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumberCollection_1 = require("./NumberCollection");
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
