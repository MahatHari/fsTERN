var IntefaceNamespace;
(function (IntefaceNamespace) {
    var Motorcycle = /** @class */ (function () {
        function Motorcycle(name) {
            this.name = name;
        }
        Motorcycle.prototype.updateWheelCount = function (newWheeelCount) {
            this.wheelCount = newWheeelCount;
            console.log("Automobile has " + this.wheelCount + " miles");
        };
        Motorcycle.prototype.showNumberOfWheels = function () {
            console.log("moved Automobile " + this.wheelCount + " miles");
        };
        Motorcycle.prototype.getFullName = function () {
            return 'MC-' + this.name;
        };
        return Motorcycle;
    }());
    var moto = new Motorcycle('beginner-cycle');
    console.log(moto.getFullName());
})(IntefaceNamespace || (IntefaceNamespace = {}));
