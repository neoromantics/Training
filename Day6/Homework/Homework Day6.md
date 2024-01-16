# Homework Day6

**what is prototype**

Every object in Javascript has a what’s so called prototype, which can be thought as a blueprint from where objects inherit methods and properties.

**what is pure function**

pure function is a kind of function that always return the same value when passed the same parameters. It does not change  the parameter passed by reference or the global object

**what is class (need to answer “constructor function”)**

class is an concept in oop. In javascript when can use constructor function and new keyword to initialize the instance object of the class.

constructor function usually has the following form:

function car()

```jsx
// Define a constructor function for a Car
function Car(brand, model, year) {
	this.brand = brand;
	this.model = model;
	this.year = year;
}
// Adding a method to the Car prototype
Car.prototype.displayInfo = function() {
return This is a ${this.brand} ${this.model} from ${this.year}.;
};
```