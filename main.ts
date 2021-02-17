import {Punto} from "./Punto"
import{Triangulo} from "./Triangulo"

let puntito = new Punto(1,1)
let puntito2= new Punto(5,2)
let puntito3=new Punto(5,1)
let arrayPuntos = [puntito,puntito3]
console.log(puntito.distaciaAlOrigen())
console.log(puntito.calcularCuadrante())
console.log(puntito.distanciaOtroPunto(puntito2))
console.log(puntito2.calcularMasCercano(arrayPuntos).toString())

let triangulito = new Triangulo(puntito,puntito2,puntito3)

console.log(triangulito.calcularLongitudLados())