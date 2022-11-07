// !!  ДЗ 24. Слайдер базовий

// Пишемо свій слайдер зображень.
// На сторінці є зображення та кнопки Next, Prev з боків від зображення.
// При кліку на Next - показуємо наступне зображення.
// При кліку на Prev - попереднє.
// При досягненні останнього зображення - ховати кнопку Next. Аналогічно з першим зображенням і кнопкою Prev.

// !!  Рішення

// пробував мінімум змінювати код html (поставив класи на buttons і поставив max-width на зображення, бо №6 - велике) і все робитии в js. бо можна ще зробити пару div і пити іншим шляхом

document.querySelector(".previousButton").style.visibility = 'hidden'

const pictures = ["img/dog1.jpeg", "img/dog2.jpeg", "img/dog3.jpeg", "img/dog4.jpeg", "img/dog5.jpeg", "img/dog6.jpeg"];

console.log(pictures.length);

document.querySelector(".previousButton").addEventListener ('click', slidePrevious);
document.querySelector(".nextButton").addEventListener ('click', slideNext);

let currentSlide = 0;

function slidePrevious () {
  if (currentSlide === 1) {
    document.querySelector(".previousButton").style.visibility = 'hidden'
  }
  if (currentSlide === pictures.length-1) {
    document.querySelector(".nextButton").style.visibility = 'visible'
  }
  currentSlide--;
  document.querySelector("div.container > img").src = pictures[currentSlide];
  document.querySelector("div.container > img").alt = `dog${currentSlide+1}`;
}

function slideNext () {
  if (currentSlide === pictures.length-2) {
    document.querySelector(".nextButton").style.visibility = 'hidden'
  }
  if (currentSlide === 0) {
    document.querySelector(".previousButton").style.visibility = 'visible'
  }
  currentSlide++;
  document.querySelector("div.container > img").src = pictures[currentSlide];
  document.querySelector("div.container > img").alt = `dog${currentSlide+1}`;
}