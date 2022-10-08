
// завдання 3

const task_3_Number_1 = prompt("Введіть число 1");
const task_3_Number_2 = prompt("Введіть число 2");
let task_3_Number_4 = task_3_Number_1+task_3_Number_2;
let task_3_Number_5 = task_3_Number_1-task_3_Number_2;
let task_3_Number_6 = task_3_Number_1*task_3_Number_2;
let task_3_Number_7 = task_3_Number_1/task_3_Number_2;
alert ("Користувач ввів " + task_3_Number_1 + " і " + task_3_Number_2 + ":" +
" додавання " + task_3_Number_4 +
"; віднімання " + task_3_Number_5 +
"; множення " + task_3_Number_6 +
"; ділення " + task_3_Number_7
);

// завдання 4

// ??? питаємо у користувача, що він хоче зробити (add, sub, mult, div)
const task_4_arithmetic_operation = prompt("Що ви хоче зробити (add чи sub чи mult чи div)?");
const task_4_Number_1 = prompt("Введіть число 1");
const task_4_Number_2 = prompt("Введіть число 2");
if (task_4_arithmetic_operation === "add") {
alert (task_4_Number_1 + "+" + task_4_Number_2 + " = " + (+task_4_Number_1 + +task_4_Number_2))} else 
if (task_4_arithmetic_operation === "sub") {
alert (task_4_Number_1 + "-" + task_4_Number_2 + " = " + (+task_4_Number_1 - +task_4_Number_2))} else;
if (task_4_arithmetic_operation === "mult") {
alert (task_4_Number_1 + "*" + task_4_Number_2 + " = " + +task_4_Number_1 * +task_4_Number_2)} else;
if (task_4_arithmetic_operation === "div") {
alert (task_4_Number_1 + "/" + task_4_Number_2 + " = " + +task_4_Number_1 / +task_4_Number_2)};

// завдання 5

const timeHour = prompt("Введіть кількість годин");
const timeSec = timeHour*60;
alert (timeHour + " годин " + "дорівнює " + timeSec + " секунд")

// завдання 6

const task_6_Number_1 = prompt("Введіть число 1");
const task_6_Number_2 = prompt("Введіть число 2");
const task_6_Number_3 = prompt("Введіть число 3");
alert ("Середнє арифметичне цих чисел " + ((+task_6_Number_1 + +task_6_Number_2 + +task_6_Number_3) / 3));
