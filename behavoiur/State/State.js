// Назначение Роутинг

// мы можем создавать различные классы,
// которые будут являться элементами state
// мы можем делегировать изменение состояния этих классов на
// на общий класс, который будет являться state
// и будет менять внутреннее состояние этих элементов

// Светофор:
class Light {
  constructor(light) {
    this.light = light;
  }
}

class RedLight extends Light {
  constructor() {
    super("red");
  }

  sign() {
    return "СТОП";
  }
}

class YellowLight extends Light {
  constructor() {
    super("yellow");
  }

  sign() {
    return "ГОТОВЬСЯ";
  }
}

class GreenLight extends Light {
  constructor() {
    super("green");
  }

  sign() {
    return "ЕДЬ!";
  }
}

// родительский класс который обьединяет различные стейты
class TrafficLight {
  constructor() {
    // набор стэйтов
    this.states = [new RedLight(), new YellowLight(), new GreenLight()];
    this.current = this.states[0];
  }

  change() {
    // перебирает состояние стэйта
    const total = this.states.length; // сколько стэйтов
    // текущее состояние
    let index = this.states.findIndex(light => light === this.current);

    if (index + 1 < total) {
      // то можно переключить на следующее состояние стэйта
      this.current = this.states[index + 1];
    } else {
      this.current = this.states[0];
    }
  }

  sign() {
    return this.current.sign(); // текущий знак
  }
}

const traffic = new TrafficLight();

// То есть мы будем просто переключать State на следующий
console.log(traffic.sign());
traffic.change();

console.log(traffic.sign());
traffic.change();

console.log(traffic.sign());
traffic.change();

console.log(traffic.sign());
traffic.change();

console.log(traffic.sign());
traffic.change();

console.log(traffic.sign());
traffic.change();
