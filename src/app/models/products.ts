export class products{
    constructor(
        public id:number,
        public idCategory:number,
        public productName:string,
        public price:number,
        public expiationDate:Date
    ){}
}