function checkScroll() {
  // Проверяем, находится ли пользователь в 100px от конца страницы
  if (document.documentElement.scrollHeight - window.pageYOffset - window.innerHeight < 100) {
    // Добавляем новую дату и время
    const newItem = document.createElement('div');
    newItem.textContent = `Date: ${new Date()}`;
    document.body.append(newItem);
    
    // Если добавили элемент, снова проверяем позицию
    setTimeout(checkScroll, 100);
  }
}

// Проверяем при загрузке и при прокрутке
window.addEventListener('scroll', checkScroll);
checkScroll(); // Проверить сразу при загрузке