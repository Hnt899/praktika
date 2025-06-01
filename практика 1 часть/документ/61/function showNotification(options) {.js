function showNotification(options) {
  // Создаем элемент уведомления
  const notification = document.createElement('div');
  notification.className = 'notification';
  
  // Добавляем пользовательский класс, если он указан
  if (options.className) {
    notification.classList.add(options.className);
  }
  
  // Устанавливаем содержимое и позиционирование
  notification.innerHTML = options.html;
  notification.style.position = 'fixed';
  notification.style.top = (options.top || 0) + 'px';
  notification.style.right = (options.right || 0) + 'px';
  
  // Добавляем уведомление в документ
  document.body.append(notification);
  
  // Автоматически удаляем через 1.5 секунды
  setTimeout(() => notification.remove(), 1500);
}