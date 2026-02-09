console.log("=== Activity 2: Operators and Control Flow ===")

// Part A
// \n puts a newline into the console
console.log("\n== ARITHMETIC OPERATORRS ===")
//This sets the value of the variables
let a = 12;
let b = 3;
//The first Console.log logs into the console the values of the set variables
//The rest of the Console.logs are the arithmetic perations
console.log(`a = ${a}, b = ${b}`);
console.log(`Addition (a + b): ${a + b}`);
console.log(`Subtraction (a - b): ${a - b}`);
console.log(`Multiplication (a * b): ${a * b}`);
console.log(`Division (a / b): ${a / b}`);
console.log(`Modulus (a % b): ${a % b}`);
//These last 2 of part A shows the difference of order of operation with and
//without the use of parentheses
console.log(`Operation Precendence: (a + b) - (b * a) + (a / b) * (b - a)
   ${(a + b)-(b * a) + (a / b) * (b - a)}`);

   console.log(`Operation Precendence: a + b - b * a + a / b * b - a
   ${a + b - b * a  +  a / b  *  b - a }`);

//Part B


console.log("\n=== COMPARISON OPERATORS ===");
//While x and z are numbers, y is considered a string due 
//to the value being inputed between double quotes
let x = 5;
let y = "5";
let z = 10;
//Logs into the console the value of the variables
console.log(`x = ${x} (number), y = "${y}" (string), z = ${z} (number)`);

//These 4 operations show the difference between loose and strict comparisons
//While y is a string, in loose comparisons it is treated the same as x
//However is strict comparisons it is viewed as a string and therefore differently than x
console.log(`x == y: ${x == y} (loose equality)`);
console.log(`x === y: ${x === y} (strict equality)`);
console.log(`x != y: ${x != y} (loose inequality)`);
console.log(`x !== y: ${x !== y} (strict inequality)`);

console.log(`x > z: ${x > z}`);
console.log(`x >= 5: ${x >= 5}`);
console.log(`y <= 5: ${x <= 5}`);
console.log(`y < z ${y <z }`);

//Part C
console.log("\n=== LOGICAL OPERATORS ===");
let isPink = true;
let isRound = false
let amount = 4;
//Logs into the console the value of variables
console.log(`isPink = ${isPink}, isRound = ${isRound}, amount = ${amount}`)
//Logical operators AND, OR, and, NOT as well as a compound condition
console.log(`isPink && isRound: ${isPink && isRound} (AND - both must be true)`);
console.log(`isPink || isRound: ${isPink || isRound} (OR - one must be true)` );
console.log(`!isRound: ${!isRound} (NOT - opposite value of isRound)`);
console.log(`amount >=8 && amount <2: ${amount >= 8 && amount <2} (compound condition)`);


//Part D
console.log("\n=== CONDITIONAL STATEMENTS ===");
let score = 75;
//These are if else statements which check if whatever is in the if statement is true
//if it is true what is in that statement is executed
//if not it goes to an else statement which is then executed
//The else statement can be followed by another if statement
//if none of the if statements are true it executes whatever is in the last else statemnet
console.log(`Score=${score}`)
if (score>90) {
    console.log("Grade: A - Excellent!");
} else if (score >=80) {
    console.log("Grade B - Good job!")
} else if (score >=70) {
    console.log("Grade: C")
} else if (score >=60) {
    console.log("Grade D -");
} else {
    console.log("Grade F -")
}

//Part E
console.log("\n=== SWITCH STATEMENT ===");
let dayOfWeek = 0;
//Switch statements check if the value of the switch is equal to the case
//if said value is equal to the case, that case is executed
console.log(`Day number: ${dayOfWeek}`);
//This switch is of the variable dayOfWeek which is equal to 0 and therefore
//executes case 0
switch (dayOfWeek) {
  case 0:
    console.log("Today is Sunday - Weekend!");
    break;
  case 1:
    console.log("Today is Monday - Start of work week");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday - Hump day!");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday - TGIF!");
    break;
  case 6:
    console.log("Today is Saturday - Weekend!");
    break;
    //This default shows whenever the switch value is not equal to any case
  default:
    console.log("Invalid day number");
}


//Part F
document.getElementById("output").innerHTML = 
"<h3>Check the console for operator demonstrations!</h3>";