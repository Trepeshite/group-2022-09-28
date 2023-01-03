
// !!! ДЗ 31. LocalStorage

/* 
Модифікувати інтернет-магазин таким чином, щоб була можливість переглянути всі збережені замовлення навіть після оновлення сторінки (використати localStorage).

На сторінці спочатку під списком категорій відображається також кнопка “Мої замовлення”.

При кліку на “Мої замовлення”:

- замість категорій відображається список усіх замовлень користувача (дата та сума)

- при кліку на замовлення в середній частині відображаються деталі замовлення.

- в правій частині відображаються дані про товар з замовлення

Також реалізувати можливість видалення замовлення зі списку. Потрібно реалізувати можливість видаляти замовлення по одному, тобто напроти кожного рядку зі збереженим заказом повинна бути кнопка для видалення цього рядку. (Підказка - можна використовувати значення Date.now() на момент збереження замовлення у якості айдішника замовлення. Потім при виведенні списка замовлень цей айдішник додати як дата атрибут. Таким чином можна буде обробляти кліки по кнопках видалення рідків з замовленнями)  */

// !!! Рішення

const categories = [
  {
    id: 1,
    category: "Toys"
  },
  {
    id: 2,
    category: "Sports"
  },
  {
    id: 3,
    category: "Toys"
  },
  {
    id: 4,
    category: "Grocery"
  },
  {
    id: 5,
    category: "Garden"
  }
];

const products = [
  {
    id: 1,
    category_id: 2,
    name: "Eggplant - Asian",
    description:
      "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    price: 1.25
  },
  {
    id: 2,
    category_id: 5,
    name: "Jagermeister",
    description:
      "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    price: 15.55
  },
  {
    id: 3,
    category_id: 2,
    name: "Wine - Lou Black Shiraz",
    description:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    price: 6.75
  },
  {
    id: 4,
    category_id: 3,
    name: "Beef - Ox Tongue",
    description:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    price: 2.25
  },
  {
    id: 5,
    category_id: 3,
    name: "Beef - Bones, Marrow",
    description:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    price: 7.05
  },
  {
    id: 6,
    category_id: 2,
    name: "Appetizer - Shrimp Puff",
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    price: 0.25
  },
  {
    id: 7,
    category_id: 4,
    name: "Appetizer - Shrimp Puff",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    price: 9.55
  },
  {
    id: 8,
    category_id: 1,
    name: "Ecolab - Ster Bac",
    description: "Integer ac leo. Pellentesque ultrices mattis odio.",
    price: 1.25
  },
  {
    id: 9,
    category_id: 4,
    name: "Vegetable - Base",
    description:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    price: 6.25
  },
  {
    id: 10,
    category_id: 3,
    name: "Flour - Corn, Fine",
    description:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    price: 4.15
  },
  {
    id: 11,
    category_id: 1,
    name: "Beer - Guiness",
    description:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    price: 5.25
  },
  {
    id: 12,
    category_id: 4,
    name: "Napkin White",

description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    price: 4.75
  },
{
    id: 13,
    category_id: 2,
    name: "Oil - Truffle, White",
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    price: 3.35
  },
  {
    id: 14,
    category_id: 5,
    name: "Wine - Puligny Montrachet A.",
    description:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    price: 1.05
  },
  {
    id: 15,
    category_id: 5,
    name: "Tomatoes Tear Drop",
    description:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    price: 2.45
  }
];

const categoriesList = document.querySelector("#categories");
const productsList = document.querySelector("#products");
const productDescription = document.querySelector("#description");
const buyButton = document.querySelector("#buy-button");
const orderForm = document.querySelector("#order-form");
const saveButton = document.querySelector("#save-button");
const myOrdersButton = document.querySelector("#my-orders-btn");
const myOrdersList = document.querySelector("#my-orders-list");
const orderDetailsList = document.querySelector("#order-details");
const backButton = document.querySelector("#back-btn");
const aboutProduct = document.querySelector("#about-product");
const thanksMessage = document.querySelector("#thanks-message");
const orderProcessingForm = document.forms["orderProcessing"];

let productId = '';
let productPrice = 0;

function showCategoriesList() {
  categoriesList.style.display = "block";
  let categoriesHtml = "";

  categories.forEach((obj) => {
    const { id, category } = obj;
    categoriesHtml = categoriesHtml.concat(
      `<li data-category-id="${id}">${category}</li>`
    );
  });
  
  categoriesList.innerHTML = categoriesHtml; 
};

function showProductsList(event) {
  clearProductsList();

  let productsHtml = "";

  products.forEach((product) => {
    const { category_id, id, name } = product;
    if (category_id === Number(event.target.dataset.categoryId)) {
      productsHtml = productsHtml.concat(
        `<li data-product-id="${id}">${name}</li>`
      );
    }
  });
  productsList.innerHTML = productsHtml;
};

function clearProductsList() {
  productsList.innerHTML = "";
  productDescription.innerHTML = "";
  buyButton.style.display = "none";
  orderForm.style.display = "none";
  thanksMessage.style.display = "none";
};

function showProductDetails(event) {
  products.forEach((product) => {
    const { id, description } = product;
    if (id === Number(event.target.dataset.productId)) {
      productId = id;
      productDescription.innerHTML = description;
      productPrice = product.price;
      buyButton.style.display = "block";
    }

      buyButton.style.display = "block";
      orderProcessingForm.style.display = "none";
  });
};

function handleBuyNowClick() {
  orderForm.style.display = "block";
  orderProcessingForm.style.display = "block";
  
};

function validateForm(form) {
  const name = form["name"].value;
  const nameError = form["name"].nextElementSibling;
  nameError.style.display = "none";
  const delivery = form["delivery"].value;
  const deliveryError = form["delivery"].nextElementSibling;
  deliveryError.style.display = "none";
  let isError = false;

  if (name.trim() === "") {
    isError = true;
    nameError.style.display = "block";
  }
  if (delivery == "") {
    isError = true;
    deliveryError.style.display = "block";
  }

  return isError;
};

function handleSubmit() {
  const isError = validateForm(orderProcessingForm);
  if (isError) return null;

  let formData = new FormData(orderProcessingForm);
  const orderId = Date.now();
  const result = {
    productId,
    id: orderId,
    name: formData.get("name"),
    city: formData.get("city"),
    delivery: formData.get("delivery"),
    paymentMethod: formData.get("paymentMethod"),
    quantityOfProducts: formData.get("quantityOfProducts"),
    creatingDate: new Date().toLocaleString("en-us"),
    totalPrice: productPrice * Number(formData.get("quantityOfProducts"))
  };
  localStorage.setItem(orderId, JSON.stringify(result));

  finishOrder();

};

function openMyOrders() {
  clearProductsList();

  myOrdersButton.style.display = 'none';
  categoriesList.style.display = 'none';
  backButton.style.display = 'block';
  
  Object.keys(localStorage).forEach(function(key){
    const order = JSON.parse(localStorage.getItem(key));
    const orderItem = document.createElement('li');
    orderItem.setAttribute("id", key);
    orderItem.innerHTML = `${order.creatingDate} - ${order.totalPrice}$`;
    const deleteButton = document.createElement('span');
    deleteButton.innerHTML = 'X';
    deleteButton.setAttribute("class", "delete-button");
    deleteButton.addEventListener('click', deleteOrder);
    orderItem.appendChild(deleteButton);
    myOrdersList.appendChild(orderItem);
});
};

function deleteOrder(e) {
  e.stopPropagation();
  localStorage.removeItem(e.target.parentElement.id);
  e.target.parentElement.remove();
  orderDetailsList.innerHTML='';
  aboutProduct.innerHTML='';
  orderDetailsList.style.display = 'none';
  aboutProduct.style.display = 'none';
};

function showOrderDetails(e) {
  orderDetailsList.innerHTML='';
  aboutProduct.innerHTML='';
  aboutProduct.style.display='block';
  orderDetailsList.style.display='block';
  const orderDetails = JSON.parse(localStorage.getItem(e.target.id));
  const paragraph = document.createElement('p');
  console.log(orderDetails);
  paragraph.innerHTML = `
  <p class="text"><span class="titel">ПІБ покупця: </span>${orderDetails.name}</p>
  <p class="text"><span class="titel">Місто: </span>${orderDetails.city}</p>
  <p class="text"><span class="titel">Склад "Нової Пошти" для надсилання: № </span>${orderDetails.delivery}</p>
  <p class="text"><span class="titel">Спосіб оплати: </span>${orderDetails.paymentMethod}</p>
  <p class="text"><span class="titel">Кількість продукції, що купувалась: </span>${orderDetails.quantityOfProducts}шт.</p>
  `;
  orderDetailsList.appendChild(paragraph);
  
  products.forEach((element)=>{
    if (element.id === orderDetails.productId) {
      aboutProduct.innerHTML += `
      <p class="text"><span class="titel">Назва товару: </span>${element.name}</p>
      <p class="text"><span class="titel">Опис товару: </span>${element.description}</p>
      `;
    }
  });
};

function returnToCategories (){
  backButton.style.display = 'none';
  myOrdersList.innerHTML = '';
  orderDetailsList.innerHTML = '';
  aboutProduct.innerHTML='';
  orderDetailsList.style.display = 'none';
  aboutProduct.style.display = 'none';
  myOrdersButton.style.display = 'block';
  showCategoriesList();
};

function finishOrder () {
  thanksMessage.style.display = "block";
  setTimeout (clearProductsList,1000);
  orderProcessingForm.reset()
};

categoriesList.addEventListener("click", showProductsList);
productsList.addEventListener("click", showProductDetails);
buyButton.addEventListener("click", handleBuyNowClick);
saveButton.addEventListener("click", handleSubmit);
myOrdersButton.addEventListener("click", openMyOrders);
myOrdersList.addEventListener("click", showOrderDetails);
backButton.addEventListener("click", returnToCategories);

showCategoriesList();


