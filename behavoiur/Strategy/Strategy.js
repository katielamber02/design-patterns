// ползволяет создавать оболочку для различных интерфейсов
// чтобы  мы могли использовать разные алгоритмы и разные интерфесы
// в конкретной задаче
// То есть он определяет семейство некоторых алгоритмов,
// которые наследуют обьекты в неизменяемом порядке

// Parent Class
class Vehicle {
  travelTime() {
    return this.timeTaken;
  }
}
// Дочерние классы
// поехать на автобусе
class Bus extends Vehicle {
  constructor() {
    super();
    this.timeTaken = 10;
  }
}

class Taxi extends Vehicle {
  constructor() {
    super();
    this.timeTaken = 5;
  }
}

class Car extends Vehicle {
  constructor() {
    super();
    this.timeTaken = 3;
  }
}
// класс который позволяет показать ту или иную стратегию
class Commute {
  // время которое вы тратите на работу например
  travel(transport) {
    return transport.travelTime();
  }
}

const commute = new Commute();

console.log(commute.travel(new Taxi())); // 5
console.log(commute.travel(new Bus())); // 10
console.log(commute.travel(new Car())); // 3
