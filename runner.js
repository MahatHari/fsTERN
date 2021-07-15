var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Runner = /** @class */ (function () {
    function Runner(typeName) {
        this.typeName = typeName;
    }
    Runner.prototype.run = function () {
        Runner.lastRunTypeName = this.typeName;
    };
    return Runner;
}());
var a = new Runner('a');
var b = new Runner('b');
b.run();
a.run();
console.log(Runner.lastRunTypeName);
var linda = {
    name: 'linda',
    id: 2,
    isManager: false,
    getUniqueId: function () {
        var uniqueId = linda.id + '-' + linda.name;
        if (!linda.isManager) {
            return 'emp-' + uniqueId;
        }
        return uniqueId;
    }
};
console.log(linda.getUniqueId());
var pam = {
    name: 'pam',
    id: 1,
    isManager: true,
    getUniqueId: function () {
        var uniqueId = pam.id + '-' + pam.name;
        if (pam.isManager) {
            return 'mgr-' + uniqueId;
        }
        return uniqueId;
    }
};
console.log(pam.getUniqueId());
var Vehicle = /** @class */ (function () {
    function Vehicle(wheelCount) {
        this.wheelCount = wheelCount;
    }
    Vehicle.prototype.showNumberOfWheels = function () {
        console.log("moved " + this.wheelCount + " miles");
    };
    return Vehicle;
}());
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        return _super.call(this, 2) || this;
    }
    return Motorcycle;
}(Vehicle));
var Automobile = /** @class */ (function (_super) {
    __extends(Automobile, _super);
    function Automobile() {
        return _super.call(this, 4) || this;
    }
    return Automobile;
}(Vehicle));
var motorcycle = new Motorcycle();
motorcycle.showNumberOfWheels();
var autoMobile = new Automobile();
autoMobile.showNumberOfWheels();
