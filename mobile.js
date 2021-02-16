"use strict";
exports.__esModule = true;
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, model, trademark, sdSize, color, is5g, cameraNumber, price) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5g = is5g;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.setName = function (name) {
        this.name = name;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.setModel = function (model) {
        this.model = model;
    };
    Mobile.prototype.getTrademark = function () {
        return this.trademark;
    };
    Mobile.prototype.setTrademark = function (trademark) {
        this.trademark = trademark;
    };
    Mobile.prototype.getSdSize = function () {
        return this.sdSize;
    };
    Mobile.prototype.setSdSize = function (sdSize) {
        this.sdSize = sdSize;
    };
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    Mobile.prototype.setColor = function (color) {
        this.color = color;
    };
    Mobile.prototype.isIs5g = function () {
        return this.is5g;
    };
    Mobile.prototype.setIs5g = function (is5g) {
        this.is5g = is5g;
    };
    Mobile.prototype.getCameraNumber = function () {
        return this.cameraNumber;
    };
    Mobile.prototype.setCameraNumber = function (cameraNumber) {
        this.cameraNumber = cameraNumber;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    Mobile.prototype.setPrice = function (price) {
        this.price = price;
    };
    Mobile.prototype.toString = function () {
        return " Nombre: " + this.name + " Model: " + this.model + " Trademark: " + this.trademark + " Tamanyo SD: " + this.sdSize + " Color: " + this.color + " 5G: " + this.is5g + " Numero de camara: " + this.cameraNumber + " Precio: " + this.price;
    };
    Mobile.prototype.mostrarDatos = function () {
        var espacios = "   * ";
        console.log("The characteristics of the mobile " + this.name + " are:\n" + espacios + "Name: " + this.name + "\n" + espacios + "Model: " + this.model + "\n" + espacios + "Trademark: " + this.trademark + "\n" + espacios + "SD Size: " + this.sdSize + "\n" + espacios + "Color: " + this.color + "\n" + espacios + "Is 5g?: " + this.is5g + "\n" + espacios + "Number of Cameras: " + this.cameraNumber);
    };
    return Mobile;
}());
exports.Mobile = Mobile;
