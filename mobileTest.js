"use strict";
exports.__esModule = true;
var Mobile_1 = require("./Mobile");
var Nokia3210 = new Mobile_1.Mobile("Nokia", "3210", "NokiaCompany", 60, "Azul", true, 1, 399);
var iPhone3G = new Mobile_1.Mobile("iPhone", "3g", "Apple", 20, "Gris", true, 6, 799);
var SamsungGalaxy10 = new Mobile_1.Mobile("Samsung", "Galaxy10", "SamsungCorp", 40, "Amarillo", false, 1, 599);
console.log(Nokia3210.toString());
console.log(iPhone3G.toString());
console.log(SamsungGalaxy10.toString());
Nokia3210.setCameraNumber(4);
Nokia3210.setIs5g(true);
console.log(Nokia3210.toString());
console.log(iPhone3G.toString());
console.log(SamsungGalaxy10.toString());