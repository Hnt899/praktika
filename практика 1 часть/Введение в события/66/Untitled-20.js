// Проблема: return false в обработчике не предотвращает переход по ссылке
// Решение 1: Добавить return в обработчик
<a href="https://w3.org" onclick="return handler()">w3.org</a>

// Решение 2: Использовать preventDefault()
function handler(event) {
  alert("...");
  event.preventDefault();
  // или return false;
}
<a href="https://w3.org" onclick="handler(event)">w3.org</a>