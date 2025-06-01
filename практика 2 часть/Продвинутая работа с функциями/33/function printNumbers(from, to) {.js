function printNumbers(from, to) {
  let current = from;

  let timerId = setInterval(() => {
    alert(current);
    if (current === to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

// Пример использования:
printNumbers(5, 10);



function printNumbers(from, to) {
  let current = from;

  setTimeout(function next() {
    alert(current);
    if (current < to) {
      setTimeout(next, 1000);
    }
    current++;
  }, 1000);
}

// Пример использования:
printNumbers(5, 10);