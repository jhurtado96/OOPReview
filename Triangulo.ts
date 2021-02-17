import {Punto} from "./Punto"
 export class Triangulo{
     private vertice1:Punto
     private vertice2:Punto
     private vertice3:Punto

     constructor(vertice1:Punto,vertice2:Punto,vertice3:Punto){
         this.vertice1=vertice1
         this.vertice2=vertice2
         this.vertice3=vertice3
     }

    public calcularLongitudLados():number[]{
         let distancias=[]
      let v1av2 =  this.vertice1.distanciaOtroPunto(this.vertice2)
      let v2av3 =  this.vertice2.distanciaOtroPunto(this.vertice3) 
      let v3av1 =  this.vertice3.distanciaOtroPunto(this.vertice1)
        distancias.push(v1av2,v2av3,v3av1)
        return distancias

     }



 }