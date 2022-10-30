Заняття 9

// !! ДЗ 19. Багатоквартирний будинок

// ??  Створити та описати сутності Багатоквартирного будинку, квартири, мешканця.
// ??  Додати можливість створювати нові будинки на певну кількість квартир.
// ??  Не обмежувати кількість мешканців у квартирі 

// !!  Рішення 

class АpartmentBuilding {
   constructor(apartmentAddress, apartments = [], maxApartments) {
      this.apartmentAddress=apartmentAddress;
      this.apartmets = apartments;
      this.apartmentQuantity= apartments.length;
      this.maxApartments= maxApartments;
   }
   addApartment(apartmentNumber, apartmetRoomNumbers , residents = []) {
      if(this.apartmentQuantity < this.maxApartments) {
         this.apartments.push(new Apartment(apartmentNumber, apartmetRoomNumbers, residents))
      }
   }
 }

 class Apartment {
   constructor(apartmentNumber, apartmetRoomNumbers ,residents = []) {
      this.apartmentNumber = apartmentNumber;
      this.apartmetRoomNumbers = apartmetRoomNumbers;
      this.residents = residents;
      this.residentsNumber = residents.length;
   }
   addResident(name, age, gender) {
      this.residents.push(new ApartmentResident(name, age, gender));
   }

 }

 class ApartmentResident {
   constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
   }
 }

 const resident1 = new ApartmentResident ('Dima', 34, 'male');
 const resident2 = new ApartmentResident ('Anna', 23, 'female');
 const resident3 = new ApartmentResident ('Vika', 43, 'female');
 const resident4 = new ApartmentResident ('Max', 21, 'male');
 const resident5 = new ApartmentResident ('Jane', 23, 'female');
 const resident6 = new ApartmentResident ('Lo', 44, 'female');
 const resident7 = new ApartmentResident ('Lilo', 27, 'female');

 const apartment1 = new Apartment (1,2,[resident1,resident3]);
 const apartment2 = new Apartment (2,1,[resident2]);
 apartment2.addResident('Jim', 27, 'male');
 const apartment3 = new Apartment (3,1,[resident4]);
 const apartment4 = new Apartment (1,3,[resident5]);
 const apartment5 = new Apartment (2,2,[resident6]);
 const apartment6 = new Apartment (3,1,[resident7]);


 const apartmentBuilding1 = new АpartmentBuilding ('Brooklyn',[apartment1, apartment2, apartment3, new Apartment (4,3,[new ApartmentResident ('john', 44, 'male')])],6);
 const apartmentBuilding2 = new АpartmentBuilding ('New Jersey',[apartment4, apartment5, apartment6],3);

console.log (apartmentBuilding1);
console.log (apartmentBuilding2);