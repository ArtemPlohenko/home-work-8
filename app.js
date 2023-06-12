/** @format */

// ---- 1 ---- //
function upperCase(str) {
  // Перевіряємо, чи починається рядок з верхнього регістру
  if (/^[A-Z]/.test(str)) {
    return "String starts with uppercase character";
  } else {
    return "String doesn't start with uppercase character";
  }
}

// Приклади використання функції
console.log(upperCase("regexp"));
console.log(upperCase("RegExp"));

// ---- 2 ---- //
function checkEmail(email) {
  const emailRegex = /^[A-Za-z\d\s @ . # $ % & ' * + - / = ? ^ _ ` { | } ~ . com]/;
  return emailRegex.test(email);
}

console.log(checkEmail("Qmail2@gmail.com"));

// ---- 3 ---- //
function removeItems(item) {
  // Метод replace() застосовує регулярний вираз до вхідного рядка та замінює його на новий рядок, де $1 відповідає першій підстрічці (Script) і $2 відповідає другій підстрічці (Java).
  const getReturn = /(\w+)\s(\w+)/;
  return item.replace(getReturn, "$2, $1");
}
console.log(removeItems("Java Script"));

// ---- 4 ---- //
function validNumber(cardNumber) {
  // Використовуємо регулярний вираз для перевірки формату номера карти
  const regex = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;
  // Видаляємо дефіси з номера картки для перевірки контрольної суми
  const withoutDash = cardNumber.replace(/-/g, "");
  if (!regex.test(cardNumber)) {
    return false; // Номер картки не відповідає формату
  }

  const sum = 0;
  const double = false;
  for (let i = withoutDash.length - 1; i >= 0; i--) {
    const digit = parseInt(withoutDash.charAt(i));

    if (double) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
  }

  return sum % 10 === 0;
}

const cardNumber = "9999-9999-9999-9999";
const isValid = validNumber(cardNumber);

console.log(isValid); // Виведе true

// ---- 5 ---- //
function checkEmailNew(email) {
  const regex = /^[A-Za-z0-9]+([-_][A-Za-z0-9]+)*@[A-Za-z0-9]+\.[A-Za-z]+$/;

  if (regex.test(email)) {
    const repeatDash = /--/.test(email);
    if (repeatDash) {
      return "Email is not correct!";
    } else {
      return "Email is correct!";
    }
  } else {
    return "Email is not correct!";
  }
}

console.log(checkEmailNew("my_mail@gmail.com")); // "Email is correct!"
console.log(checkEmailNew("#my_mail@gmail.com")); // "Email is not correct!"
console.log(checkEmailNew("my_ma--il@gmail.com")); // "Email is not correct!"

// ---- 6 ---- //
function checkLogin(login) {
  // Перевірка довжини логіна
  if (login.length < 2 || login.length > 10) {
    return false;
  }

  // Перевірка першого символу логіна
  if (/[0-9]/.test(login[0])) {
    return false;
  }

  // Знаходження чисел у рядку
  const numbers = login.match(/[0-9]+(?:\.[0-9]+)?/g);

  if (numbers !== null) {
    return numbers;
  } else {
    return false;
  }
}

// Приклади використання
console.log(checkLogin("ee1.1ret3"));
// Результат: ["1.1", "3"]

console.log(checkLogin("ee1*1ret3"));
// Результат: false
