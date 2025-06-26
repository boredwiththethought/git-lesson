// DOM Elements
const nameInput = document.getElementById("name") as HTMLInputElement | null;
const emailInput = document.getElementById("email") as HTMLInputElement | null;
const passwordInput = document.getElementById("password") as HTMLInputElement | null;
const registerButton = document.querySelector(".btn-register button") as HTMLButtonElement | null;

// Utility function to validate email format
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Utility function to validate password strength
function validatePassword(password: string): boolean {
  return password.length >= 8; // Example: Password must be at least 8 characters
}

// Event listener for the register button
registerButton?.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form submission

  // Ensure inputs exist
  if (!nameInput || !emailInput || !passwordInput) {
    console.error("Не удалось найти один или несколько элементов формы.");
    return;
  }

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Validate inputs
  if (!name) {
    alert("Введите имя.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Введите корректный email.");
    return;
  }

  if (!validatePassword(password)) {
    alert("Пароль должен быть не менее 8 символов.");
    return;
  }

  // Simulate registration logic (e.g., sending data to a server)
  const userData = {
    name,
    email,
    password,
  };

  console.log("Пользователь зарегистрирован:", userData);

  // Clear inputs after successful registration
  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";

  alert("Регистрация прошла успешно!");
});