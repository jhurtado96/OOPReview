"use strict";
exports.__esModule = true;
var Punto_1 = require("./Punto");
var Triangulo_1 = require("./Triangulo");
var puntito = new Punto_1.Punto(1, 1);
var puntito2 = new Punto_1.Punto(5, 2);
var puntito3 = new Punto_1.Punto(5, 1);
var arrayPuntos = [puntito, puntito3];
console.log(puntito.distaciaAlOrigen());
console.log(puntito.calcularCuadrante());
console.log(puntito.distanciaOtroPunto(puntito2));
console.log(puntito2.calcularMasCercano(arrayPuntos).toString());
var triangulito = new Triangulo_1.Triangulo(puntito, puntito2, puntito3);
console.log(triangulito.calcularLongitudLados());
