export class persona {
    public nombre:string;
    public apellidos:string;
    public edad:number;
    constructor(n: string, e: number, ap:string){
        this.nombre = n;
        this.edad=e;
        this.apellidos=ap;
    }
}