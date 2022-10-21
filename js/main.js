// !!!  ДЗ 16. Рекурсивне зведення в ступінь

// ??? Реалізувати рекурсивну функцію, яка зводить число в ступінь.
// ??? Ступінь передається як другий аргумент у функцію
// ??? pow (num, degree)

// !!! Рішення

function pow(num, degree) {
   if (degree === 0) {
      return 0;
   } if (degree < 0){
      return (1 / num)
   } if (degree !== 1) { 
     return (num * pow(num, degree - 1));
   }  else {
     return num;
   }
 }

 console.log( pow(7, 2) );


