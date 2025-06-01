const gallery = document.querySelector('.gallery');
const mainImg = document.querySelector('.main-img');
const thumbnails = document.querySelectorAll('.thumbnail');

// Вариант 1: Обработчики для каждой миниатюры
thumbnails.forEach(thumb => {
  thumb.addEventListener('click', () => {
    mainImg.src = thumb.dataset.fullsize || thumb.src;
    mainImg.alt = thumb.alt;
  });
});

// Вариант 2: Делегирование событий (лучше для динамического контента)
gallery.addEventListener('click', function(event) {
  const thumb = event.target.closest('.thumbnail');
  if (thumb) {
    mainImg.src = thumb.dataset.fullsize || thumb.src;
    mainImg.alt = thumb.alt;
    
    // Добавляем анимацию
    mainImg.style.opacity = '0';
    setTimeout(() => mainImg.style.opacity = '1', 100);
  }
});