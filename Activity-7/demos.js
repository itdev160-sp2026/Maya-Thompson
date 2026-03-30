// Activity 7: Array and Object Demonstrations
//This file contains learning demonstrations that are
//seperate from the main application

console.log("=== Activity 7 Product Catalog Display ===");

//Part A
console.log("\n=== ARRAY DEMONSTRATIONS ===");

//Creating arrays
//Arrays are created using bracket,[], or 
// using the new keyword followed by the word Array
//Arrays can also store multiple different data types
const numbersArray = [1, 2, 3, 4, 5];
const colorsArray = new Array('red', 'green', 'blue');
const mixedArray = [42, 'hello', true, null, {name: 'John'}];

console.log("Numbers Array:", numbersArray);
console.log("Colors Array:", colorsArray);
console.log("Mixed Array:", mixedArray);

//Array methods demonstrations
console.log("\n Array Methods");
const fruits = ['apple', 'banana'];
console.log("Original Fruits:", fruits );

//The push method allows you to add another element to the
// array after it's creation
fruits.push('orange');
console.log("After push('orange'):", fruits);

//The pop method removes the last element in an array
const lastFruit = fruits.pop();
console.log("After pop():", fruits, "- removed:", lastFruit)

//The unshift method adds an element to the beginning of an array
fruits.unshift('grape');
console.log("After unshift('grape'):", fruits)

//The shift method removes the first element in an array
const firstFruit = fruits.shift();
console.log("After shift():", fruits, "- removed:", firstFruit);

//Array iteration examples
console.log("\n Array Iteration Methods");
const numbers = [1, 2, 3, 4, 5];

//This for loop loops through the array by its index by starting at 0,
// checking if the current index is less than the length of the array,
// and then adding plus one to the index
console.log("For Loop:")
for (let i = 0; i < numbers.length; i++) {
    console.log(`Index ${i}: ${numbers[i]}`)
}

//The for... of loop Assigns the constant number the values of the numbers array
console.log("For... of Loop:");
for (const number of numbers){
    console.log(`Value: ${number}`);
}

//The forEach method calls a function for each element in the array
//The function used here is the arrow function
console.log("forEach method:");
numbers.forEach((number, index) =>{
    console.log(`forEach - Index ${index}: ${number}`);
});

//The map method creates a new array based on a called function
//This function takes the values in the numbers array and doubles them
//This does not change the original array
console.log("map method (double values):");
const doubled = numbers.map(number => number * 2);
console.log("Doubled:", doubled);

//The filter method creates a new array based on the values that
// pass the condition set by a function this function is looking for even numbers 
// This does not change the original array
console.log("filter method(even numbers only):");
const evenNumbers = numbers.filter(number => number % 2 ===0);
console.log ("Even Numbers:", evenNumbers);

// Object demonstrations
console.log("\n=== OBJECT DEMONSTRATIONS ===");


// Creating objects
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    city: 'New York',
    isEmployed: true
};

console.log("Person object:", person);

//Property access methods
console.log("Dot notation - firstName:", person.firstName);
console.log("Bracket notation - lastName:", person['lastName']);

//Dynamic property access
//Making the varaible = the property and then using the variable
const propertyName = 'age';
console.log(`Dynamic access (${propertyName}):`, person[propertyName]);

//Adding and modifying properties
//Similarly to property access methods you can use either a dot or brackets
person.email = 'john.does@email.com';
person['phone'] = '555-1234';
person.age = 31;

console.log("After adding/modifying properties:", person);

// Deleting properties
delete person.phone;
console.log("After deleting phone:", person);

// Working with arrays of objects
console.log("\n=== ARRAYS OF OBJECTS ===");

//The variable item has 3 arrays contained by brackets and separated by commas
const items = [
    { name: 'Laptop', price: 999.99, inStock: true },
    { name: 'Mouse', price: 29.99, inStock: true },
    { name: 'Monitor', price: 249.99, inStock: false }
];

console.log("Items array:", items);

// filter - find items in stock
//filters by the inStock property boolean
const availableItems = items.filter(item => item.inStock);
console.log("In stock items:", availableItems);

// map - get just the names
// Makes an array by accessing the name property
const itemNames = items.map(item => item.name);
console.log("Item names:", itemNames);

// reduce - calculate total price
// Add all the price properties together and keeps it at a 2 place decimal
const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
console.log(`Total price: $${totalPrice.toFixed(2)}`);

console.log("\n=== Array and object demonstrations complete! ===");
console.log("Check the product catalog below for the application.");