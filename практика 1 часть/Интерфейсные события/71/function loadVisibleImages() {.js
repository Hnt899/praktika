function loadVisibleImages() {
  const images = document.querySelectorAll('img[data-src]');
  
  images.forEach(img => {
    if (img.hasAttribute('data-src') && isElementInViewport(img)) {
      img.src = img.dataset.src;
      img.removeAttribute('data-src'); // Убираем атрибут, чтобы не загружать повторно
    }
  });
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Проверяем при загрузке и при прокрутке
window.addEventListener('load', loadVisibleImages);
window.addEventListener('scroll', loadVisibleImages);
window.addEventListener('resize', loadVisibleImages);