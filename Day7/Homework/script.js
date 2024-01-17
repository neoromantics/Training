"use strict";

(function () {
  window.addEventListener("load", init);

  function init() {
    document
      .getElementById("submitButton")
      .addEventListener("click", fetchTodos);
  }

  async function fetchTodos() {
    const userInput = document.getElementById("inputField").value;
    const inputArray = userInput
      .split(", ")
      .map(Number)
      .filter((num) => !isNaN(num));
    const baseURL = "https://jsonplaceholder.typicode.com/todos/";
    const resultsSection = document.getElementById("results");

    document.getElementById("submitButton").disabled = true;

    try {
      const responses = await Promise.all(
        inputArray.map((input) => fetch(baseURL + input))
      );

      const datas = await Promise.all(
        responses.map((response) => response.json())
      );

      datas.forEach((data) => {
        if (data.title) {
          const resultItem = document.createElement("p");
          resultItem.textContent = data.title;
          resultsSection.appendChild(resultItem);
        }
      });
    } catch (error) {
      console.error("Error:", error);
      const errorItem = document.createElement("p");
      errorItem.textContent = "Error fetching data.";
      resultsSection.appendChild(errorItem);
    } finally {
      document.getElementById("submitButton").disabled = false;
    }
  }
})();
