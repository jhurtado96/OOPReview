import{Mobile} from "./Mobile"
import{MobileLibrary} from "./MobileLibrary"
let Nokia3210 = new Mobile("Nokia","3210","NokiaCompany",60,"Azul",true,1,399)
let iPhone3G = new Mobile("iPhone","3g","Apple",20,"Gris",true,6,799)
let SamsungGalaxy10  = new Mobile("Samsung","Galaxy10","SamsungCorp",40,"Amarillo",false,1,599)
let SamsungGalaxy11  = new Mobile("Samsung","Galaxy10","SamsungCorp",40,"Amarillo",false,1,999)

let arrayMobiles=[Nokia3210,iPhone3G,SamsungGalaxy10,SamsungGalaxy11]

let mobileLibrarita = new MobileLibrary("The phone house","Madrid",arrayMobiles)

console.log(mobileLibrarita.getTotalPrice())