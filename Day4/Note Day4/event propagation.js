document.getElementById("outer").addEventListener(
  "click",
  function () {
    alert("Outer DIV (Bubbling Phase)");
  },
  false
); // false for bubbling

document.getElementById("inner").addEventListener(
  "click",
  function (event) {
    alert("Inner DIV (Bubbling Phase)");
    // Uncomment the line below to stop propagation
    // event.stopPropagation();
  },
  false
); // false for bubbling

document.getElementById("outer").addEventListener(
  "click",
  function () {
    alert("Outer DIV (Capturing Phase)");
  },
  true
); // true for capturing

document.getElementById("inner").addEventListener(
  "click",
  function () {
    alert("Inner DIV (Capturing Phase)");
  },
  true
); // true for capturing
