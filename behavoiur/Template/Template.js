// Определяет скелет будущего алгоритма - структуру
// при этом не изменяя поведение базового класса
// но делегирует создание конкретного фнркционала в дочерние классы

// Шаблон:

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  responsibilities() {} // делегирует в дочерние классы

  work() {
    return `${this.name} выполняет ${this.responsibilities()}`;
  }

  getPaid() {
    return `${this.name} имеет ЗП ${this.salary}`;
  }
}

class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  responsibilities() {
    return "процесс создания программ";
  }
}

class Tester extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  responsibilities() {
    return "процесс тестирования";
  }
}

const dev = new Developer("Владилен", 100000);
console.log(dev.getPaid());
console.log(dev.work());

const tester = new Tester("Виктория", 90000);
console.log(tester.getPaid());
console.log(tester.work());
