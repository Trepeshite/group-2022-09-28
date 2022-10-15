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
   
   const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
   let positiveNumbers = 0;
   let negativeNumbers = 0;
   let positiveOddNumbers = 0;
   let positiveEvenNumbers = 0;
   const minNumber = Math.min(...arr);
   const minNumberIndex = arr.findIndex((number) => number === minNumber);
   const maxNumber = Math.max(...arr);
   const maxNumberIndex = arr.findIndex((number) => number === maxNumber);

   const sum = arr.reduce((currentSum, number) => {
      if (number > 0) {
         if (number % 2 !== 0) {
            positiveOddNumbers++;
      } else {
         positiveEvenNumbers++;
      }
      positiveNumbers++;
      return (currentSum = currentSum + number);
   }
   if (number < 0) {
      negativeNumbers++;
   } 
   
   return currentSum;
   
}, 0);
console.log(`Сума позитивних елементів ${sum}`);
console.log(`Кількість позитивних елементів ${positiveNumbers}`);
console.log (`Кількість негативних елементів ${negativeNumbers}`);
console.log (`Кількість непарних позитивних елементів елементів ${positiveOddNumbers}`);
console.log (`Кількість парних позитивних елементів елементів ${positiveEvenNumbers}`);
console.log (`Мінімальний елемент масиву ${minNumber}, який знаходиться під індексом ${minNumberIndex}`);
console.log (`Максимальний елемент масиву ${maxNumber}, який знаходиться під індексом ${maxNumberIndex}`);

// ???   Знайти суму парних позитивних елементів.

const sumPositiveEvenNumbers = arr.reduce((currentSum, number) => {
   if (number > 0 && number % 2 === 0) {
      return (currentSum = currentSum + number);
   }
   return currentSum;
   
}, 0);
console.log(`Сума парних позитивних елементів ${sumPositiveEvenNumbers}`);

// ???  Знайти суму непарних позитивних елементів.

const sumPositiveOddNumbers = arr.reduce((currentSum, number) => {
   if (number > 0 && number % 2 !== 0) {
      return (currentSum = currentSum + number);
   }
   return currentSum;
   
}, 0);
console.log(`Сума непарних позитивних елементів ${sumPositiveOddNumbers}`);

// ???  Знайти добуток позитивних елементів.

const multPositiveNumbers = arr.reduce((currentSum, number) => {
   if (number > 0) {
      return (currentSum = currentSum * number);
   }
   return currentSum;
   
}, 1);
console.log(`Добуток позитивних елементів ${multPositiveNumbers}`);

// ???  Знайти найбільший серед елементів масиву, остальні обнулити.

const mappedArr = arr.map((number) => {
   if(number === maxNumber) {
      return number;
   }
   return number * 0;
})
console.log (`Найбільший серед елементів масиву ${maxNumber}.Результат массиву після обнулення ${mappedArr}`);