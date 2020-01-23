// TAKING ABOUT A BUNCH OF CONPLEX INTERACTIONS
// AND CREATING A FACADE THAT YOU CAN USE
// IN ORDER THAT YOU CAN USE  THOSE CPLEX OBJECTS AND
// COMPLEX INTERACTIONS
// HIDES SOME COMPLEX LOGIC

// публичный интерфейс который помогает упростить взаимодействие

class Complaints {
  // жалобы от пользователей
  constructor() {
    this.complaints = [];
  }

  reply(complaint) {}

  add(complaint) {
    this.complaints.push(complaint);
    return this.reply(complaint);
  }
}

class ProductComplaints extends Complaints {
  // перепишем метод:
  reply({ id, customer, details }) {
    return `Product: ${id}: ${customer} (${details})`;
  }
}

class ServiceComplaints extends Complaints {
  reply({ id, customer, details }) {
    return `Service: ${id}: ${customer} (${details})`;
  }
}
// не наследует никакой класс
class ComplaintRegistry {
  register(customer, type, details) {
    // по type будем определять к какому классу отностится жалоба
    // можем определять вспомогательные данные
    const id = Date.now();
    let complaint;

    if (type === "service") {
      complaint = new ServiceComplaints();
    } else {
      complaint = new ProductComplaints();
    }

    return complaint.add({ id, customer, details });
  }
}

const registry = new ComplaintRegistry();

console.log(registry.register("Vladilen", "service", "недоступен"));
console.log(registry.register("Elena", "product", "вылазит ошибка"));
