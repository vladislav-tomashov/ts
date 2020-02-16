"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractCollection = /** @class */ (function () {
    function AbstractCollection(array) {
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
    Object.defineProperty(AbstractCollection.prototype, "compareCount", {
        get: function () {
            return this._counter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractCollection.prototype, "length", {
        get: function () {
            return this.array.length;
        },
        enumerable: true,
        configurable: true
    });
    AbstractCollection.prototype.resetCompareCount = function () {
        this._counter = 0;
    };
    return AbstractCollection;
}());
exports.AbstractCollection = AbstractCollection;
