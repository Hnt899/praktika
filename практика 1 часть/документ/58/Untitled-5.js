// Получаем все элементы li
const allLiElements = document.querySelectorAll('li');

// Перебираем каждый элемент
allLiElements.forEach(li => {
  // 1. Текст элемента (без подэлементов)
  const text = li.firstChild.textContent.trim();
  
  // 2. Количество вложенных li (включая глубокие)
  const nestedCount = li.querySelectorAll('li').length;
  
  console.log(`Текст: ${text}, Потомков: ${nestedCount}`);
});