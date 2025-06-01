// Вариант 1: Скрытие другого элемента
document.querySelector('button').addEventListener('click', function() {
  document.getElementById('text').style.display = 'none';
});

// Вариант 2: Кнопка скрывает себя
document.querySelector('button').addEventListener('click', function() {
  this.style.display = 'none';
});