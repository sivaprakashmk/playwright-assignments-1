// Step 1: Initialize the array and target value
const nums = [2, 4, 5, 2, 1, 2];
const k = 2;

// Step 2: Function to count occurrences
function countOccurrences(arr, target) {
  let count = 0; // initialize count
  // Step 3: Loop through the array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++; // increment count if match found
    }
  }
  return count; // Step 4: return the count
}

// Step 5: Call the function and print result
console.log(countOccurrences(nums, k)); // Output: 3
