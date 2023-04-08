export class Product {

    constructor(public id:string,
        public productId:number,
        public name:string,
        public gender:string,
        public description:string,
        public unitPrice:number,
        public imageUrl:string,
        public active:boolean,
        public unitsInStock:number,
        public dateCreated:Date,
        public lastUpdated:Date,
        public colour:string,
        public product_usage:string
        ){

    }
}
