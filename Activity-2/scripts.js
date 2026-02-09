console.log("AGE CHECKER:")
function checkAge() {
const ageInput = document.getElementById("ageInput");
const resultDiv = document.getElementById("result")
const inputValue = ageInput.value.trim();


//This console.log puts into the console what the user put into the input field

console.log(`User input: "${inputValue}"`);

resultDiv.classname = "";

//This checks for if the input field has anything in it and
//if it does not it returns as invalid
 if (inputValue === "") {
    resultDiv.textContent = "Please enter your age";
    resultDiv.className = "invalid";
    console.log("Result: Empty input");
    return;
  }
 //Converts the inputValue into age which is a number
  const age = Number(inputValue)

  //NaN stands for Not a Number
  if(isNaN(age)) {
    resultDiv.textContent = "Invalid age - please enter a number";
    resultDiv.className = "invalid";
    console.log("Result: Not a number")
    return;
  }
//This uses the OR opertation as only one of these must be true
  if (age < 0 || age > 150) {
    resultDiv.textContent = "Invalid age - please enter a realistic age (0-150)";
    resultDiv.className = "invalid";
    console.log ("Result: age out of range");
    return;
  } //The if checks for any number that is 18 OR above 
   if (age >= 18) {
    resultDiv.textContent = `You are ${age} years old - You are an adult`;
    resultDiv.className = "adult";
    console.log(`Result: Adult (age: ${age})`);
  } else { //The else checks for any other number that wasn't already determined invalid
    resultDiv.textContent = `You are ${age} years old - You are a minor`;
    resultDiv.className = "minor";
    console.log(`Result: Minor (age: ${age})`);
  }
    //All console.logs log into the console about the information the user 
    //has entered and their results like minor, adult, and invalid(reason)


}
