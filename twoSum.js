// Step 1: Initialize array and target
const nums = [2, 4, 7, 8, 11, 14];
const target = 18;

// Step 2: Function to find pairs
function twoSumIndices(arr, target) {
  let results = []; // Step 1: empty array

  // Step 2: nested loop
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // Step 3: check sum
      if (arr[i] + arr[j] === target) {
        // Step 4: add indices to results
        results.push([i, j]);
      }
    }
  }

  // Step 5: return results
  return results;
}

// Testing
console.log(twoSumIndices(nums, target)); 
// Output: [ [2, 4], [1, 5] ]
