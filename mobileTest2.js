"use strict";
exports.__esModule = true;
var Mobile_1 = require("./Mobile");
var Nokia3210 = new Mobile_1.Mobile("Nokia", "3210", "NokiaCompany", 60, "Azul", true, 1, 399);
var iPhone3G = new Mobile_1.Mobile("iPhone", "3g", "Apple", 20, "Gris", true, 6, 799);
var SamsungGalaxy10 = new Mobile_1.Mobile("Samsung", "Galaxy10", "SamsungCorp", 40, "Amarillo", false, 1, 599);
// Nokia3210.mostrarDatos()
// iPhone3G.mostrarDatos()
// SamsungGalaxy10.mostrarDatos()
// Nokia3210.setCameraNumber(4)
// Nokia3210.setIs5g(true)
// Nokia3210.mostrarDatos()
// iPhone3G.mostrarDatos()
// SamsungGalaxy10.mostrarDatos()
var arrayMoviles = [Nokia3210, iPhone3G, SamsungGalaxy10];
for (var i = 0; i < arrayMoviles.length; i++) {
    arrayMoviles[i].mostrarDatos();
}
