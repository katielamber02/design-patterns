// in the application we can have the only instance of the class
// mongoose ORM

class Database {
  constructor(data) {
    //data for initialization in db
    if (Database.exists) {
      // если раньше был флаг exists
      // то надо остановить создание нового instance
      return Database.instance;
    }
    Database.instance = this;
    Database.exists = true;
    this.data = data;
  }

  getData() {
    return this.data;
  }
}

const mongo = new Database("MongoDB");
console.log(mongo.getData()); // MongoDB

const mysql = new Database("MySQL");
console.log(mysql.getData()); // MongoDB

// И это не ошибка. Это невозможность присвоить новый instance если он уже раньше был создан
