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

// console.log(reverse(123));

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
    .map((word) => word.charAt(0).toUpperCase().concat(word.slice(1)))
    .join(" ");

// console.log(capInitials("the quick brown fox"));

// 4. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Example string: 'Web Development Tutorial'
// Expected Output: 'Development'

const longestWord = (str) =>
  str
    .split(" ")
    .reduce(
      (longest, word) => (word.length > longest.length ? word : longest),
      ""
    );
// console.log(longestWord("Web Development Tutorial"));

// 5. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string: 'The quick brown fox'
// Expected Output: 5

const countVowels = (str) =>
  str
    .replace(" ", "")
    .split("")
    .reduce(
      (numOfVowels, char) =>
        ["a", "e", "i", "o", "u"].includes(char)
          ? numOfVowels + 1
          : numOfVowels,
      0
    );

// console.log(countVowels("The quick brown fox"));

// 6. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

const isPrime = (num) => {
  if (num === 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

// console.log(isPrime(15));
// console.log(isPrime(5));
// console.log(isPrime(121));

// 7. Write a JavaScript function which accepts an argument and returns the type.
// Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
const getType = (arg) => typeof arg;

// console.log(getType());

// 8. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4

// const seconds = (arr) => [
//   [...new Set(arr)].sort((a, b) => a - b)[1],
//   [...new Set(arr)].sort((a, b) => a - b)[[...new Set(arr)].length - 2],
// ];

const seconds = (arr) => {
  let greatest = Math.max(arr[0], arr[1]);
  let lowest = Math.min(arr[0], arr[1]);
  let secondGreatest = lowest;
  let secondLowest = greatest;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < lowest) {
      secondLowest = lowest;
      lowest = arr[i];
    } else if (arr[i] > lowest && arr[i] < secondLowest) {
      secondLowest = arr[i];
    }
    if (arr[i] > greatest) {
      secondGreatest = greatest;
      greatest = arr[i];
    } else if (arr[i] < greatest && arr[i] > secondGreatest) {
      secondGreatest = arr[i];
    }
  }
  return [secondLowest, secondGreatest];
};

console.log(seconds([1, 1.5, 2, 3, 4, 5]));
