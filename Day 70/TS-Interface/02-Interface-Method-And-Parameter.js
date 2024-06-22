/***********************************
 * INTERFACE METHOD AND PARAMETERS *
 ***********************************/
// Create an object that adheres to the 'Data' interface
var user = {
    name: 'M.Tayyab',
    fName: 'Khalid Pervaiz',
    age: 19,
    greet: function (message) {
        console.log("".concat(this.name, " S/O ").concat(this.fName, ", ").concat(message, "."));
    }
};
user.greet("You are eligible for this course");
