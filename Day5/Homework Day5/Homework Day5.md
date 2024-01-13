# Homework Day5

# How to traverse array in JS?

```jsx
// Using a for loop
let array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// Using a for...of loop
for (let value of array) {
  console.log(value);
}

// Using forEach() method
array.forEach(function (value) {
  console.log(value);
});

// Using map() method
let newArray = array.map(function (value) {
  return value * 2;
});

// Using for...in loop (not recommended for arrays)
for (let index in array) {
  console.log(array[index]);
}
```

# What is deep copy & shallow copy?

Shallow copy means copying the values of an object's properties as they are, without copying any objects nested within.

Deep copying creates a new object and recursively copies every object it finds in the original. Changes in the deep copy do not affect the original object

# Practice: forEach, map, filter, find, reduce

See Practices.js