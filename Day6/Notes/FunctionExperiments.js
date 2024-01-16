// IIFE Anonymous Function with Closure
const counter = (() => {
  let count = 0;
  return () => {
    count += 1;
    console.log("IIFE Counter:", count);
  };
})();
counter();
counter();

// Async Simulation
function asyncRequest(callback) {
  setTimeout(() => {
    callback("Async Data Received");
  }, 1000);
}
asyncRequest((data) => console.log(" Call Back:", data));

// Example of Lexical Scoping and Closure
function createCounter() {
  let count = 0;
  return {
    increment: () => count++,
    getCurrentCount: () => console.log("Lexical Scoping and Closure:", count),
  };
}
const counter2 = createCounter();
counter2.increment();
counter2.getCurrentCount();

// Example of Nested Function/Currying
const volume = (length) => (width) => (height) => length * width * height;
console.log("Nested Function/Currying:", volume(3)(2));

//  Example of Higher Order Function
const withLogging =
  (fn) =>
  (...args) => {
    console.log("Running function:", fn.name);
    return fn(...args);
  };
const multiplyNumbers = (x, y) => x * y;
const loggedMultiply = withLogging(multiplyNumbers);
console.log(" Higher Order Function:", loggedMultiply(5, 4));
