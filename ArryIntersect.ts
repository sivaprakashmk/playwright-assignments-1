// Step 1: Define the intersection function
function intersection(arr1: number[], arr2: number[]): number[] {
  let result: number[] = [];

  // Step 2: Loop through arr1
  for (let i = 0; i < arr1.length; i++) {
    let element = arr1[i];

    // Step 3: Check if element exists in arr2 and not already in result
    if (arr2.includes(element) && !result.includes(element)) {
      result.push(element);
    }
  }

  return result;
}

// Step 4: Example calls

// Typical case
console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6])); 
// Output: [3, 4]

// No common elements
console.log(intersection([7, 8, 9], [1, 2, 3])); 
// Output: []

// All elements common
console.log(intersection([10, 20, 30], [10, 20, 30])); 
// Output: [10, 20, 30]

// Mixed case with duplicates
console.log(intersection([2, 2, 3, 4], [2, 4, 4])); 
// Output: [2, 4]
