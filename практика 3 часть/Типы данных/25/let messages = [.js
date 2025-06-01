let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readDates = new WeakMap();

// Добавляем дату прочтения
readDates.set(messages[0], new Date(2025, 5, 1));
readDates.set(messages[1], new Date());

// Получаем дату прочтения
alert(readDates.get(messages[0])); // Sun Jun 01 2025 00:00:00
alert(readDates.get(messages[2])); // undefined (сообщение не прочитано)

// При удалении сообщения из массива, запись автоматически удалится из WeakMap
messages.pop();
// Теперь messages[2] больше не существует в WeakMap