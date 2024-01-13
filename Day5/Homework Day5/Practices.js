
// forEach example
let array1 = [1, 2, 3, 4, 5];
array1.forEach(item => console.log(item));

// map example
let array2 = [1, 2, 3, 4, 5];
let squared = array2.map(item => item * item);
console.log(squared); // [1, 4, 9, 16, 25]

// filter example
let array3 = [1, 2, 3, 4, 5];
let even = array3.filter(item => item % 2 === 0);
console.log(even); // [2, 4]

// find example
let array4 = [1, 2, 3, 4, 5];
let found = array4.find(item => item > 3);
console.log(found); // 4

// reduce example
let array5 = [1, 2, 3, 4, 5];
let sum = array5.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum); // 15
