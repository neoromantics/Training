const products = {
  1: { id: 1, name: "Product 1", price: 9.99, description: "Description 1" },
  2: { id: 2, name: "Product 2", price: 14.99, description: "Description 2" },
  3: { id: 3, name: "Product 3", price: 19.99, description: "Description 3" },
};

let currentSlide = 0;

function displayProductsInCarousel() {
  const container = document.querySelector(".carousel-content");
  Object.values(products).forEach((product, index) => {
    const carouselItem = document.createElement("div");
    carouselItem.className = "carousel-item";
    carouselItem.innerHTML = `
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <p>${product.description}</p>
        `;
    container.appendChild(carouselItem);

    if (index === 0) {
      carouselItem.classList.add("active");
    }
  });
}

function changeSlide(direction) {
  const items = document.querySelectorAll(".carousel-item");
  const totalItems = items.length;

  items[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + direction + totalItems) % totalItems;
  items[currentSlide].classList.add("active");
}

document
  .querySelector(".carousel-button.left")
  .addEventListener("click", () => changeSlide(-1));
document
  .querySelector(".carousel-button.right")
  .addEventListener("click", () => changeSlide(1));

window.onload = displayProductsInCarousel;
