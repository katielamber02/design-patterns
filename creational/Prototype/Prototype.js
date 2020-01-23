const car = {
  wheels: 4,

  init() {
    console.log(
      `У меня есть ${this.wheels} колеса, мой владелец ${this.owner}`
    );
  }
};

const carWithOwner = Object.create(car, {
  owner: {
    value: "Дмитрий"
  }
});
console.log(carWithOwner, carWithOwner.__proto__);
console.log(carWithOwner.__proto__ === car);
console.dir(Object.create);
carWithOwner.init();
