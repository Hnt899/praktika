class Rabbit extends Object {
  constructor(name) {
    super(); // Необходимо вызвать перед использованием this
    this.name = name;
  }
}

let rabbit = new Rabbit("Кроль");
alert(rabbit.hasOwnProperty('name')); // Теперь работает (true)