//Step 3

//Part A
console.log("Hello, World!");

//Part B
document.getElementById("output").innerHTML = "<h2>Hello, World!</h2>";

//Part C

let studentName = "Maya Thompson";

const age = 18;

let isStudent = true;

let emptyValue = null;

let notAssigned;

//Part D
//In quotations is description and after the comma displays the variable defined above
console.log("=== Variable Values ===");
console.log("Student Name:", studentName);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Empty Value:", emptyValue);
console.log("Not Assigned:", notAssigned);
// the typeof operator displays what the variable is catergorized as in the console
console.log("=== Variable Types ===");
console.log("typeof studentName:", typeof studentName);
console.log("typeof age:", typeof age);
console.log("typeof isStudent:", typeof isStudent);
console.log("typeof emptyValue:", typeof emptyValue);
console.log("typeof notAssigned:", typeof notAssigned);

//Part E
console.log("=== Variable Reassignment ===");
console.log("Original studentName:", studentName);
studentName = "Maya Fey";
console.log("Updated studentName:", studentName);

//console.log("Original age", age);
//age = 19;
//trying to change the age caused an error that states "Uncaught TypeError: Assignment to constant variable"
//This is notable considering that this error does not appear when changing the variable of my name