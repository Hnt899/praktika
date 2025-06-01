function runOnKeys(func, ...codes) {
  const pressedKeys = new Set();

  document.addEventListener('keydown', function(event) {
    // Добавляем нажатую клавишу в набор
    pressedKeys.add(event.code);

    // Проверяем, все ли нужные клавиши нажаты
    const allPressed = codes.every(code => pressedKeys.has(code));

    if (allPressed) {
      // Выполняем функцию и предотвращаем действие по умолчанию
      event.preventDefault();
      func();
      
      // Очищаем набор, чтобы избежать многократного срабатывания
      pressedKeys.clear();
    }
  });

  document.addEventListener('keyup', function(event) {
    // Удаляем отпущенную клавишу из набора
    pressedKeys.delete(event.code);
  });
}