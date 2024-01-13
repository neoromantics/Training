
// Example of Basic Usage
const obj1 = {
  a: {
    b: {
      c: 1
    }
  }
};
const value1 = obj1.a?.b?.c; // 1
const undefinedValue1 = obj1.a?.b?.d; // undefined

// Example with Function Calls
const obj2 = {
  a: {
    b: {
      c: () => "Hello"
    }
  }
};
const result2 = obj2.a?.b?.c?.(); // "Hello"
const noFunctionResult2 = obj2.a?.b?.d?.(); // undefined

// Example with Arrays
const obj3 = {
  a: [1, 2, 3]
};
const firstElement3 = obj3.a?.[0]; // 1
const nonExistentElement3 = obj3.a?.[5]; // undefined

// Combining with Nullish Coalescing
const obj4 = {
  a: {
    b: {
      c: null
    }
  }
};
const value4 = obj4.a?.b?.c ?? "default"; // "default"
