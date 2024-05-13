var Product = /** @class */ (function () {
    //  constructor type parameter
    function Product(name, age, fatherName, id, price) {
        this.name = 'M.Tayyab';
        this.fatherName = 'Khalid Pervaiz';
        this.age = 19;
        this.id = 1018093;
        this.price = 2000;
    }
    Product.prototype.getProductInfo = function () {
        return "Name: ".concat(this.name, "\n Father Name: ").concat(this.fatherName, " Age: ").concat(this.age, " ID: ").concat(this.id, " price: ").concat(this.price);
    };
    return Product;
}());
var product1 = new Product('tayyab', 19, 'khalid', 1010, 1000);
console.log(product1.getProductInfo());
