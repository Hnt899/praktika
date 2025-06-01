let obj = {}; // Создаем один объект заранее

function A() { return obj; }
function B() { return obj; }

let a = new A();
let b = new B();

alert(a == b); // true