// Example of a function that returns a promise
function simulateAsyncOperation(time, value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });
}

// Using async/await to handle promises
async function handleAsyncOperation() {
  try {
    let result = await simulateAsyncOperation(1000, "Operation Complete");
    console.log(result);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

handleAsyncOperation();

// Using Promise.all to handle multiple promises
Promise.all([
  simulateAsyncOperation(500, "First result"),
  simulateAsyncOperation(1000, "Second result"),
  simulateAsyncOperation(1500, "Third result"),
])
  .then((results) => {
    console.log("All results:", results);
  })
  .catch((error) => {
    console.error("An error occurred in one of the promises:", error);
  });

// handleAsyncOperation()
//   .then((result) => {
//     console.log("Async operation finished", result);
//   })
//   .catch((error) => {
//     console.error("Async operation failed", error);
//   });
