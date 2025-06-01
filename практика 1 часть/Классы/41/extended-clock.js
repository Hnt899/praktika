class ExtendedClock extends Clock {
  constructor({ template, precision = 1000 }) {
    super({ template }); // Передаем template в родительский класс
    this.precision = precision; // Добавляем новое свойство
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}

// Пример использования
let clock = new ExtendedClock({ template: 'h:m:s', precision: 2000 });
clock.start(); // Будет выводить время каждые 2 секунды