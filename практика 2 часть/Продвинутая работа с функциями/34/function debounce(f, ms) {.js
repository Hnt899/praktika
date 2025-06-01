function debounce(f, ms) {
  let timeoutId;
  
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => f.apply(this, args), ms);
  };
}

// Пример использования:
let f = debounce(alert, 1000);

f("a");
setTimeout(() => f("b"), 200);
setTimeout(() => f("c"), 500);
// Выведет только "c" через 1000мс после последнего вызова (в 1500мс)