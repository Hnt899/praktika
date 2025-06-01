// Для вычисления scrollBottom:
const scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;

// Пример использования:
const elem = document.getElementById('scrollable');
console.log(`Прокрутка снизу: ${scrollBottom}px`);