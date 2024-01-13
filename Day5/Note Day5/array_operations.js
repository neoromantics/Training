// 1. push and pop
let fruits = ["apple", "banana"];
fruits.push("orange"); // Add at the end
console.log("After push:", fruits);
let last = fruits.pop(); // Remove from the end
console.log("After pop:", fruits);

// 2. shift and unshift
let numbers = [2, 3, 4];
numbers.unshift(1); // Add at the beginning
console.log("After unshift:", numbers);
let first = numbers.shift(); // Remove from the beginning
console.log("After shift:", numbers);

// 3. slice
let animals = ["ant", "bison", "camel", "duck", "elephant"];
let someAnimals = animals.slice(2);
console.log("Some animals:", someAnimals);

// 4. splice
let myFish = ["angel", "clown", "mandarin", "sturgeon"];
myFish.splice(2, 0, "drum"); // Insert at index 2
console.log("After splice insert:", myFish);
myFish.splice(3, 1); // Remove 1 element at index 3
console.log("After splice remove:", myFish);

// 5. map
let squares = numbers.map((num) => num * num);
console.log("Squares:", squares);

// 6. filter
let longWords = words.filter((word) => word.length > 6);
console.log("Long words:", longWords);

// 7. reduce
let sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log("Sum:", sum);

// 8. forEach
colors.forEach((color) => console.log("Color:", color));

// 9. find and findIndex
let found = array.find((element) => element > 10);
console.log("Found:", found);
let index = array.findIndex((element) => element > 10);
console.log("Found index:", index);

// 10. sort
months.sort();
console.log("Sorted months:", months);
numbers.sort((a, b) => a - b);
console.log("Sorted numbers:", numbers);

// 11. concat
let combinedArray = array1.concat(array2);
console.log("Combined array:", combinedArray);

// 12. join
let joined = elements.join(", ");
console.log("Joined elements:", joined);
