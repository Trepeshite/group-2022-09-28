// !!  ДЗ 23. Виведення зображень
// ??  У папці `img` є зображення.
// ??  При кожному завантаженні сторінки повинно виводитися випадково обране зображення.

// !!  Рішення

const pictures = ["img/dog1.jpeg", "img/dog2.jpeg", "img/dog3.jpeg", "img/dog4.jpeg", "img/dog5.jpeg", "img/dog6.jpeg"];
const randomNumber = Math.floor(Math.random() * pictures.length);
document.querySelector("div.wrapper>img").src = pictures[randomNumber];
document.querySelector("div.wrapper>img").alt = `dog${pictures[randomNumber].slice(7,8)}`;