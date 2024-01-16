// Extending the Array prototype with a new method
Array.prototype.sum = function () {
  return this.reduce((acc, val) => acc + val, 0);
};

// Testing the new Array method
let numbers = [1, 2, 3, 4, 5];
console.log("Sum of numbers:", numbers.sum());

// Extending the Object prototype with a new method
Object.prototype.getKeyCount = function () {
  return Object.keys(this).length;
};

// Testing the new Object method
let sampleObject = { a: 1, b: 2, c: 3 };
console.log("Number of keys in object:", sampleObject.getKeyCount());
