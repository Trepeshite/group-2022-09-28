/*
проба коментаря 1

*/

// проба коментаря 2


// alert("У вас все добре?");                 //проба функції alert


// let film= prompt("Ваше враження про фільм Гранд Будапешт",'');                 //проба функції prompt
// console.log('Зрозуміло, ваше враження про фільм - ',film +'. Дякую за ваш відгук.');


// let sex= confirm("Ви чоловік?",'');                 //проба функції confirm
// console.log("Якщо чоловік - true, якщо жінка - false. Ваша відповідь - ",sex);




//                урок 2
//              завдання 1 

alert("Урок №2. Завдання №1");

let userName = prompt("Введіть ваше ім'я");                 //дані №1 від юзера 
let userBirthday = prompt("Введіть дату вашого народження");                 //дані №2 від юзера 
let userProfession = prompt("Введіть назву вашою роботии");                 //дані №3 від юзера 
console.log("!!!   Завдання №1   !!!");
console.log("Доброго дня ",userName + ". Бачу, що ваш день народження " + userBirthday + ". Цікаво, а як празднують свій день народження " + userProfession + "?");



//               завдання 2

alert("Урок №2. Завдання №2");
console.log("!!!   Завдання №2   !!!");
const userNumber = prompt("Введіть п'ятизначне число");
console.log("Ви ввели число - ",userNumber);
const userNumberSplit = userNumber.split('');
console.log("Нове число через пропуски - ",userNumberSplit.join(' '));

//               !!!     я забув вписати змінии в нову ветку, тому зроблю це вже на наступне заняття            !!!
