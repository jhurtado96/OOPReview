"use strict";
exports.__esModule = true;
exports.Triangulo = void 0;
var Triangulo = /** @class */ (function () {
    function Triangulo(vertice1, vertice2, vertice3) {
        this.vertice1 = vertice1;
        this.vertice2 = vertice2;
        this.vertice3 = vertice3;
    }
    Triangulo.prototype.calcularLongitudLados = function () {
        var distancias = [];
        var v1av2 = this.vertice1.distanciaOtroPunto(this.vertice2);
        var v2av3 = this.vertice2.distanciaOtroPunto(this.vertice3);
        var v3av1 = this.vertice3.distanciaOtroPunto(this.vertice1);
        distancias.push(v1av2, v2av3, v3av1);
        return distancias;
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
