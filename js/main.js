// !!  ДЗ 27. Перехід за посиланням

// На сторінці інпут та кнопка.
// При натисканні на кнопку - переходимо за посиланням, яке введено у інпут.
// Також треба реалізувати перевірку введеного значення, чи вказаний протокол http/https.
// Якщо протокол не вказаний - додаємо https

// !! Рішення

const input = document.querySelector("#input");
const button = document.querySelector("#button");

button.addEventListener("click", redirect);

function redirect () {
  if (input.value.includes('https://') || input.value.includes('http://')) {
    window.location = input.value;
  } else {
    window.location = `https://${input.value}`;
  }
}