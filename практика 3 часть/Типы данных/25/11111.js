let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();

// Добавляем сообщения в WeakSet при прочтении
readMessages.add(messages[0]);
readMessages.add(messages[1]);

// Проверяем, прочитано ли сообщение
alert(readMessages.has(messages[0])); // true
alert(readMessages.has(messages[2])); // false

// При удалении сообщения из массива, оно автоматически удалится из WeakSet
messages.shift();
// Теперь messages[0] больше не существует в WeakSet