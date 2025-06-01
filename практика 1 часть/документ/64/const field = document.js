const field = document.getElementById('field');
const ball = document.getElementById('ball');

field.addEventListener('click', function(event) {
  // Координаты клика относительно поля
  const fieldCoords = this.getBoundingClientRect();
  let x = event.clientX - fieldCoords.left - field.clientLeft - ball.offsetWidth/2;
  let y = event.clientY - fieldCoords.top - field.clientTop - ball.offsetHeight/2;
  
  // Проверка границ поля
  x = Math.max(0, Math.min(x, field.clientWidth - ball.offsetWidth));
  y = Math.max(0, Math.min(y, field.clientHeight - ball.offsetHeight));
  
  // Установка позиции мяча
  ball.style.left = `${x}px`;
  ball.style.top = `${y}px`;
  
  // Добавляем анимацию
  ball.style.transition = 'left 0.5s, top 0.5s';
});