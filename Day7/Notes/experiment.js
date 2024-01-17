console.log("Start");

// Asynchronous setTimeout
setTimeout(function timeoutCallback() {
  console.log("Timeout done (1)");
}, 500);

// Promise
let promise = new Promise(function (resolve, reject) {
  console.log("Promise executor");
  setTimeout(function () {
    resolve("Promise resolved");
  }, 1000);
});

promise.then(function (value) {
  console.log(value + "!!!");
});

console.log("Scheduled a timeout and a promise");

// Another setTimeout
setTimeout(function anotherTimeoutCallback() {
  console.log("Timeout done (2)");
}, 100);

console.log("End");

// Output sequence will be:
// "Start"
// "Promise executor"
// "Scheduled a timeout and a promise"
// "End"
// "Timeout done (2)" (after approx. 100 milliseconds)
// "Timeout done (1)" (after approx. 500 milliseconds)
// "Promise resolved" (after approx. 1000 milliseconds)
