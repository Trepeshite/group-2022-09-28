// !!!  ДЗ 10. Масив
// Створити масив, довжину та елементи якого задає користувач.
// Відсортувати масив за зростанням.
// Видалити елементи з масиву з 2 по 4 (включно!).
// У міру змін виводити вміст масиву на сторінку.

// !!! Рішення

// const arrayLength = Number(prompt('Введіть довжину для масиву')); 
// if (arrayLength === 0) {
//    alert (`Ви не ввели довжину для масиву`)
// } else if(isNaN(arrayLength)) {
//    alert (`Ви ввели не числове значення для довжини масиву`)
// } else {
//    const userArray = new Array(arrayLength);
//    console.log(userArray);
   
//    for (let i=0; i<arrayLength; i++) {
//       userArray[i] = prompt('Введіть дані для масиву','');
//    };
//    console.log(`Ви ввели такі данні для масиву: ${userArray}`)
   
//    const sortedArray = userArray.sort();
//    console.log(`Відсортовані данні для масиву: ${sortedArray}`)
   
//    const slicedArray = [];
//    sortedArray.forEach((item, i) => {
//       if(i < 1 || i > 3) {
//          slicedArray.push(item);
//       }
//    })
//    console.log(`Відформатовані данні для масиву: ${slicedArray}`)
// }


   
   // !!!  ДЗ 11. Пошук у масиві
   
   // Даний масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
   

   // ??? Знайти суму та кількість позитивних елементів.
   // ???     Визначити кількість негативних елементів.
   // ???       Знайти кількість непарних позитивних елементів.
   // ???  Знайти кількість парних позитивних елементів.
   // ???  Знайти мінімальний елемент масиву та його порядковий номер.
   // ???   Знайти максимальний елемент масиву та його порядковий номер.
   
//    const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
//    let positiveNumbers = 0;
//    let negativeNumbers = 0;
//    let positiveOddNumbers = 0;
//    let positiveEvenNumbers = 0;
//    const minNumber = Math.min(...arr);
//    const minNumberIndex = arr.findIndex((number) => number === minNumber);
//    const maxNumber = Math.max(...arr);
//    const maxNumberIndex = arr.findIndex((number) => number === maxNumber);

//    const sum = arr.reduce((currentSum, number) => {
//       if (number > 0) {
//          if (number % 2 !== 0) {
//             positiveOddNumbers++;
//       } else {
//          positiveEvenNumbers++;
//       }
//       positiveNumbers++;
//       return (currentSum = currentSum + number);
//    }
//    if (number < 0) {
//       negativeNumbers++;
//    } 
   
//    return currentSum;
   
// }, 0);
// console.log(`Сума позитивних елементів ${sum}`);
// console.log(`Кількість позитивних елементів ${positiveNumbers}`);
// console.log (`Кількість негативних елементів ${negativeNumbers}`);
// console.log (`Кількість непарних позитивних елементів елементів ${positiveOddNumbers}`);
// console.log (`Кількість парних позитивних елементів елементів ${positiveEvenNumbers}`);
// console.log (`Мінімальний елемент масиву ${minNumber}, який знаходиться під індексом ${minNumberIndex}`);
// console.log (`Максимальний елемент масиву ${maxNumber}, який знаходиться під індексом ${maxNumberIndex}`);

// ???   Знайти суму парних позитивних елементів.

// const sumPositiveEvenNumbers = arr.reduce((currentSum, number) => {
//    if (number > 0 && number % 2 === 0) {
//       return (currentSum = currentSum + number);
//    }
//    return currentSum;
   
// }, 0);
// console.log(`Сума парних позитивних елементів ${sumPositiveEvenNumbers}`);

// ???  Знайти суму непарних позитивних елементів.

// const sumPositiveOddNumbers = arr.reduce((currentSum, number) => {
//    if (number > 0 && number % 2 !== 0) {
//       return (currentSum = currentSum + number);
//    }
//    return currentSum;
   
// }, 0);
// console.log(`Сума непарних позитивних елементів ${sumPositiveOddNumbers}`);

// ???  Знайти добуток позитивних елементів.

// const multPositiveNumbers = arr.reduce((currentSum, number) => {
//    if (number > 0) {
//       return (currentSum = currentSum * number);
//    }
//    return currentSum;
   
// }, 1);
// console.log(`Добуток позитивних елементів ${multPositiveNumbers}`);

// ???  Знайти найбільший серед елементів масиву, остальні обнулити.

// const mappedArr = arr.map((number) => {
//    if(number === maxNumber) {
//       return number;
//    }
//    return number * 0;
// })
// console.log (`Найбільший серед елементів масиву ${maxNumber}.Результат массиву після обнулення ${mappedArr}`);

//  !!!    ДЗ 12. Рахунки користувачів
// ???    Дан масив об'єктів. Вивести масив телефонних номерів користувачів, у яких баланс більше 2000 доларів. І знайти суму всіх балансів користувачів

let users = [
   {
   "index": 0,
   "isActive": true,
   "balance": "$2,226.60",
   "name": "Eugenia Sawyer",
   "gender": "female",
   "phone": "+1 (840) 583-3207",
   "address": "949 John Street, Rose, Puerto Rico, 1857"
   },
   {
   "index": 1,
   "isActive": true,
   "balance": "$2,613.77",
   "name": "Pauline Gallegos",
   "gender": "female",
   "phone": "+1 (985) 593-3328",
   "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
   },
   {
   "index": 2,
   "isActive": false,
   "balance": "$3,976.41",
   "name": "Middleton Chaney",
   "gender": "male",
   "phone": "+1 (995) 591-2478",
   "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
   },
   {
   "index": 3,
   "isActive": true,
   "balance": "$1,934.58",
   "name": "Burns Poole",
   "gender": "male",
   "phone": "+1 (885) 559-3422",
   "address": "730 Seba Avenue, Osage, Alabama, 6290"
   },
   {
   "index": 4,
   "isActive": true,
   "balance": "$3,261.65",
   "name": "Mcfadden Horne",
   "gender": "male",
   "phone": "+1 (942) 565-3988",
   "address": "120 Scholes Street, Kirk, Michigan, 1018"
   },
   {
   "index": 5,
   "isActive": false,
   "balance": "$1,790.56",
   "name": "Suzette Lewis",
   "gender": "female",
   "phone": "+1 (837) 586-3283",
   "address": "314 Dunne Place, Bawcomville, Guam, 9053"
   }
   ]

   // рішення

const phoneNumbersArr = [];
   users.forEach((user) => {
      const number = parseFloat(user.balance.replace(/[$,]/g,''));
      if(number >= 2000) {
         phoneNumbersArr.push(user.phone);
      }
   })
   console.log(`Масив телефонних номерів користувачів, у яких баланс більше 2000 доларів: ${phoneNumbersArr}`);

   const sum = users.reduce((currentSum, user) => {
      const number = parseFloat(user.balance.replace(/[$,]/g,''));
      return currentSum = currentSum + number;
   }, 0)
 
      console.log(`Cумa всіх балансів користувачів = ${sum}`);