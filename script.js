console.log("Landing page loaded!");

const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const successMessage = document.getElementById("success-message");

const showError = (input, message) => {
  const error = input.parentElement.querySelector(".error");
  error.textContent = message;
};

const clearError = (input) => {
  const error = input.parentElement.querySelector(".error");
  error.textContent = "";
};

const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const isValidPhone = (phone) =>
  /^\+?[0-9]{10,15}$/.test(phone);

const isStrongPassword = (password) =>
  password.length >= 6;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  if (nameInput.value.trim() === "") {
    showError(nameInput, "Name is required.");
    valid = false;
  } else {
    clearError(nameInput);
  }

  if (!isValidEmail(emailInput.value)) {
    showError(emailInput, "Enter a valid email.");
    valid = false;
  } else {
    clearError(emailInput);
  }

  if (!isValidPhone(phoneInput.value)) {
    showError(phoneInput, "Enter a valid phone number.");
    valid = false;
  } else {
    clearError(phoneInput);
  }

  if (!isStrongPassword(passwordInput.value)) {
    showError(passwordInput, "Password must be at least 6 characters.");
    valid = false;
  } else {
    clearError(passwordInput);
  }

  if (valid) {
    successMessage.textContent = "Form submitted successfully!";
    form.reset();
  } else {
    successMessage.textContent = "";
  }
});

// Real-time validation
[nameInput, emailInput, phoneInput, passwordInput].forEach((input) => {
  input.addEventListener("blur", () => {
    if (input.value.trim() === "") {
      showError(input, `${input.previousElementSibling.textContent} is required.`);
    } else {
      clearError(input);
    }
  });

  input.addEventListener("input", () => {
    clearError(input);
  });
});

const countDisplay = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

let count = 0;

function updateDisplay() {
  countDisplay.textContent = count;
}

incrementBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});

decrementBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateDisplay();
  }
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});
