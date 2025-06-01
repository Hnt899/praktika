"use strict";
let phrase = "Hello";

if (true) {
  let user = "John";
  
  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi(); // Ошибка: sayHi is not defined