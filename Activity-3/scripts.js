console.log ("=== Activity 3: Dynamic Greeting Card ===");

// Part A
console.log(" === DOM SELECTION DEMONSTRASTIONS");
//DOM is the Document Object Model, this is accessed with document.
//This can be used to access HTML elements as seen below
const greetingMessage = document.getElementById("greeting-message");
const greetingImage = document.getElementById("greeting-image");
const nameInput = document.getElementById("nameInput");

console.log ("Selected greeting message element:", greetingMessage);
console.log ("Selected greeting image element:", greetingImage);
console.log ("Selected greeting input element:", nameInput);

//querySelector returns the first element that matches a css selector
//These two return the .card-container class and the button element
const cardContainer = document.querySelector(".card-container");
const firstButton = document.querySelector("button");

console.log ("Selected card container:" , cardContainer);
console.log("First button found:" , firstButton);

//querySelectorAll returns all the elements that matches a css selector
const allButtons = document.querySelectorAll("button");
//.length gives the amount of buttons the querySelectorAll found
console.log(`Found ${allButtons.length} buttons`, allButtons);

// Part B
console.log("\n === CONTENT MODIFICATION DEMONSTRATIONS ===");

//This log uses the const defined earlier using the DOM selector
console.log("Original message textContent:", greetingMessage.textContent)
console.log ("Original image alt attribute:", greetingImage.getAttribute("alt"))


// Part C
console.log ("\n === ATTRIBUTE MODIFICATION DEMONSTARTIONS");

//Uses the const defined earlier again using the DOM selector
console.log("Current image src:" , greetingImage.getAttribute("src"));
console.log("Image has 'src' attribute:", greetingImage.hasAttribute("src"));

// This const contains the dynamic greeting cards
// This changes the message, image, and alt
const greetings = {
    birthday: {
        message: "Happy Birthday!",
        image: 
        "https://fastly.picsum.photos/id/997/200/200.jpg?hmac=J9wMccIJgdwcAV_BlxcoN1N_oKWGt4Wb8EqkKqp-4gE"
        ,
        alt: "Birthday celebration greeting"
    },
    holiday: {
        message: "Happy Holidays!",
        image:
        "https://fastly.picsum.photos/id/791/200/200.jpg?hmac=bPVayqOX5aUzsnsX99AgWaxWB3WzWqwaiSDJ-lNHUk4"
        ,
        alt: "Holiday celebration greeting"
    },
    thankYou:{
        message: "Thank You!",
        image:
        "https://fastly.picsum.photos/id/468/200/200.jpg?hmac=ebOvOZemklGsjJmYIRJ4_YWUDCNNpt5bE0B7EjYJfEA"
        ,
        alt: "Thank you celebration"
    },
    welcome: {
        message: "Welcome!",
        image:
        "https://fastly.picsum.photos/id/723/200/200.jpg?hmac=_sO25hgEAx99R1W5nOFsCmrSDTpHGmXIEXDywKpjfXE"
        ,
        alt: "Welcome greeting"
    }
};

// Part D
console.log ("\n === GREETING CARD FUNCTIONS === ");

//This function helps write the console the updated information
function updateGreeting(type) {
const greeting = greetings[type];
    if (greeting) {
        greetingMessage.textContent = greeting.message;

        greetingImage.setAttribute("src", greeting.image);
        greetingImage.setAttribute("alt", greeting.alt);

        console.log(`Updated greeting to: ${type}`);
        console.log(`Message: ${greeting.message}`);
        console.log(`Image:${greeting.image}`);
        console.log(`Image alt: ${greeting.alt}`);
    } else {
        console.error(`Greeting type "${type}" not found`);
    }
}

//These refer back to the functions set up in the HTML
//These use the const Greetings on line 45 information to update the information
function setBirthdayGreeting(){
    updateGreeting("birthday");
}
function setHolidayGreeting(){
    updateGreeting("holiday");
}
function setThankYouGreeting(){
    updateGreeting("thankYou")
}
function setWelcomeGreeting(){
    updateGreeting("welcome")
}
//Selects a random greeting
function setRandomGreeting(){
    const types =Object.keys(greetings);
    const randomType = types[Math.floor (Math.random() * types.length)];
    updateGreeting(randomType);
    console.log (`Random greeting selected: ${randomType}`);
}

// Part E
function personalizeGreeting(){
   const name = nameInput.value.trim();

//This is to prevent nothing from entering the name input
//It is also written to the console if this happens
if (name === "") {
    alert("Please enter a name to personalize the greeting!");
    console.log("Personalization attempted with empty name");
    return;
}
//This formats the entered name
    const currentMessage = greetingMessage.textContent;
    const personalizedMessage = `${currentMessage}\n\nDear ${name}!`;

    greetingMessage.innerHTML = personalizedMessage.replace('\n\n' , '<br><br>');

    console.log (`Personalized greeting for: ${name}`);
    console.log(`Full message: ${personalizedMessage}`);

    nameInput.value= " ";
}
//Replaces the empty <div> in the HTML document
document.getElementById("output").innerHTML = `
    <h3>DOM Manipulation Demo Loaded!</h3>
    <p>Successfully selected and ready to manipulate DOM elements</p>
    <p>Check the console for detailed demonstrations of DOM operations</p>
`;

console.log("Dynamic Greeting Card application loaded successfully!");
