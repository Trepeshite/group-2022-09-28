// !!  ДЗ 20. Створюємо сутності

// Створити сутність людини:
// імʼя
// вік
// Метод виведення даних
// Створити сутність автомобіля:
// Характеристики автомобіля окремими властивостями
// Методи:
// Виведення на екран даних про цей автомобіль
// Привласнення цього автомобіля власнику (записати в автомобіль обʼєкт власника)

// !! Рішення

// Що потрібно зробити

// 1. Створити клас Людина
//     властивості 
//         імʼя
//         вік
//     методи
//         конструктор, який приймає два параметри: імʼя та вік
//         метод, який виводить у консоль інформацію про людину

class Person {
  name;
  age;

  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
  logInfo() {
    console.log(`\nВласник:\n\nІм'я = ${this.name}\nВік = ${this.age}`);
}}

// 2. клас Автомобіль
//     властивості 
//         марка, модель, рік виписку, номерний знак (або на Ваш розсуд)
//         власник
//     методи 
//         конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, номерний знак 
//         присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
//         метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина для виведення інформації про власника

class Car {
  brand;
  model;
  carYear;
  carNumber;
  owner;

  constructor (brand, model, carYear, carNumber) {
    this.brand = brand;
    this.model = model;
    this.carYear = carYear;
    this.carNumber = carNumber;
  }

  setOwner (owner){
    if (owner.age < 18) {
      return console.log ('Вік меньше 18 років')
    }
    this.owner = owner;
  }

  logCarInfo (){
    console.log(`\nCar info:\n\nБренд: ${this.brand}\nМодель: ${this.model}\nРік: ${this.carYear}\nНомер автомобіля: ${this.carNumber}`);
    if(this.owner) {
      this.owner.logInfo();
    }
  }

}

// в якості демонстраціїї створити:
//     декілька екземплярів класу Людина
//     декілька екземплярів класу Автомобіль
//     присвоїти власників автомобілям

const person1 = new Person ('Adam', 23);
const person2 = new Person ('Viki', 43);
const person3 = new Person ('Tony', 33);

const car1 = new Car ('VW', 'Passat', 2015, 'AC2343BC');
const car2 = new Car ('Toyota', 'Camry', 2019, 'AC7272MT');
const car3 = new Car ('TAVRIA', 'PICUP', 2010, 'AC4534VC');

car1.setOwner(person1);
car2.setOwner(person2);

car1.logCarInfo();
car2.logCarInfo();
car3.logCarInfo();