// Находим элемент с атрибутом data-widget-name
const widget = document.querySelector('[data-widget-name]');

// Получаем значение атрибута
const widgetName = widget.getAttribute('data-widget-name');
// Или можно использовать dataset:
// const widgetName = widget.dataset.widgetName;

console.log(widgetName); // Выведет "menu"