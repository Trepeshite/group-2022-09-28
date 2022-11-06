// !! ДЗ 21. div - привид
// ???  Є текстове поле на сторінці. Під час фокусування на цьому полі збоку з'являється <div>. При пропажі фокусу - <div> так само пропадає

// !!  варіант 1 (додованням класу)

// const input = document.querySelector(".input");
// const ghost = document.querySelector(".ghost");

// const handleInputFocus = () => {
//   if(ghost.classList.contains('visible')) {
//     ghost.classList.remove('visible');
//   } else {
//     ghost.classList.add('visible');
//   }
// }

// input.addEventListener ('focus', handleInputFocus);
// input.addEventListener ('focusout', handleInputFocus);

// !!  варіант 2 (заміна стилів)

const input = document.querySelector(".input");
const ghost = document.querySelector(".ghost");

input.addEventListener ('focus', () => {
  ghost.style.visibility = 'visible'
});
input.addEventListener ('focusout', () => {
  ghost.style.visibility = 'hidden'
});