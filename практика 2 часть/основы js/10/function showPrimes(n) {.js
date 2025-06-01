function showPrimes(n) {
  nextPrime:
  for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) continue nextPrime;
    }
    alert(i); // простое число
  }
}

// Оптимизированная версия (проверяем делители до √i):
function showPrimesOptimized(n) {
  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) alert(i);
  }
}