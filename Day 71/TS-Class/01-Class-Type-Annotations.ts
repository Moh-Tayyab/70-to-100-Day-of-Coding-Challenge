/**************************
 * CLASS TYPE ANNOTATIONS *
 **************************/

class Student{
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

            this.name = name;
            this.fatherName = fatherName;
            this.age = age;
            this.id = id;
            this.price = price;

        }
        getProductInfo() {
            return `Name: ${this.name}\nFather Name: ${this.fatherName}\nAge: ${this.age}\nID: ${this.id}\nprice: ${this.price}`
        }
}

const studentData= new Student('Muhammad Tayyab', 19, 'Khalid Pervaiz', 1234, 1000)  

console.log(studentData.getProductInfo());

