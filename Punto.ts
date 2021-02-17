export class Punto{
    private x:number
    private y:number

    public getX(): number {
        return this.x;
    }

    public setX(x: number): void {
        this.x = x;
    }

    public getY(): number {
        return this.y;
    }

    public setY(y: number): void {
        this.y = y;
    }

    constructor(x:number,y:number){
        this.x=x
        this.y=y
    }
    public toString():string{
        return "("+this.x.toString() +","+this.y.toString()+")"
    }
    public distaciaAlOrigen():number{
       let distancia = 0
       distancia = Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))
       return distancia
    }

    public distanciaOtroPunto(otroPunto:Punto):number{
        let distanciaOtro:number = 0
        let numeroX:number=this.x-otroPunto.getX()
        let numeroXFinal = Math.pow(numeroX,2)
        let numeroY:number=this.y-otroPunto.getY()
        let numeroYfinal = Math.pow(numeroY,2)
        let numeroXY = numeroXFinal+numeroYfinal

        distanciaOtro = Math.sqrt(numeroXY)
        return distanciaOtro
    }

    public calcularCuadrante():number{
        let numCuadrante;
        if(this.x==0 ||this.y==0 ){
            numCuadrante=0
        } else if(this.x>0 && this.y>0){
            numCuadrante=1
        } else if(this.x<0 && this.y>0){
            numCuadrante=2
        } else if(this.x<0&&this.y<0){
            numCuadrante=3
        } else if(this.x>0&&this.y<0){
            numCuadrante=4
        }
        return numCuadrante
    }

    public calcularMasCercano(puntos: Punto[]):Punto{
        let numeroDistancia:number;
        let j=0
        numeroDistancia = this.distanciaOtroPunto(puntos[0])
        for(let i=0;i<puntos.length;i++){
            if(this.distanciaOtroPunto(puntos[i])<numeroDistancia) {
                numeroDistancia=this.distanciaOtroPunto(puntos[i])
                j=i
            }
        }
        return puntos[j]
    }
    


}