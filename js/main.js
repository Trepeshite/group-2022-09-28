// !! ДЗ 30. Форма для реєстрації

// ?? Умова:
// Реалізовуємо форму для реєстрації.
// Поля:
// - Ім'я, Прізвище (Текстові поля)
// - Дата народження (Текстове поле)
// - Стать (radio)
// - Місто (select)
// - Адреса (textarea)
// - Мови, якими володіє (checkbox)
// - Кнопка “Зберегти”

// За натисканням на кнопку замість форми повинна виводитися “таблиця” з даними, які ввів користувач.

// !! Рішення
const userInformationForms = document.forms.userInformationForms;
const userInformationTable = document.querySelector("#userInformationTable");
const saveButton = document.querySelector("#saveButton");

saveButton.addEventListener("click", saveInformation);

function saveInformation(e) {
  e.preventDefault();
  userInformationForms.style.display = "none";
  const formData = new FormData(userInformationForms);
  const headersRow = document.createElement("tr");
  const valuesRow = document.createElement("tr");
  userInformationTable.appendChild(headersRow);
  userInformationTable.appendChild(valuesRow);
  const languages = [];
  for (const data of formData) {
    if (data[0] === "Language") {
      languages.push(data[1]);

      const languagesTd = document.getElementById("lang");
      if (languagesTd) {
        languagesTd.innerHTML = languages.join(",");
      } else {
        const th = document.createElement("th");
        headersRow.appendChild(th);
        th.innerHTML = data[0];
        const td = document.createElement("td");
        td.setAttribute("id", "lang");
        valuesRow.appendChild(td);
        td.innerHTML = data[1];
      }
    } else {
      const th = document.createElement("th");
      headersRow.appendChild(th);
      th.innerHTML = data[0];
      const td = document.createElement("td");
      valuesRow.appendChild(td);
      td.innerHTML = data[1];
    }
  }
}