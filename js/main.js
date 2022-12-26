// !! ДЗ 32. Promise

// ?? Завдання
// Використовуючи API https://jsonplaceholder.typicode.com/ зробити пошук поста за ід.
// Ід має бути введений в інпут (валідація: ід від 1 до 100) Якщо знайдено пост, то вивести на сторінку блок з постом і зробити кнопку для отримання комкоментарів до посту.
// Зробити завдання використовуючи проміси, перехопити помилки.

// !! Рішення

const form = document.querySelector(".form");
const formInput = document.querySelector(".form-input");
const formButton = document.querySelector(".form-button");
const err = document.querySelector(".err");
const content = document.querySelector(".content");
const comments = document.querySelector(".comments");
const commentsButton = document.querySelector(".comments-button")

formButton.addEventListener("click", search);
commentsButton.addEventListener("click", showComments); 


function clearForm () {
  err.style.display = "none";
  comments.innerHTML = "";
}

function search (e) {
  e.preventDefault();
  
  
  if (formInput.value<1 || formInput.value>100) {
    err.style.display = "block"
    setTimeout(clearForm,2000);
  }
  else {
    fetch(`https://jsonplaceholder.typicode.com/posts/${formInput.value}`)
    .then(response => response.json())
    .then(response => {
      content.innerHTML = "";
      content.innerHTML += `
      <p class="text"><span class="titel">Назва поста: </span>${response.title}</p>
      <p class="text"><span class="titel">Текст: </span>${response.body}</p>
      `
    })
    .catch((err) => console.log(err))
    clearForm();
    
    comments.style.display = "block"
    commentsButton.style.display = "block"
  }}
  
  function showComments (e) {
    e.preventDefault();
    
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${formInput.value}`)
    .then(response => response.json())
    .then(response => {

        response.forEach(element => {
        comments.innerHTML += `
        <p class="text"><span class="titel">Ім'я: </span>${element.name}</p>
        <p class="text"><span class="titel">Пошта: </span>${element.email}</p>
        <p class="text"><span class="titel">Комментар: </span>${element.body}</p>
        ________________________________________________________________________
        `
        });
    })

    .catch((err) => console.log(err))
  }
