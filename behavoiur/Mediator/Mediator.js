// плотная коммуникация между обьектами разного типа
// централизованная абстракция которая позоляет взаимодествовать
// группе обьектов через друг друга

// создавать пользователей и присоединять к чату

// class User {
//   constructor(name) {
//     this.name = name;
//     this.room = null;
//   }

//   send(message, to) {
//     this.room.send(message, this, to); // from==this это от кого
//   }

//   receive(message, from) {
//     console.log(`${from.name} => ${this.name}: ${message}`);
//   }
// }

// class ChatRoom {
//   constructor() {
//     this.users = {};
//   }

//   register(user) {
//     // каждая комната позволяет регистрировать людей
//     this.users[user.name] = user;
//     user.room = this;
//   }

//   send(message, from, to) {
//     if (to) {
//       to.receive(message, from);
//     } else {
//       // отправляем всем пользователям кроме єтого пользователя
//       Object.keys(this.users).forEach(key => {
//         if (this.users[key] !== from) {
//           this.users[key].receive(message, from);
//         }
//       });
//     }
//   }
// }

// const vlad = new User("Vladilen");
// const lena = new User("Elena");
// const igor = new User("Igor");

// const room = new ChatRoom();

// room.register(vlad);
// room.register(lena);
// room.register(igor);

// vlad.send("Hello!", lena);
// lena.send("Hello hello!", vlad);
// igor.send("Vsem privet");

// Vladilen => Elena: Hello!
// Elena => Vladilen: Hello hello!
// Igor => Vladilen: Vsem privet
// Igor => Elena: Vsem privet

//
// https://www.youtube.com/watch?v=tWZfcmmGf1w&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=14
// webDev

// позволяет уменьшить взаимосвязь классов между собой
// вынося межклассовые связи в класс-посредник.
// Например при заполнении профиля в соц сетях
// из-за большого количества связей вы не можете использовать
// отдельные элементы вашего интерфейса на других страницах

// Медиатор содержит связи между элементами
// что позволяет инкапсулировать специфическую логику и переиспользовать компоненты

// Диллер вместо завода
// на медиаторе мы можем дергать нужные методы клиента
class OfficialDealer {
  constructor() {
    this.customers = [];
  }

  orderAuto(customer, auto, info) {
    // customer  на входе контекст вызова клиента
    // марка авто
    // доп инфаы
    // автоматически делает заказ на завод и
    // добаляет имя клиента в список клиентов
    const name = customer.getName();
    console.log(`Order name: ${name}. Order auto is ${auto}`);
    console.log(`Additional info: ${info}`);
    this.addToCustomersList(name);
  }

  addToCustomersList(name) {
    this.customers.push(name);
  }

  getCustomerList() {
    return this.customers;
  }
}

class Customer {
  constructor(name, dealerMediator) {
    this.name = name;
    this.dealerMediator = dealerMediator;
  }

  getName() {
    return this.name;
  }

  makeOrder(auto, info) {
    this.dealerMediator.orderAuto(this, auto, info); // вызывается метод медиатора
  }
}

// то есть в Customer нам не нужно писать метод создания заказа
// и завязывать на этом связь с другим классом
// Customer можно использовать в других местах
// а все остальные связи будут происходить в Медиаторе OfficialDealer
// в orderAuto дергаем addToCustomersList

const mediator = new OfficialDealer();

const client1 = new Customer("Client 1", mediator);
const client2 = new Customer("Client 2", mediator);

client1.makeOrder("Tesla", "With autopilot");

client2.makeOrder("BMW", "With parktromic");

console.log(mediator.getCustomerList()); // ["Client 1", "Client 2"]
