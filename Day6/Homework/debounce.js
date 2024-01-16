function debounce(cb, delay = 5000) {
  let timeOut;
  clearTimeout(timeOut);
  return (...args) => setTimeout(() => cb(...args), delay);
}

const print = debounce((arguments) => console.log(arguments));
print("my name is jack");
