function getScrollbarWidth() {
  // Создаем временный элемент
  const div = document.createElement('div');
  div.style = `
    width: 100px;
    height: 100px;
    overflow: scroll;
    position: absolute;
    top: -9999px;
  `;
  document.body.appendChild(div);
  
  // Вычисляем разницу между полной шириной и видимой
  const scrollbarWidth = div.offsetWidth - div.clientWidth;
  
  // Удаляем временный элемент
  document.body.removeChild(div);
  
  return scrollbarWidth;
}

console.log(`Ширина полосы прокрутки: ${getScrollbarWidth()}px`);