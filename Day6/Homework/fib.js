/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  const previousFib = [0, 1];
  if (n == 0 || n == 1) {
    return previousFib[n];
  }
  for (let i = 2; i <= n; i++) {
    previousFib.push(previousFib[0] + previousFib[1]);
    previousFib.shift();
  }

  return previousFib[1];
};
