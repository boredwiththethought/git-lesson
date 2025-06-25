
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const registerButton = document.querySelector(".btn-register button");

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  return password.length >= 8;
}

registerButton.addEventListener("click", (event) => {
  event.preventDefault();
  const name = nameInput?.value.trim();
  const email = emailInput?.value.trim();
  const password = passwordInput?.value.trim();

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

  const userData = {
    name,
    email,
    password,
  };

  console.log("Пользователь зарегистрирован:", userData);

  if (!nameInput || !emailInput || !passwordInput || !registerButton) {
    console.error("Не удалось найти один или несколько элементов формы.");
    return;
  }
  try {
    registerButton.addEventListener("click", (event) => {
      // Ваш код
    });
  } catch (error) {
    console.error("Ошибка при обработке события:", error);
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";

  alert("Регистрация прошла успешно!");
});
