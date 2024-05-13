class Product{
    // property type annotation
    name: string;
    age: number;
    fatherName: string
    id: number;
    price: number;
    //  constructor type parameter
    constructor( name: string,
        age: number,
        fatherName: string,
        id: number,
        price: number) {

            this.name = 'M.Tayyab'
            this.fatherName = 'Khalid Pervaiz'
            this.age = 19
            this.id = 1018093
            this.price = 2000

        }
        getProductInfo() {
            return `Name: ${this.name}\n Father Name: ${this.fatherName} Age: ${this.age} ID: ${this.id} price: ${this.price}`
        }
}

const product1 = new Product('tayyab', 19, 'khalid',  1010, 1000)

console.log(product1.getProductInfo());

