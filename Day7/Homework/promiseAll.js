// URLs to fetch data from
const url1 = "https://jsonplaceholder.typicode.com/todos/1";
const url2 = "https://jsonplaceholder.typicode.com/todos/2";
const url3 = "https://jsonplaceholder.typicode.com/todos/3";

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data.title;
  } catch (error) {
    console.error(error);
  }
}

// Using Promise.all to fetch all data simultaneously
Promise.all([fetchData(url1), fetchData(url2), fetchData(url3)])
  .then((results) => {
    console.log("All titles fetched:", results);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
