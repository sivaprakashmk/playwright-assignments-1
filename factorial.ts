// Step 1: Define the factorial function
function factorial(n: number): number {
  // Step 2: Check for negative input
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers");
  }

  // Step 3: Iterative calculation
  let result: number = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

// Step 4: Example calls
console.log(factorial(0));   // Output: 1
console.log(factorial(5));   // Output: 120
console.log(factorial(7));   // Output: 5040

// Example with error
try {
  console.log(factorial(-3)); // Throws error
} catch (error) {
  console.error(error.message); // Output: Factorial is not defined for negative numbers
}
