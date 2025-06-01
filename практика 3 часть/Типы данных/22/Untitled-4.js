let styles = ["Джаз", "Блюз"];

// 1. Добавить "Рок-н-ролл" в конец
styles.push("Рок-н-ролл");

// 2. Заменить значение в середине на "Классика"
let middleIndex = Math.floor((styles.length - 1) / 2);
styles[middleIndex] = "Классика";

// 3. Удалить первый элемент и показать его
let first = styles.shift();
alert(first); // "Джаз"

// 4. Вставить "Pan" и "Perru" в начало
styles.unshift("Pan", "Perru");

// Результат: ["Pan", "Perru", "Классика", "Рок-н-ролл"]