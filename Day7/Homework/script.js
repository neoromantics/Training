"use strict";
(function () {
  window.addEventListener("load", init);
  function init() {
    document.getElementById("submitButton").addEventListener("click", () => {
      const userInput = document.getElementById("inputField").value;
      const baseURL = "https://jsonplaceholder.typicode.com/todos/";

      fetch(url + value)
        .then((response) => response.json())
        .then((data) => {
          document.querySelector("section").textContent = data.title;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  }
})();
