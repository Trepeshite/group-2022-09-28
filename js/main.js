// !!!  Заняття 9

// !!! ДЗ 19. Багатоквартирний будинок 
// Створити та описати сутності Багатоквартирного будинку, квартири, мешканця.
// Додати можливість створювати нові будинки на певну кількість квартир.
// Не обмежувати кількість мешканців у квартирі

// !!! Рішення

// Що потрібно зробити

// 1. Створити клас Людина
//     властивості 
//         імʼя
//         стать
//     методи
//         конструктор, який приймає два параметри: імʼя та стать

class ApartmentResident {
  name;
  gender;

  constructor (name,gender){
    this.name = name;
    this.gender = gender;
  }
}
// 2. клас Квартира
//     властивості 
//         конструктор не потрібен
//         масив жителів, який при створенні пустий
//     методи 
//         додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів
class Apartment {
  residents = [];

  addResident(name, gender){
    this.residents.push(new ApartmentResident(name, gender))
  }
}
// 3. клас Будинок 
//     властивості 
//         масив квартир, який при створенні пустий
//         максимальна кількість квартир
//     методи
//         конструктор, який приймає один параметр: максимальну кількість квартир
//         додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, чи не буде кількість перевищувати максимальну 
//         кількість квартир, і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення


class АpartmentBuilding {
  apartments = [];
  maxApartments;

  constructor(maxApartments){
   this.maxApartments = maxApartments;
  }

  addApartment(apartment) {
    if(this.apartments.length < this.maxApartments) {
      this.apartments.push(apartment);
    } else {
      console.log (`Кількість наявних квартир перевищує максимальну кількість - ${this.maxApartments}.`);
    }
  }
}

// в якості демонстраціїї створити:

//     декілька екземплярів класу Людина

const resident1 = new ApartmentResident ('Dima', 'male');
const resident2 = new ApartmentResident ('Anna', 'female');
const resident3 = new ApartmentResident ('Vika', 'female');
const resident4 = new ApartmentResident ('Max', 'male');
const resident5 = new ApartmentResident ('Jane', 'female');
const resident6 = new ApartmentResident ('Lo', 'female');
const resident7 = new ApartmentResident ('Lilo', 'female');


//     декілька екземплярів класу Квартира

 const apartment1 = new Apartment ();
 const apartment2 = new Apartment ();
 const apartment3 = new Apartment ();

//     додадити екземпляри класу Людина до екземплярів класу Квартира

apartment1.addResident (resident1.name, resident1.gender);
apartment1.addResident (resident2.name, resident2.gender);
apartment2.addResident (resident3.name, resident3.gender);
apartment2.addResident (resident4.name, resident4.gender);
apartment3.addResident (resident5.name, resident5.gender);
apartment3.addResident (resident6.name, resident6.gender);
apartment3.addResident (resident7.name, resident7.gender);

//     екземпляр класу Будинок

const apartmentBuilding = new АpartmentBuilding (3);

//     додадити екземпляри класу Квартира до екземплярів класу Будинок

apartmentBuilding.addApartment (apartment1);
apartmentBuilding.addApartment (apartment2);
apartmentBuilding.addApartment (apartment3);
apartmentBuilding.addApartment (new Apartment ());

console.warn (apartmentBuilding);