/***********************************
 * INTERFACE METHOD AND PARAMETERS *
 ***********************************/

// Define an interface 'Data' with a method 'greet'
  interface Data{
    name: string;
    fName: string;
    age: number;
    greet(message: string): void

  }

  // Create an object that adheres to the 'Data' interface
  const user: Data = {
    name: 'M.Tayyab',
    fName: 'Khalid Pervaiz',
    age: 19,
    greet(message: string) {
    console.log(`${this.name} S/O ${this.fName}, ${message}.`);
    
    }
  };

  user.greet("You are eligible for this course");

  