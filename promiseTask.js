// Step 1: Define the function that returns a Promise
function fetchDataFromDatabase() {
  console.log("Fetching data from database...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = true; // simulate data availability

      if (data) {
        resolve("Data fetched successfully!");
      } else {
        reject("Data not found!");
      }
    }, 3000); // 3-second delay
  });
}

// Step 2: Call the function and handle the Promise
fetchDataFromDatabase()
  .then((message) => {
    console.log(message); // runs if resolved
  })
  .catch((error) => {
    console.log(error); // runs if rejected
  });
