/**************************
 * CLASS TYPE ANNOTATIONS *
 **************************/
var Product = /** @class */ (function () {
    //  constructor type parameter
    function Product(name, age, fatherName, id, price) {
        this.name = name;
        this.fatherName = fatherName;
        this.age = age;
        this.id = id;
        this.price = price;
    }
    Product.prototype.getProductInfo = function () {
        return "Name: ".concat(this.name, "\nFather Name: ").concat(this.fatherName, "\nAge: ").concat(this.age, "\nID: ").concat(this.id, "\nprice: ").concat(this.price);
    };
    return Product;
}());
var product1 = new Product('Muhammad Tayyab', 19, 'Khalid Pervaiz', 1234, 1000);
console.log(product1.getProductInfo());
