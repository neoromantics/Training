// Define a constructor function for a Car
function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

// Adding a method to the Car prototype
Car.prototype.displayInfo = function () {
  //   console.log(this);
  return `This is a ${this.brand} ${this.model} from ${this.year}.`;
};

// Creating a new Car instance
let myCar = new Car("Toyota", "Corolla", 2021);
console.log(myCar);

// Testing the displayInfo method
console.log(myCar.displayInfo());

// Adding another method to the prototype
Car.prototype.beep = function () {
  console.log("Beep beep!");
};

// Testing the beep method
myCar.beep();
