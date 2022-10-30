// !!  ДЗ 20. Створюємо сутності

// ??  Створити сутність людини:
// ??  ім'я
// ??  вік
// ??  Метод виведення даних

// ??  Створити сутність автомобіля:
// ??  Характеристики автомобіля окремими властивостями
// ??  Методи:
// ??  Виведення на екран даних про цей автомобіль
// ??  Привласнення цього автомобіля власнику (записати в автомобіль об'єкт власника)

// ??  Всі дані про людину та про автомобіль отримувати від користувача. 
// ??  Реалізувати необхідні перевірки на коректність введення (порожні поля, вік > 18 для людини та ін. за необхідності)
// ??  Максимально використовувати функції

// !! Рішення

class Person {
   constructor(name, age) {
     this.name = name;
     this.age = age;
   
 }
 get info() {
   return console.log(`name = ${this.name}, age = ${this.age}`);
 }
}

const person = new Person('Dima', 34);

person.info;

class Car {
   constructor(brand, model, owner = {}) {
     this.brand = brand;
     this.model = model;
     this.owner = owner;
   
 }

 get info() {
   return console.log(`brand = ${this.brand}, model = ${this.model}, owner =`,this.owner);
 }

 set newOwner(owner){
   this.owner = owner;
 }
}

const car = new Car('VW', 'Polo', person);

car.info;
car.newOwner = {
   name: 'Peter',
   age:26
};

car.info;
