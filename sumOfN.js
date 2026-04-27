// Step 1: Define the function
function sumOfN(n) {
  let sum = 0; // Step 2: initialize sum

  // Step 3: loop from 1 to n
  for (let i = 1; i <= n; i++) {
    sum += i; // Step 4: add i to sum
    console.log(`After adding ${i}, sum = ${sum}`); // Step 5: print intermediate sum
  }

  return sum; // Step 6: return final sum
}

// Step 7: Call the function
console.log("Final Sum:", sumOfN(5)); // Output: 15
