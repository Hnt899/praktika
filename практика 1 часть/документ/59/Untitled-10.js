// Находим все ссылки на странице
const links = document.querySelectorAll('a');

// Перебираем все ссылки
links.forEach(link => {
  const href = link.getAttribute('href');
  
  // Проверяем условия внешней ссылки
  if (href && href.includes('://') && !href.startsWith('http://internal.com')) {
    link.style.color = 'orange';
  }
});