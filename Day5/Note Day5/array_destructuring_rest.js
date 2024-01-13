// Basic Destructuring
const arr = [1, 2, 3];
const [x, y, z] = arr;
console.log('Basic Destructuring:', x, y, z);

// Default Values
const [a, b, c = 3] = [1, 2];
console.log('Default Values:', a, b, c);

// Skipping Elements
const [first, , third] = ['foo', 'bar', 'baz'];
console.log('Skipping Elements:', first, third);

// Variable Swap
let a = 1, b = 2, 3;
[b, a] = [a, b];
console.log('Variable Swap:', a, b);

// Rest Operator
const [firstNumber, ...rest] = [1, 2, 3, 4, 5];
console.log('Rest Operator:', firstNumber, rest);

// Ignoring Some Elements, Then Capturing the Rest
const [firstElement, , ...restElements] = [1, 2, 3, 4, 5];
console.log('Ignoring Some, Then Rest:', firstElement, restElements);

// Combining with Default Values
const [d = 1, e = 2, ...restNumbers] = [undefined, undefined, 3, 4];
console.log('Combining with Default Values:', d, e, restNumbers);

// Destructuring Assignment to Existing Variables
let p, q;
[p, q] = [1, 2];
console.log('Destructuring to Existing Variables:', p, q);

// Destructuring Nested Arrays
const nestedArray = [1, [2, 3], 4];
const [firstNested, [secondNested, thirdNested], fourthNested] = nestedArray;
console.log('Destructuring Nested Arrays:', firstNested, secondNested, thirdNested, fourthNested);

// Return Multiple Values from a Function
function multipleValues() {
  return [1, 2, 3];
}
const [x1, y1, z1] = multipleValues();
console.log('Return Multiple Values from Function:', x1, y1, z1);
