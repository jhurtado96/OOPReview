import {Mobile} from "./Mobile"

let Nokia3210 = new Mobile("Nokia","3210","NokiaCompany",60,"Azul",true,1,399)
let iPhone3G = new Mobile("iPhone","3g","Apple",20,"Gris",true,6,799)
let SamsungGalaxy10  = new Mobile("Samsung","Galaxy10","SamsungCorp",40,"Amarillo",false,1,599)

Nokia3210.mostrarDatos()
iPhone3G.mostrarDatos()
SamsungGalaxy10.mostrarDatos()

Nokia3210.setCameraNumber(4)
Nokia3210.setIs5g(true)

Nokia3210.mostrarDatos()
iPhone3G.mostrarDatos()
SamsungGalaxy10.mostrarDatos()

let arrayMoviles=[Nokia3210,iPhone3G,SamsungGalaxy10]

for(let i=0;i<arrayMoviles.length;i++){
    arrayMoviles[i].mostrarDatos()
}