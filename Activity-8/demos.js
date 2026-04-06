// Activity 8: Asynchronous JavaScript Demonstrations
// This file demonstrates async concepts that will be used in scripts.js

console.log("=== Activity 8: Quote of the Day Generator ===");

// Part A
console.log("\n=== ASYNCHRONOUS JAVASCRIPT DEMONSTRATIONS ===");

// Demonstrate setTimeout
console.log("Starting setTimeout demonstrations...");
console.log("1. This logs immediately");

//This runs after 1 second because setTimeout() works in miliseconds
setTimeout(() => {
    console.log("3. This logs after 1 second (setTimeout)");
}, 1000);

console.log("2. This also logs immediately (before setTimeout callback)");

// Demonstrtae the event loop 
console.log ("\nEvent loop demonstration:");
console.log ("A. Synchronous code");

//Even though this has a setTimeout time of 0 this still runs after the next line
// of code because asynchronous code does not run immediately compared to the 
// synchronous code we have been using
setTimeout(() => {
    console.log("C. Asynchronous callback (0ms timemout)");
}, 0);

console.log("B. More synchronous code");

// Promise demonstration
console.log("\nPromise demonstration");

//Resolve runs when our success constant finishes successfully
//Reject runs when our success constant finishes with an error
const simplePromise = new Promise ((resolve, reject) => {
    const success = Math.random() > 0.3; 
    setTimeout(() => {
        if (success) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected!");
    }
}, 500);
});

// Handling promise with .then/.catch
//.then() takes the resolve value and .catch automatically takes
// reject value 
function demonstratePromise() {
  console.log("Demonstrating promise with .then/.catch...");

  simplePromise
    .then((result) => {
      console.log("Promise success:", result);
    })
    .catch((error) => {
      console.log("Promise error:", error);
    });
}

//Handling promise with async/await
//async makes the function return a promise and await makes the
// function wait for a resolved promise before it executes. await can
// only be used in async functions
async function demonstrateAsyncAwait() {
    console.log("Demonstrating promise with async/away...");

    try {
        const result = await simplePromise;
        console.log("Async/await success:", result);
    } catch (error) {
        console.log("Async/await error:", error);
    }
}

//Call both demonstrations
demonstratePromise();
demonstrateAsyncAwait();

// Part B
console.log("\n=== FETCH API INTRODUCTION ===");

// Basic fetch demonstration with .then/.catch
function demonstrateFetch() {
  console.log("Demonstrating basic fetch with .then/.catch...");

//fetch() starts and allows the process of getting a resource from a server.
//Here we are fetching from jsonplaceholder using the response object to give us
// information on the JSON
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      console.log("Response object:", response);
      console.log("Response status:", response.status);
      console.log("Response ok:", response.ok);
      return response.json();
    })
    .then((data) => {
      console.log("JSON data:", data);
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}

// Async/await version of fetch
async function demonstrateFetchAsync() {
  console.log("Demonstrating fetch with async/await...");

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/2"
    );
    console.log("Async response object:", response);
    console.log("Async response status:", response.status);

    const data = await response.json();
    console.log("Async JSON data:", data);
  } catch (error) {
    console.error("Async fetch error:", error);
  }
}

// Call both demonstrations
demonstrateFetch();
demonstrateFetchAsync();
