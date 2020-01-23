// абстрактная оболочка над функционалом,
// который позволяет управлять, но уже через другой обьект
// записывая определенный состояния, которые были вызваны
// Redux

// Владилен Минин:
// https://www.youtube.com/watch?v=YJVj4XNASDk
// class MyMath {
//   constructor(initialValue = 0) {
//     this.num = initialValue;
//   }

//   square() {
//     return this.num ** 2;
//   }

//   cube() {
//     return this.num ** 3;
//   }
// }
// // над чем будет формироваться оболочка:
// class Command {
//   constructor(subject) {
//     this.subject = subject;
//     this.commandsExecuted = [];
//   }

//   execute(command) {
//     this.commandsExecuted.push(command);
//     return this.subject[command]();
//   }
// }

// const x = new Command(new MyMath(2));

// console.log(x.execute("square")); // 4
// console.log(x.execute("cube")); // 8

// console.log(x.commandsExecuted); // ["square","cube"]

// webDev:
// https://www.youtube.com/watch?v=jWsyfeOkv9Q&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=21
// Отделяет клиента от получателя, превращая запросы в обьекты,
// что позволяет передавать их как аргументы в методы

class Driver {
  // пользователь (водитель). Водитель выступает в роли кнопки или эл интерфейса
  // старт двигателья и остановки
  constructor(command) {
    this.command = command;
  }

  execute() {
    this.command.execute(); // осуществляется вызов этой комманды
  }
}

// здесь определено состояние двигателя
// это прослойка бизнесс-логики
class Engine {
  constructor() {
    this.state = false;
  }

  on() {
    this.state = true;
  }

  off() {
    this.state = false;
  }
}
// шаблон Комманд
// для старта
class OnStartCommand {
  constructor(engine) {
    this.engine = engine;
  }

  execute() {
    this.engine.on(); // дергает класс Engine
    // он не делегируется в Engine
    // а исполняется в Command
  }
}
// для остановки
class onSwitchOffCommand {
  constructor(engine) {
    this.engine = engine;
  }

  execute() {
    this.engine.off();
  }
}
let engine = new Engine();
console.log("engine:", engine); // engine: Engine {stata:false}
const noStartCommand = new OnStartCommand(engine);
console.log(noStartCommand); // OnStartCommand {engine: Engine}
const driver = new Driver(noStartCommand);
console.log(driver);

driver.execute();

// engine: Engine {state: false}
// OnStartCommand {engine: Engine}
// Driver {command: OnStartCommand}
//    command: OnStartCommand
//       engine: Engine {state: true}
