function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = value => count = value;
  counter.decrease = () => count--;
  
  return counter;
}

// Пример использования:
let counter = makeCounter();
alert(counter()); // 0
alert(counter()); // 1
counter.set(10);
alert(counter()); // 10
counter.decrease();
alert(counter()); // 9 (потому что decrease уменьшил, а потом counter() увеличил)