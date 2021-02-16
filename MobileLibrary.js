"use strict";
exports.__esModule = true;
exports.MobileLibrary = void 0;
var MobileLibrary = /** @class */ (function () {
    function MobileLibrary(name, location, mobile) {
        this.name = name;
        this.location = location;
        this.mobile = mobile;
        this.totalPrice = this.totalPriceCalculation();
    }
    MobileLibrary.prototype.getName = function () {
        return this.name;
    };
    MobileLibrary.prototype.setName = function (name) {
        this.name = name;
    };
    MobileLibrary.prototype.getLocation = function () {
        return this.location;
    };
    MobileLibrary.prototype.setLocation = function (location) {
        this.location = location;
    };
    MobileLibrary.prototype.getMobile = function () {
        return this.mobile;
    };
    MobileLibrary.prototype.setMobile = function (mobile) {
        this.mobile = mobile;
    };
    MobileLibrary.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    MobileLibrary.prototype.setTotalPrice = function (totalPrice) {
        this.totalPrice = totalPrice;
    };
    MobileLibrary.prototype.totalPriceCalculation = function () {
        var precio = 0;
        for (var i = 0; i < this.getMobile().length; i++) {
            precio += this.getMobile()[i].getPrice();
        }
        return precio;
    };
    MobileLibrary.prototype.printLibrary = function () {
        console.log("This is all my mobiles:");
        for (var i = 0; i < this.getMobile().length; i++) {
            this.mobile[i].mostrarDatos();
        }
        console.log("Price Overall: " + this.getTotalPrice());
    };
    return MobileLibrary;
}());
exports.MobileLibrary = MobileLibrary;
