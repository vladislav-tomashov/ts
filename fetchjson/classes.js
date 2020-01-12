var Vehicle = /** @class */ (function () {
    function Vehicle(color) {
        this.color = color;
    }
    Vehicle.prototype.honk = function () {
        console.log("beep");
    };
    return Vehicle;
}());
var car = new Vehicle("orange");
