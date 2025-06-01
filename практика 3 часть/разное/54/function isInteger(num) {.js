function isInteger(num) {
  return num === (num ^ 0);
  // Или более понятный вариант:
  // return Number.isInteger(num); // ES6+
  // Или для старых браузеров:
  // return typeof num === 'number' && isFinite(num) && Math.floor(num) === num;
}

alert(isInteger(1));    // true
alert(isInteger(1.5));  // false
alert(isInteger(-0.5)); // false