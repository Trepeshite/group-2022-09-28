// !!  ДЗ 22. Таблиця

// ?? Вивести на сторінку таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється за допомогою JavaScript).

// !! рішення

const container = document.querySelector (".container");
const table = document.createElement('table');
let counter = 1;
for(let i = 1; i <= 10; i++) {
  const tr = document.createElement('tr');
  for(let j = 1; j <= 10; j++) {
    const td = document.createElement('td');
    td.innerHTML = `${counter}`;
    counter++;
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
container.appendChild(table);

console.log(table);