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
