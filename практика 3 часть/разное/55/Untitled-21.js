let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

// Создаем объект Collator с нужными настройками
let collator = new Intl.Collator('ru', {
  sensitivity: 'variant', // учитываем различия между буквами, но не регистр
  caseFirst: 'upper',     // заглавные буквы идут перед строчными
  usage: 'sort'           // указываем, что для сортировки
});

// Сортируем массив
animals.sort(collator.compare);

alert(animals); // АИСТ, ёж, енот, ехидна, тигр, ЯК