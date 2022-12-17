// ДЗ 34. Ajax Weather

// ?? Задача

// За допомогою ajax-запиту вивести погоду
// Request URL:
// http://api.openweathermap.org/data/2.5/weather?q=LVIV&ç=metric&APPID=5d066958a60d315387d9492393935c19

// q=XXX - місто, для якого показати погоду
// units=metric - ми хочемо отримати градуси Цельсія, метри на секунду, а не Фаренгейта та фути
// APPID=5d066958a60d315387d9492393935c19 - треба використовувати цей ключ, щоб отримати відповідь

// Потрібно вивести наступні дані:

// temp – температура
// pressure - тиск
// description – опис
// humidity – вологість
// speed – швидкість вітру
// deg - напрям у градусах
// icon - це назва файлу з іконкою, яка символізує поточну погоду

// Шлях до файлу з іконкою формується наступним чином:
// const imgUrl = `http://openweathermap.org/img/w/${icon}.png`
// Документація по API:
// https://openweathermap.org/current */

// !! Рішення

const form = document.querySelector(".form");
const formInput = document.querySelector(".form-input");
const content = document.querySelector(".content");
const button = document.querySelector(".form-button");
form.addEventListener("submit", search);

function search(e) {
  e.preventDefault();

  form.style.display = "none";

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${formInput.value}&units=metric&APPID=5d066958a60d315387d9492393935c19`
  )
    .then((res) => res.json())
    .then((res) => {
      content.innerHTML += ` 
    <h2>Місто: ${res.name}<img
     src="http://openweathermap.org/img/w/${res.weather.at(0).icon}.png"
     alt="weather"></h2>
    <h3>Температура: ${res.main.temp}°C
    <h3>Тиск: ${res.main.pressure}hPa
    <h3>Oпис: ${res.weather.at(0).description}
    <h3>Вологість: ${res.main.humidity}%
    <h3>Швидкість вітру: ${res.wind.speed}м/с
    <h3>Напрям у градусах: ${res.wind.deg}°
    `;
    });
}
