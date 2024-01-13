let obj1 = { name: "Alice" };
let obj2 = obj1;
obj2.name = "Bob";
console.log(obj1.name); // Outputs: 'Bob'
console.log(obj2.name); // Outputs: 'Bob'

function updateName(obj) {
  obj.name = "Charlie";
}
let person = { name: "Alice" };
updateName(person);
console.log(person.name); // Outputs: 'Charlie'

let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1); // Outputs: [1, 2, 3, 4]
console.log(arr2); // Outputs: [1, 2, 3, 4]

let arr = [1, 2, 3];
let ref = arr;
arr = [];
console.log(ref); // Outputs: [1, 2, 3]

let firstArray = [1, 2, 3];
let secondArray = [1, 2, 3];
let thirdArray = firstArray;
console.log(firstArray === secondArray); // Outputs: false
console.log(firstArray === thirdArray); // Outputs: true

function replaceArray(arr) {
  arr = [4, 5, 6]; // Attempts to assign a new array
}
let numbers = [1, 2, 3];
replaceArray(numbers);
console.log(numbers); // Outputs: [1, 2, 3]

function addElement(arr) {
  arr.push(4); // Adds an element to the array
}
addElement(numbers);
console.log(numbers); // Outputs: [1, 2, 3, 4]
