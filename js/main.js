// !!!!!!! завдання 7

// Запитати у користувача рік народження.
// Запитати в нього, в якому місті він живе.
// Запитати його улюблений вид спорту.
// При натисканні на ОК показуємо вікно, де має бути відображена наступна інформація:
// Його вік.
// Якщо користувач вкаже Київ, Вашингтон чи Лондон, то показати йому повідомлення - "Ти живеш у столиці..." 
// і на місце точок підставляємо країну, столицею якої є місто. Інакше показуємо йому “ти живеш у місті…” і місце точок – введене місто.
// Вибираємо самі три види спорту та три чемпіони у цих видах. Відповідно, якщо користувач вкаже один із цих видів спорту, 
// то показуємо йому повідомлення “Круто! Хочеш стати …? і підставляємо на місце точок ім'я та прізвище чемпіона.
// Все це має бути відображено в одному вікні (алерті).
// Якщо в якомусь випадку він не захоче вводити інформацію і натисне Скасувати, показати йому повідомлення – 
// “Шкода, що Ви не захотіли ввести свій(ю) …” і вказуємо, що він не захотів вводити – дату народження, місто чи вид спорту .

// !!!!!! рішення

// const userBirthdayYear = +prompt('Який ваш рік народження?', '');
// if (!userBirthdayYear) {
//    alert('Шкода, що Ви не захотіли ввести свою дату народження.');
// }
// const userCity = prompt('В якому місті ви проживаєте?', '');
// if (!userCity) {
//    alert('Шкода, що Ви не захотіли ввести своє місто.')
// }
// const userSport = prompt('Ваш улюбленний вид спорту?', '');
// if (!userSport) {
//    alert('Шкода, що Ви не захотіли ввести свій улюблений вид спорту.')
// }

// let result;
// const currentYear = new Date().getFullYear();
// if(userBirthdayYear) {
//    result = `Тобі ${currentYear - userBirthdayYear } років. `;
// } else {
//    result = `Ви не вказали свій вік. `;
// }

// const city = typeof userCity === 'string' ? userCity.toLowerCase() : userCity;  
// switch(city) {
//    case 'київ':
//       result = result.concat('Ви живете у столиці України. ');
//       break;
//    case 'вашингтон':
//       result = result.concat('Ви живете столиці США. ');
//       break;
//    case 'лондон':
//       result = result.concat('Ви живете у столиці Англії. ');
//       break;
//    case null:
//       result = result.concat('Ви не вказали своє місто. ');
//       break;
//    default:
//       result = result.concat(`Ви живете у місті ${userCity}. `);
//       break;
//       }

// const sport = typeof userSport === 'string' ? userSport.toLowerCase() : userSport;  
// switch(sport) {
//    case 'сноуборд':
//       result = result.concat(`Любиш ${userSport}. Круто! Хочеш стати як Шон Уайт?`);
//       break;
//    case 'баскетбол':
//       result = result.concat(`Любиш ${userSport}. Круто! Хочеш стати як Майкл Джордан?`);
//       break;
//    case 'фрізбі':
//       result = result.concat(`Любиш ${userSport}. Круто! Хочеш стати як Стів Роджерс?`);
//       break;
//    case null:
//       result = result.concat('Ви не вказали свій улюблений вид спорту. ');
//       break;
//    default:
//       result = result.concat(`Ваш улюблений вид спорту - ${userSpor}. `);
//       break;
//       }

// alert(result)

// !!!!!!!! завдання 8

// Переписати код нижче з використанням конструкції switch…case

// let numOrStr = prompt('input number or string');
// console.log(numOrStr)

// if(numOrStr === null) {
// console.log('ви скасували')
// } else if( numOrStr.trim() === '' ) {
// console.log('Empty String');
// } else if ( isNaN( +numOrStr ) ) {
// console.log(' number is Ba_NaN')
// } else {
// console.log('OK!')
// }

// !!!!!! рішення

// let numOrStr = prompt('input number or string');
// console.log(numOrStr)

// const string = typeof numOrStr === 'string' ? numOrStr.trim() : numOrStr;  

// switch(string) {
//    case null:
//       console.log('ви скасували');
//       break;
//    case '':
//       console.log('Empty String');
//       break;
//    default:
//       const result = isNaN(+string) ? 'number is Ba_NaN!' : 'OK';
//       console.log(result);
//       break;
// }

// !!!!!!! завдання 9

// ?????? - Вивести на сторінку в один рядок через кому числа від 10 до 20

// !!!!!! рішення

// let result = '';
// let number = 10;
// const lastNumber = 20;

// while (number <= lastNumber) {
//    if (number === lastNumber) {
//       result = result.concat(`${number}.`);
//       number++;
//    } else {
//       result = result.concat(`${number}, `);
//       number++;
//    }
// }
// console.log ( result );

//  ?????? - Вивести квадрати чисел від 10 до 20
// !!!!!! рішення

// let number = 10;
// const lastNumber = 20;
// let result = '';

// do {
//       if (number === lastNumber) {
//          result = result.concat(`${number*number}.`);
//          number++;
//       } else {
//          result = result.concat(`${number*number}, `);
//          number++;
//       }
//    } while (number <= lastNumber);
   
// console.log ( result );

// ?????? Вивести таблицю множення на 7
// !!!!!! рішення

// let result = '';
// const number = 7;

// for (let i = 1; i <= 10; i++) { 
//    result = result.concat(`${number}x${i}=${number*i}\n`);
//  }
//  console.log ( result );

// ??????  Надрукувати повну таблицю множення від 1 до 10
// !!!!!! рішення

// let result = '';

// for (let number = 1; number <= 10; number++) { 
//    for (let i = 1; i <= 10; i++) { 
//       if (i === 10) {
//          result = result.concat(`${number}x${i}=${number*i}\n\n`); 
//           break;
//       }
//       result = result.concat(`${number}x${i}=${number*i}\n`);
//    }
//  }

//  console.log ( result );

// ??????  Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// !!!!!! рішення

// const number = +prompt ('Ведіть натуральне число', '');
// if ( !isNaN( number ) && number !== 0 ) {
//    let result = '';

//    for (let i = 1; i <= number; i++) {
//       if (number % i === 0) {
//           result = result.concat(`${i} `); 
//       }
//    }

//    console.log ( result );
// } else {
//    alert ('Ви ввели не натуральне число');
// } 

// ?????? -Визначити кількість його парних дільників
// !!!!!! рішення

// const number = +prompt ('Ведіть натуральне число', '');

// if ( !isNaN( number ) && number !== 0 ) {
//    let result = 0;

//    for (let i = 1; i <= number; i++) {
//       if (number % i === 0 && i % 2 === 0 ) {
//           result++; 
//       }
//    }
//    console.log (`В числі ${number} є ${result} парних дільника(ів).`  );
// } else {
//    alert ('Ви ввели не натуральне число');
// } 

// ??????      Знайти суму його парних дільників
// !!!!!! рішення

// const number = +prompt ('Ведіть натуральне число', '');

// if ( !isNaN( number ) && number !== 0 ) {
//    let result = 0;

//    for (let i = 1; i <= number; i++) {
//       if (number % i === 0 && i % 2 === 0 ) {
//           result = result + i; 
//       }
//    }
//    console.log (`Сума парних дільників числа ${number} = ${result}`  );
// } else {
//    alert ('Ви ввели не натуральне число');
// } 

// ??????   -Знайти суму всіх цілих чисел від 1 до 15
// !!!!!! рішення

// const firstNumber = 1;
// const lastNumber = 15;
// let sum = 0;

// for (let i = firstNumber; i <= lastNumber; i++) {
//    sum = sum + i;
// }
//    console.log (`Сума всіх цілих чисел від ${firstNumber} до ${lastNumber} дорівнює ${sum}`);

// ?????? -Знайти добуток усіх цілих чисел від 15 до 35
// !!!!!! рішення

// const firstNumber = 15;
// const lastNumber = 35;
// let result = 1;

// for (let i = firstNumber; i <= lastNumber; i++) {
//    result = result * i;
// }
//    console.log (`Добуток всіх цілих чисел від ${firstNumber} до ${lastNumber} дорівнює ${result}`);

//     ?????? -Знайти середнє арифметичне всіх цілих чисел від 1 до 500
// !!!!!! рішення

// const firstNumber = 1;
// const lastNumber = 500;
// let sum = 0;

// for (let i = firstNumber; i <= lastNumber; i++) {
//    sum = sum + i;
// }
// const result = sum / lastNumber;
//    console.log (`Cереднє арифметичне всіх цілих чисел від ${firstNumber} до ${lastNumber} дорівнює ${result}`);

// ??????  -Вивести суму лише парних чисел в діапазоні від 30 до 80
// !!!!!! рішення

// const firstNumber = 30;
// const lastNumber = 80;
// let sum = 0;

// for (let i = firstNumber; i <= lastNumber; i++) {
//    if (i % 2 === 0) {
//       sum = sum + i;
//    }
// }
// console.log (`Cума парних чисел в діапазоні від ${firstNumber} до ${lastNumber} дорівнює ${sum}`);

// ?????? - Вивести всі числа в діапазоні від 100 до 200 кратні 3
// !!!!!! рішення

// const firstNumber = 1;
// const lastNumber = 6;
// let result = '';

// for (let i = firstNumber; i <= lastNumber; i++) {
//    if (i % 3 === 0) {
//       result = result.concat(`${i} `);
//    }
// }
//    console.log (`Всі числа в діапазоні від  ${firstNumber} до ${lastNumber}, які кратні 3 - ${result}`);

