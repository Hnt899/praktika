function delay(f, ms) {
  return function(...args) {
    setTimeout(() => f.apply(this, args), ms);
  };
}

// Пример использования:
function f(x) {
  alert(x);
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // "test" через 1000мс
f1500("test"); // "test" через 1500мс