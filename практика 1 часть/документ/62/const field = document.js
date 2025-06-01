const field = document.getElementById('field');
const ball = document.getElementById('ball');

// Вычисляем координаты центра
const centerX = field.clientWidth / 2 - ball.offsetWidth / 2;
const centerY = field.clientHeight / 2 - ball.offsetHeight / 2;

// Устанавливаем позицию мяча
ball.style.position = 'absolute';
ball.style.left = `${centerX}px`;
ball.style.top = `${centerY}px`;