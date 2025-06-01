function withFinally() {
  try {
    console.log('Начало работы');
    throw new Error('Ошибка в работе');
    return 'результат'; // этот return никогда не выполнится
  } catch (e) {
    console.log('Обработка ошибки:', e.message);
    throw new Error('Новая ошибка при обработке'); // выбрасываем другую ошибку
  } finally {
    console.log('Очистка (finally)'); // ВСЕГДА выполнится
  }
}

function withoutFinally() {
  try {
    console.log('Начало работы');
    throw new Error('Ошибка в работе');
    return 'результат';
  } catch (e) {
    console.log('Обработка ошибки:', e.message);
    throw new Error('Новая ошибка при обработке');
  }
  console.log('Очистка (без finally)'); // Не выполнится из-за throw выше
}

// Тестируем
try {
  withFinally();
} catch (e) {
  console.log('Поймана ошибка:', e.message);
}

try {
  withoutFinally();
} catch (e) {
  console.log('Поймана ошибка:', e.message);
}







Начало работы
Обработка ошибки: Ошибка в работе
Очистка (finally)
Поймана ошибка: Новая ошибка при обработке

Начало работы
Обработка ошибки: Ошибка в работе
Поймана ошибка: Новая ошибка при обработке