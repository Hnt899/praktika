// Ответ: Будут выполнены обработчики 1 и 3
// removeEventListener не сработает, так как передается новая функция
button.addEventListener("click", () => alert("1")); // 1. Сработает
button.removeEventListener("click", () => alert("1")); // 2. Не сработает
button.onclick = () => alert(2); // 3. Сработает