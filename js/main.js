// !!! ДЗ 29. Модифікувати програму інтернет-магазин

/* 
Робимо на підставі дз 26.

В праву частину з описом товару додати кнопку "купити".
При натисканні на кнопку нижче з'являється форма оформлення замовлення з наступними полями:
- ПІБ покупця
- Місто (вибір зі списку декількох міст)
- Склад Нової пошти для надсилання (числове поле)
- Спосіб оплати: післяплата або оплата на банківську картку
- Кількість продукції, що купується

Реалізувати валідацію форми за допомогою JS, щоб всі поля були заповнені.
При валідаціїї поля ПІБ видаляти зайві пробіли (за допомогою String.trim()).
Якщо дані у формі некоректні, вивести повідомлення про це під формою.
Дані замовлення зберегти у обʼєкті. До обʼєкту також додати властивості з даними про дату створення та суму замовлення.
Якщо дані у формі коректні, вивести інформацію про замовлення під формою у форматі JSON.

Підказка - щоб красиво вивести дані на сторінку можна використати тег `pre`:

 innerHTML = `<pre>${JSON.stringify(data, null, 4)}<pre>`

Щоб розрахувати суму замовлення потрібно додати властивість зі значенням ціни до кожного товару.
Щоб занадто не ускладнювати завдання будемо вважати, що замовлення може складатися лише з одного виду товару.  */

// !!! Рішення

const categories = [
  {
    id: 1,
    category: "Toys",
  },
  {
    id: 2,
    category: "Sports",
  },
  {
    id: 3,
    category: "Toys",
  },
  {
    id: 4,
    category: "Grocery",
  },
  {
    id: 5,
    category: "Garden",
  },
];

const products = [
  {
    id: 1,
    category_id: 2,
    name: "Eggplant - Asian",
    description:
      "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    price: 1.25,
  },
  {
    id: 2,
    category_id: 5,
    name: "Jagermeister",
    description:
      "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    price: 15.55,
  },
  {
    id: 3,
    category_id: 2,
    name: "Wine - Lou Black Shiraz",
    description:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    price: 6.75,
  },
  {
    id: 4,
    category_id: 3,
    name: "Beef - Ox Tongue",
    description:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    price: 2.25,
  },
  {
    id: 5,
    category_id: 3,
    name: "Beef - Bones, Marrow",
    description:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    price: 7.05,
  },
  {
    id: 6,
    category_id: 2,
    name: "Appetizer - Shrimp Puff",
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    price: 0.25,
  },
  {
    id: 7,
    category_id: 4,
    name: "Appetizer - Shrimp Puff",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    price: 9.55,
  },
  {
    id: 8,
    category_id: 1,
    name: "Ecolab - Ster Bac",
    description: "Integer ac leo. Pellentesque ultrices mattis odio.",
    price: 1.25,
  },
  {
    id: 9,
    category_id: 4,
    name: "Vegetable - Base",
    description:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    price: 6.25,
  },
  {
    id: 10,
    category_id: 3,
    name: "Flour - Corn, Fine",
    description:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    price: 4.15,
  },
  {
    id: 11,
    category_id: 1,
    name: "Beer - Guiness",
    description:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    price: 5.25,
  },
  {
    id: 12,
    category_id: 4,
    name: "Napkin White",
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    price: 4.75,
  },
  {
    id: 13,
    category_id: 2,
    name: "Oil - Truffle, White",
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    price: 3.35,
  },
  {
    id: 14,
    category_id: 5,
    name: "Wine - Puligny Montrachet A.",
    description:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    price: 1.05,
  },
  {
    id: 15,
    category_id: 5,
    name: "Tomatoes Tear Drop",
    description:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    price: 2.45,
  },
];

const categoriesList = document.querySelector("#categories");
const resultMessage = document.querySelector("#result-message");
const productsList = document.querySelector("#products");
const productDescription = document.querySelector("#description");
const button = document.querySelector("#buy-button");
const message = document.querySelector("#message");
const saveButton = document.querySelector("#save-button");
const orderProcessingForm = document.forms["orderProcessing"]

let productPrice = 0;

function showProductsList(event) {
  clearProductsList();

  let productsHtml = "";

  products.forEach((product) => {
    const {category_id, id, name} = product;
    if (category_id === Number(event.target.dataset.categoryId)) {
      productsHtml = productsHtml.concat(`<li data-product-id="${id}">${name}</li>`)
    }
  })
  productsList.innerHTML = productsHtml;
}

function clearProductsList () {
  productsList.innerHTML = "";
  productDescription.innerHTML = "";
  button.style.visibility = "hidden";
  orderProcessingForm.style.display = 'none';
  resultMessage.innerHTML = '';
}

function clearProductsDetails () {
   button.style.visibility = "visible";
  orderProcessingForm.style.display = 'none';
  resultMessage.innerHTML = '';
}

function proceedProductDetails(event) {
  products.forEach((product) => {
    const {id, description} = product;
    if (id === Number(event.target.dataset.productId)) {
      productDescription.innerHTML = description;
      productPrice = product.price;
    }
    
    clearProductsDetails();
  })
}


function handleBuyNowClick () {
  orderProcessingForm.style.display = 'block';
}

function validateForm(form) {
  const name = form["name"].value;
  const nameError = form["name"].nextElementSibling;
  nameError.style.display = 'none' 
  const delivery = form["delivery"].value;
  const deliveryError = form["delivery"].nextElementSibling;
 deliveryError.style.display = 'none';
  let isError = false;
  
  if (name.trim() === "") {
    isError = true;
    nameError.style.display = 'block';
  }
  if (delivery == "") {
    isError = true;
    deliveryError.style.display = 'block';
  }
  
  return isError
}

function handleSubmit () {
  const isError = validateForm(orderProcessingForm);
  if(isError) return null;
  
  let formData = new FormData(orderProcessingForm);
  const result =  {
     name: formData.get('name'),
     city: formData.get('city'),
     delivery: formData.get('delivery'),
     paymentMethod: formData.get('paymentMethod'),
     quantityOfProducts: formData.get('quantityOfProducts'),
     creatingDate: new Date().toLocaleString('en-us'),
     totalPrice: productPrice * Number(formData.get('quantityOfProducts')),
   };
 
  resultMessage.innerHTML = `<pre>${JSON.stringify(result, null, 4)}<pre>`
}

categoriesList.addEventListener("click", showProductsList);
productsList.addEventListener("click", proceedProductDetails);
button.addEventListener("click", handleBuyNowClick);
saveButton.addEventListener("click", handleSubmit);

let categoriesHtml = "";

categories.forEach((obj) => {
  const { id, category } = obj;
  categoriesHtml = categoriesHtml.concat(`<li data-category-id="${id}">${category}</li>`);
})

categoriesList.innerHTML = categoriesHtml;