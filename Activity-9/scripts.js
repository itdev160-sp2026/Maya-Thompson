// Activity 9: Contact Form Validation
// This file demonstrates form handling and validation techniques

console.log("=== Activity 9: Contact Form Validation ===");

// Get form reference
const contactForm = document.getElementById("contactForm");

// Application state for validation
const validationState = {
  name: false,
  email: false,
  message: false,
};

// Validation pattern 
// This pattern is looking for a series of characters that is then separated
//by the @ symbol and then a . so what is entered follows the pattern of an email
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Part A 
// these functions check the users input for all the fields and validates them
// if they enter nothing, the wrong format for the email, or something shorter
// than 10 characters for the message then an error is shown and the form is not
// able to be submitted
function validateName(value) {
  const trimmedValue = value.trim();

  if (trimmedValue.length === 0) {
    return {
      isValid: false,
      message: "Name is required.",
    };
  }

  console.log("Validating name: \u2713 Valid");
  return {
    isValid: true,
    message: "",
  };
}

function validateEmail(value) {
  const trimmedValue = value.trim();

  if (trimmedValue.length === 0) {
    return {
      isValid: false,
      message: "Email address is required.",
    };
  }

  if (!emailPattern.test(trimmedValue)) {
    return {
      isValid: false,
      message: "Please enter a valid email address.",
    };
  }

  console.log("Validating email: \u2713 Valid");
  return {
    isValid: true,
    message: "",
  };
}

function validateMessage(value) {
  const trimmedValue = value.trim();

  if (trimmedValue.length === 0) {
    return {
      isValid: false,
      message: "Message is required.",
    };
  }

  if (trimmedValue.length < 10) {
    return {
      isValid: false,
      message: "Message must be at least 10 characters long.",
    };
  }

  console.log("Validating message: \u2713 Valid");
  return {
    isValid: true,
    message: "",
  };
}

// Part B 
function showValidationMessage(fieldName, validation) {
  const errorElement = document.getElementById(`${fieldName}Error`);
  const inputElement = document.getElementById(fieldName);

  // Clear previous state
  errorElement.classList.remove("show");
  inputElement.classList.remove("valid", "invalid");

  if (!validation.isValid && validation.message) {
    errorElement.textContent = validation.message;
    errorElement.classList.add("show");
    inputElement.classList.add("invalid");
  } else if (validation.isValid) {
    inputElement.classList.add("valid");
  }
}

function validateField(fieldName, value) {
  let validation;

  switch (fieldName) {
    case "name":
      validation = validateName(value);
      break;
    case "email":
      validation = validateEmail(value);
      break;
    case "message":
      validation = validateMessage(value);
      break;
    default:
      console.warn(`Unknown field: ${fieldName}`);
      return false;
  }

  validationState[fieldName] = validation.isValid;
  showValidationMessage(fieldName, validation);
  updateSubmitButton();

  return validation.isValid;
}

function updateSubmitButton() {
  const submitBtn = document.getElementById("submitBtn");
  const isFormValid = Object.values(validationState).every(
    (isValid) => isValid
  );

  submitBtn.disabled = !isFormValid;

  console.log("Form validation state:", validationState);
  console.log("Form is valid:", isFormValid);
}

// Event listeners for real-time validation
function setupValidationListeners() {
  console.log("Setting up validation event listeners...");

  // Text inputs and textarea
  ["name", "email", "message"].forEach((fieldName) => {
    const element = document.getElementById(fieldName);

    element.addEventListener("input", (e) => {
      console.log(`Input event on ${fieldName}:`, e.target.value);
      validateField(fieldName, e.target.value);
    });

    element.addEventListener("blur", (e) => {
      console.log(`Blur event on ${fieldName}:`, e.target.value);
      validateField(fieldName, e.target.value);
    });
  });
}

// Part C
function handleFormSubmit(e) {
  e.preventDefault();
  console.log("\n=== FORM SUBMISSION ATTEMPT ===");

  // Hide previous success message
  document.getElementById("formSuccess").classList.add("hidden");

  // Validate all fields
  const formData = new FormData(contactForm);
  let isFormValid = true;

  ["name", "email", "message"].forEach((fieldName) => {
    const value = formData.get(fieldName) || "";
    if (!validateField(fieldName, value)) {
      isFormValid = false;
    }
  });

  if (isFormValid) {
    console.log("\u2713 Form validation successful!");

    // Log form data
    console.log("Form data:");
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    // Show success message
    document.getElementById("formSuccess").classList.remove("hidden");
  }
}

// Initialize application
contactForm.addEventListener("submit", handleFormSubmit);
setupValidationListeners();
updateSubmitButton();

console.log("Contact Form Validation application initialized!");
console.log("Try filling out the form and see real-time validation in action!");
