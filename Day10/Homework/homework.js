// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output: 34223
const reverse = (num) => {
  let result = 0;
  while (num != 0) {
    result = result * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return result;
};

console.log(reverse(123));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
const isPalindrome = (word) => {
  let charArray = word.replace(" ", "").split("");
  let start = 0;
  let end = charArray.length - 1;
  while (start <= end) {
    if (charArray[start] == charArray[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }
  return true;
};

// 3. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox '
const capInitials = (words) =>
  words
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
