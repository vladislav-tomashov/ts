"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberCollection = /** @class */ (function () {
    function NumberCollection(array) {
        var _this = this;
        this.array = array;
        this._counter = 0;
        this.compare = function (left, right) {
            _this._counter++;
            if (left === right) {
                return 0;
            }
            if (left < right) {
                return -1;
            }
            return 1;
        };
    }
    Object.defineProperty(NumberCollection.prototype, "compareCount", {
        get: function () {
            return this._counter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberCollection.prototype, "length", {
        get: function () {
            return this.array.length;
        },
        enumerable: true,
        configurable: true
    });
    NumberCollection.prototype.resetCompareCOunt = function () {
        this._counter = 0;
    };
    return NumberCollection;
}());
exports.NumberCollection = NumberCollection;
