//Example 1 & 2
function lengthOfLastWord(s) {

  s = s.trim();
  // Step 2: Split into words
  console.log("trim() "+s);
  
  let words = s.split(" ");
  // Step 3: Get the last word
  console.log("split() "+ words);
  
  let lastWord = words[words.length - 1];
  // Step 4: Return its length
  console.log(" words.length - 1 func  "+ lastWord);
  
  return lastWord.length;
}

// inputs
console.log(lengthOfLastWord("Hello World"));              // Output: 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // Output: 4




//Example 3  Check if Two Strings Are Anagrams


function isAnagram(str1, str2) {
  // Step 1: Normalize (remove spaces, lowercase)
  str1 = str1.replace(/\s+/g, "").toLowerCase();
  str2 = str2.replace(/\s+/g, "").toLowerCase();
  console.log( " Normalize (remove spaces, lowercase  " + str1 + '  &   '+ str2);
  

  // Step 2: Sort characters
  let sortedStr1 = str1.split("").sort().join("");
  let sortedStr2 = str2.split("").sort().join("");

  // Step 3: Compare sorted strings
  return sortedStr1 === sortedStr2;
}

// inputs for ex :3
console.log(isAnagram("listen", "silent")); // Output: true
console.log(isAnagram("hello", "world"));   // Output: false






