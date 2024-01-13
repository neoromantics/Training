// Example 1: Basic Usage
let age = 20;
let beverage = age >= 18 ? "Beer" : "Juice";
console.log(beverage); // Outputs: "Beer"

// Example 2: Nested Ternary
age = 20;
beverage = age > 18 ? (age > 21 ? "Wine" : "Beer") : "Juice";
console.log(beverage); // Outputs: "Beer"

// Example 3: Using with Functions
let score = 75;
function passExam() {
  console.log("Passed");
}
function failExam() {
  console.log("Failed");
}
let result = score >= 50 ? passExam() : failExam();

// Example 4: For Readability
let user = { isAdmin: false, isModerator: true };
let accessLevel = user.isAdmin
  ? "admin"
  : user.isModerator
  ? "moderator"
  : "user";
console.log(accessLevel); // Outputs: "moderator"

// Example 5: Undefined or Null Coalescing
let userName = user.name ? user.name : "Anonymous";
console.log(userName); // Outputs: "Anonymous"

// Example 6: As a Parameter
function greet(hour) {
  return console.log(hour < 12 ? "Good Morning" : "Good Day");
}
greet(10); // Outputs: "Good Morning"

// Example 7: Avoid Side Effects
score = 50;
score > 40 ? score++ : score--;
console.log(score); // Outputs: 51

// Example 8: Returning Objects
let isMobile = true;
let settings = isMobile ? { mode: "mobile" } : { mode: "desktop" };
console.log(settings); // Outputs: { mode: "mobile" }
