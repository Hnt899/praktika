// Создаем кнопку
const upButton = document.createElement('button');
upButton.textContent = '↑';
upButton.style.position = 'fixed';
upButton.style.left = '20px';
upButton.style.top = '20px';
upButton.style.display = 'none';
upButton.style.zIndex = '1000';
document.body.append(upButton);

// Обработчик прокрутки
window.addEventListener('scroll', function() {
  // Показываем кнопку, если прокрутили больше чем на высоту окна
  upButton.style.display = window.pageYOffset > window.innerHeight ? 'block' : 'none';
});

// Обработчик клика по кнопке
upButton.addEventListener('click', function() {
  // Плавная прокрутка вверх
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});