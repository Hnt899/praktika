let user = { 
  name: "John", 
  years: 30 
};

// Деструктуризация объекта с переименованием и значением по умолчанию
let {name, years: age, isAdmin = false} = user;

alert(name);     // John
alert(age);      // 30
alert(isAdmin);  // false