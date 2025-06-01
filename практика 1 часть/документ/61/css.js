function showNotification(options) {
  const notification = document.createElement('div');
  notification.className = `notification ${options.className || ''}`;
  notification.innerHTML = options.html;
  
  // Позиционирование
  Object.assign(notification.style, {
    position: 'fixed',
    top: `${options.top || 0}px`,
    right: `${options.right || 0}px`,
    transition: 'opacity 0.5s ease-out'
  });
  
  document.body.append(notification);
  
  // Запускаем анимацию исчезновения
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.addEventListener('transitionend', () => notification.remove());
  }, 1500);
}