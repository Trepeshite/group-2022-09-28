// !!   ДЗ 13. Реалізуйте функцію removeElement
// ??  Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.



// !! Рішення

// function removeElement(array, item) {
//    while(array.includes(item)) {
//       const i = array.indexOf(item);
//       array.splice(i,1);
//    }
// }

// let array = prompt('Введіть данні для масиву через ","','');


// if (array === null) {
//    alert(`Ви нажали - відміну`);
// } else {
//    const el = prompt('Введіть елемент, який потрібно видалити','');
//    const userArray = array.split(',');
   
//    removeElement(userArray,el);

//    console.log(`Результат видалення елементу з массиву = ${userArray}`);
// }

// !!!  ДЗ 14. Реалізуйте функцію generateKey
// ???  Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length.

/* const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i  */

// !!  рішення

// function getRandomIntInclusive(min, max) {
//    min = Math.ceil(min);
//    max = Math.floor(max);
//    return Math.floor(Math.random() * (max - min + 1)) + min;
//  }

// function generateKey (length, characters) {
//    let key = '';
//    for (let i = 1; i <= length; i++) {
//       const randomSymbol = characters[getRandomIntInclusive(0,characters.length-1)]
//       key = key.concat(randomSymbol)
//    }

//    return key;
// }

// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

// const length = Number(prompt('Введіть довжину ключа'));
// if (length === 0 || isNaN(length)) {
//    console.log('Ви не ввели довжину ключа')
// } else {
//    console.log(`Рядок випадкових символів із набору : ${generateKey(length,characters)}`);
// }

//  !!  ДЗ 15. Написати кілька функцій
//  ??  Ця дз складається з чотирьох невеликих завдань, за реалізацію кожної з них можна отримати 25 балів:

// !! Рішення 
// ?? Дан масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

// const array = [true, 1,'number', false,3,4,2,];

// function averageСost(array) {
//    let numberArray = [];
//    array.forEach(element => {
//       if (typeof element === 'number') {
//          numberArray.push(element);
//       }
//    });
//    return numberArray.reduce((sum, number) => sum + number, 0) / numberArray.length; 
// }

// console.log(`Cереднє арифметичне числових елементів даного масиву array ${averageСost(array)}`);

//  ?? Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. 
// ??  У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

// !!! Рішення

// function doMath (x, znak, y) {
//    if (typeof x !== "number" || typeof y !== "number") {
//       return console.log ('Параметри являються не числом')
//    }
//    switch (znak) {
//       case '+':
//          return x + y;
//          break;
//       case '-':
//          return x - y;
//          break;
//       case '*':
//          return x * y;
//          break;
//       case '/':
//          return x / y;
//          break;
//       case '%':
//          return x % y;
//          break;
//       case '^':
//          return Math.pow(x,y);
//          break;
//       default:
//        console.log('Ви ввели операцію, яка не підтримується');
//    }
// }

// console.log (`5+4=${doMath (5,'+',4)}`);
// console.log (`5-4=${doMath (5,'-',4)}`);
// console.log (`5*4=${doMath (5,'*',4)}`);
// console.log (`5/4=${doMath (5,'/',4)}`);
// console.log (`5%4=${doMath (5,'%',4)}`);
// console.log (`5^4=${doMath (5,'^',4)}`);

// ?? Написати функцію заповнення даними користувача двомірного масиву. 
// ?? Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

// !!! Рішення
// function createNestedUserArray () {
//    const arrayLenght = Number(prompt('Введіть довжину масиву'));

//    if (arrayLenght === 0 || isNaN(arrayLenght)) {
//       console.log('Ви не ввели довжину масиву')
//    } else {
//       const mainArray = [];

//       for(let i = 0; i < arrayLenght; i++) {
//          const userData = prompt(`Введіть дані через "," для ${i+1} вложенного масиву`); 
//          const userArray = userData.split(',');
//          mainArray.push(userArray);
//       }
//        return console.log(mainArray);
//    }
// }

// createNestedUserArray();

// ??  Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". 
// ??  Вихідний рядок та символи для видалення задає користувач

// !!! Рішення

// function removeSymbols (string='',symbolsArray=[]) {
//    let result = [];
//    const arr = string.split('');
//    arr.forEach((element) => {
//       if (!symbolsArray.includes(element)) {
//          result.push(element)
//       }
//    });
//    return console.log(`Результат видалення символів ${userSymbolsArray} з рядка ${userString} - ${result.join('')}`);
// }

// const userString = prompt('Введіть рядок');
// const userData = prompt('Введіть символи для видалення через ","');
// const userSymbolsArray = userData.split(',');

// removeSymbols(userString, userSymbolsArray);
