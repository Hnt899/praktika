// document является объектом класса HTMLDocument
console.log(document.constructor.name); // "HTMLDocument"

// Место в иерархии:
// EventTarget <- Node <- Document <- HTMLDocument

// Проверка наследования:
console.log(document instanceof Node);      // true
console.log(document instanceof Element);  // false
console.log(document instanceof HTMLElement); // false