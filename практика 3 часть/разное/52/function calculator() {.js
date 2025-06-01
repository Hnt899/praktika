function calculator() {
  const expression = prompt("Введите арифметическое выражение:", "2+2*2");
  
  try {
    // Используем Function вместо eval для безопасности
    const result = new Function(`return ${expression}`)();
    alert(`Результат: ${result}`);
  } catch (e) {
    alert("Ошибка вычисления выражения: " + e.message);
  }
}

// Запускаем калькулятор
calculator();