function A() {}
function B() {}

A.prototype = {};
B.prototype = {};

let a = new A();

alert(a instanceof B); // false (теперь работает как ожидается)