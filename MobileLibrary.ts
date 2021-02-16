import {Mobile} from "./Mobile"

export class MobileLibrary{

    private name:string
    private location:string
    private mobile:Mobile[]
    private totalPrice:number


    

    constructor(name:string,location:string,mobile:Mobile[]){
        this.name=name
        this.location=location
        this.mobile=mobile
        this.totalPrice = this.totalPriceCalculation()
        
    }

    public getName(): string
    {
        return this.name;
    }

    public setName(name: string)   {
        this.name = name;
    }

    public getLocation(): string
 {
        return this.location;
    }

    public setLocation(location: string) {
        this.location = location;
    }

    public getMobile(): Mobile[]
 {
        return this.mobile;
    }

    public setMobile(mobile: Mobile[]) {
        this.mobile = mobile;
    }

    public getTotalPrice(): number
 {
        return this.totalPrice;
    }

    public setTotalPrice(totalPrice: number) {
        this.totalPrice = totalPrice;
    }
    private totalPriceCalculation():number{
        let precio=0
        for(let i=0;i<this.getMobile().length;i++){
            precio += this.getMobile()[i].getPrice()
        }
        return precio
    }

    public printLibrary(){
        console.log("This is all my mobiles:")
        for(let i=0;i<this.getMobile().length;i++){
            this.mobile[i].mostrarDatos()
        }
        console.log("Price Overall: " + this.getTotalPrice())
    }
}