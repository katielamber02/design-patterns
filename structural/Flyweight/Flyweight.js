// // чтобы ефеективно работать с данными через различные типы обьектов
// // браузер использует этот паттерн для загрузки изображений
// // чтобы избежать повторной загрузки
// // кэширование сохранение в памяти
// class Car {
//   constructor(model, price) {
//     this.model = model;
//     this.price = price;
//   }
// }

// class CarFactory {
//   constructor() {
//     this.cars = []; // чтобы сюда записывать потенциальные данные
//     // если там уже что-то есть, то записывать не будем
//   }

//   // дополнительная абстракция позволяющая добавлять функционал
//   // но дублирует класс Car
//   create(model, price) {
//     const candidate = this.getCar(model);
//     if (candidate) {
//       return candidate; // если нашли
//     }

//     // если не нашли
//     const newCar = new Car(model, price);
//     this.cars.push(newCar);
//     return newCar;
//   }

//   getCar(model) {
//     return this.cars.find(car => car.model === model);
//   }
// }

// const factory = new CarFactory();

// const bmwX6 = factory.create("bmw", 10000);
// const audi = factory.create("audi", 12000);
// const bmwX3 = factory.create("bmw", 8000); // тут он из кэша

// console.log(bmwX3 === bmwX6); // true
