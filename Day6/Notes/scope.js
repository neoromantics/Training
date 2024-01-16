// Example 1: Closure in a loop
for (let i = 0; i < 3; i++) {
  (function (index) {
    setTimeout(function () {
      console.log("Index: " + index);
    }, 1000 * index);
  })(i);
}

// Example 2: Closure with private variables
function counter() {
  let count = 0;
  return {
    increment: function () {
      count++;
      console.log(count);
    },
    decrement: function () {
      count--;
      console.log(count);
    },
  };
}

let myCounter = counter();
console.log(typeof myCounter);
myCounter.increment();
myCounter.increment();
myCounter.decrement();

function createPerson(name) {
  let privateName = name;
  return {
    getName: function () {
      return privateName;
    },
    setName: function (newName) {
      privateName = newName;
    },
  };
}

let person = createPerson("Alice");
console.log(person.getName());
person.setName("Bob");
console.log(person.getName());
