const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const successMsg = document.getElementById("successMsg");
const form = document.getElementById("signupForm");

let isEmailValid = false;
let isPasswordValid = false;

// Email validation
emailInput.addEventListener("input", () => {
  const value = emailInput.value;

  if (value.length > 3 && value.includes("@") && value.includes(".")) {
    emailError.style.display = "none";
    isEmailValid = true;
  } else {
    emailError.style.display = "block";
    isEmailValid = false;
  }

  checkValidationStatus();
});

// Password validation
passwordInput.addEventListener("input", () => {
  const value = passwordInput.value;

  if (value.length > 8) {
    passwordError.style.display = "none";
    isPasswordValid = true;
  } else {
    passwordError.style.display = "block";
    isPasswordValid = false;
  }

  checkValidationStatus();
});

// Show green message ONLY when both are valid
function checkValidationStatus() {
  if (isEmailValid && isPasswordValid) {
    successMsg.style.display = "block";
  } else {
    successMsg.style.display = "none";
  }
}

// Submit handling
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!isEmailValid || !isPasswordValid) return;

  const confirmSubmit = confirm("Do you want to submit the form?");

  if (confirmSubmit) {
    alert("Successful signup!");
  } else {
    // Reset everything
    emailInput.value = "";
    passwordInput.value = "";
    emailError.style.display = "none";
    passwordError.style.display = "none";
    successMsg.style.display = "none";
    isEmailValid = false;
    isPasswordValid = false;
  }
});
