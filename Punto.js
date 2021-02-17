"use strict";
exports.__esModule = true;
exports.Punto = void 0;
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    Punto.prototype.getX = function () {
        return this.x;
    };
    Punto.prototype.setX = function (x) {
        this.x = x;
    };
    Punto.prototype.getY = function () {
        return this.y;
    };
    Punto.prototype.setY = function (y) {
        this.y = y;
    };
    Punto.prototype.toString = function () {
        return "(" + this.x.toString() + "," + this.y.toString() + ")";
    };
    Punto.prototype.distaciaAlOrigen = function () {
        var distancia = 0;
        distancia = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        return distancia;
    };
    Punto.prototype.distanciaOtroPunto = function (otroPunto) {
        var distanciaOtro = 0;
        var numeroX = this.x - otroPunto.getX();
        var numeroXFinal = Math.pow(numeroX, 2);
        var numeroY = this.y - otroPunto.getY();
        var numeroYfinal = Math.pow(numeroY, 2);
        var numeroXY = numeroXFinal + numeroYfinal;
        distanciaOtro = Math.sqrt(numeroXY);
        return distanciaOtro;
    };
    Punto.prototype.calcularCuadrante = function () {
        var numCuadrante;
        if (this.x == 0 || this.y == 0) {
            numCuadrante = 0;
        }
        else if (this.x > 0 && this.y > 0) {
            numCuadrante = 1;
        }
        else if (this.x < 0 && this.y > 0) {
            numCuadrante = 2;
        }
        else if (this.x < 0 && this.y < 0) {
            numCuadrante = 3;
        }
        else if (this.x > 0 && this.y < 0) {
            numCuadrante = 4;
        }
        return numCuadrante;
    };
    Punto.prototype.calcularMasCercano = function (puntos) {
        var numeroDistancia;
        var j = 0;
        numeroDistancia = this.distanciaOtroPunto(puntos[0]);
        for (var i = 0; i < puntos.length; i++) {
            if (this.distanciaOtroPunto(puntos[i]) < numeroDistancia) {
                numeroDistancia = this.distanciaOtroPunto(puntos[i]);
                j = i;
            }
        }
        return puntos[j];
    };
    return Punto;
}());
exports.Punto = Punto;
