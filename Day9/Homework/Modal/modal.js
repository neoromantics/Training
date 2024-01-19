window.onload = () => {
  let toggleButton = document.querySelector(".triggerSecondModal");
  let firstModal = document.querySelector(".first");
  let secondModal = document.querySelector(".second");
  console.log(toggleButton);
  toggleButton.addEventListener("click", () => {
    firstModal.classList.toggle("hidden");
    secondModal.classList.toggle("hidden");
  });
};
