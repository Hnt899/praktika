// Команды 1 и 3 работают одинаково - добавляют текст как текст
elem.append(document.createTextNode(text)); // 1. Добавляет текстовый узел
elem.textContent = text;                   // 3. Устанавливает текстовое содержимое

// innerHTML (2) работает иначе - интерпретирует HTML-разметку
elem.innerHTML = text; // Если text содержит HTML, он будет разобран