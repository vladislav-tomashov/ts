"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var sort = function (collection, ascending) {
    if (ascending === void 0) { ascending = true; }
    var array = collection.array, compare = collection.compare;
    var length = array.length;
    var coef = ascending ? 1 : -1;
    if (!length) {
        return array;
    }
    var pivot = array[0];
    var smaller = [];
    var bigger = [];
    for (var i = 1; i < length; i++) {
        var element = array[i];
        if (compare(pivot, element) === coef) {
            smaller.push(element);
        }
        else {
            bigger.push(element);
        }
    }
    var sortedSmaller = sort({ array: smaller, compare: compare });
    var sortedBigger = sort({ array: bigger, compare: compare });
    return __spreadArrays(sortedSmaller, [pivot], sortedBigger);
};
exports.sort = sort;
