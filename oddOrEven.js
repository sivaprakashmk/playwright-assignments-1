
function isOddOrEven(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(isOddOrEven(7));  // Output: Odd
console.log(isOddOrEven(10)); // Output: Even