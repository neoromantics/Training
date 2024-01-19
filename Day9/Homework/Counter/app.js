let decreaseButton = document.querySelector(".decrease");
let increaseButton = document.querySelector(".increase");
let resetButton = document.querySelector(".reset");
let numOfCounter = document.querySelector("#value");

window.onload = () => {
  decreaseButton.addEventListener("click", () => {
    numOfCounter.textContent = parseInt(numOfCounter.textContent) - 1;
    if (numOfCounter.textContent < 0) {
      numOfCounter.classList.add("red-text");
    }
  });

  increaseButton.addEventListener("click", () => {
    numOfCounter.textContent = parseInt(numOfCounter.textContent) + 1;
    numOfCounter.classList.add("green-text");
  });

  resetButton.addEventListener("click", () => {
    numOfCounter.textContent = 0;
  });
};
