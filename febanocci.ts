// Step 1: Define the fibonacci function
function fibonacci(n: number): number {
  // Step 2: Handle edge cases
  if (n < 0) {
    throw new Error("Fibonacci is not defined for negative numbers");
  }
  if (n === 0) return 0;
  if (n === 1) return 1;

  // Step 3: Iterative calculation
  let a: number = 0; // first Fibonacci number
  let b: number = 1; // second Fibonacci number
  let result: number = 0;

  for (let i = 2; i <= n; i++) {
    result = a + b; // next Fibonacci number
    a = b;          // shift forward
    b = result;
  }

  return result;
}

// Step 4: Example calls
console.log(fibonacci(0));  // Output: 0
console.log(fibonacci(1));  // Output: 1
console.log(fibonacci(5));  // Output: 5
console.log(fibonacci(10)); // Output: 55

// Example with error
try {
  console.log(fibonacci(-3)); // Throws error
} catch (error) {
  console.error(error.message); // Output: Fibonacci is not defined for negative numbers
}
