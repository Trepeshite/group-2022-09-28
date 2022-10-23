// !!!  ДЗ 17. Функція із замиканням

// ??? Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад: sum(3) = 3 sum(5) = 8 sum(20) = 28

// !!!  Рішення

// !!!  варіант 1

// const sum = (function () {
//     let result = 0; 
//     return function(number) {
//        result += number; 
//        return result; 
//     } })();

// console.log(sum(3));
// console.log(sum(5));
// console.log(sum(20));

// чи так, якщо привести функцію до const і далі вже її виводити
// як краще???

// !!!  варіант 2

// const sumFunc = function () {
//     let result = 0; 
//     return function(number) {
//        result += number; 
//        return result; 
//     } };

// const sum = sumFunc();

// console.log(sum(3));
// console.log(sum(5));
// console.log(sum(20)); 


