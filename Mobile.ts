export class Mobile{
   private name:string
   private model:string
   private trademark:string
   private sdSize:number
   private color:string
   private is5g:boolean
   private cameraNumber:number
   private price:number

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getModel(): string {
        return this.model;
    }

    public setModel(model: string): void {
        this.model = model;
    }

    public getTrademark(): string {
        return this.trademark;
    }

    public setTrademark(trademark: string): void {
        this.trademark = trademark;
    }

    public getSdSize(): number {
        return this.sdSize;
    }

    public setSdSize(sdSize: number): void {
        this.sdSize = sdSize;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public isIs5g(): boolean {
        return this.is5g;
    }

    public setIs5g(is5g: boolean): void {
        this.is5g = is5g;
    }

    public getCameraNumber(): number {
        return this.cameraNumber;
    }

    public setCameraNumber(cameraNumber: number): void {
        this.cameraNumber = cameraNumber;
    }

    public getPrice(): number {
        return this.price;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    constructor(name:string,model:string,trademark:string,sdSize:number,color:string,is5g:boolean,cameraNumber:number,price:number){
        this.name=name
        this.model=model
        this.trademark=trademark
        this.sdSize=sdSize
        this.color=color
        this.is5g=is5g
        this.cameraNumber=cameraNumber
        this.price=price
    }

    public toString():string{
        return " Nombre: " + this.name + " Model: " + this.model + " Trademark: " + this.trademark + " Tamanyo SD: " + this.sdSize + " Color: "+this.color +" 5G: " +this.is5g + " Numero de camara: "+this.cameraNumber+" Precio: "+this.price
    }

    public mostrarDatos(){
        let espacios="   * "
        console.log("The characteristics of the mobile " +this.name+ " are:\n" + espacios + "Name: "+this.name+ "\n"+espacios+"Model: "+this.model+ "\n"+espacios+"Trademark: "+this.trademark+ "\n"+espacios+"SD Size: "+this.sdSize+ "\n"+espacios+"Color: "+this.color+ "\n"+espacios+"Is 5g?: "+this.is5g+ "\n"+espacios+"Number of Cameras: "+this.cameraNumber)
    }

}