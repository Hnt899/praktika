let user = {
  name: "Василий Иванович",
  age: 35
};

// Преобразуем объект в JSON-строку
let userJson = JSON.stringify(user);

// Преобразуем JSON-строку обратно в объект
let userObj = JSON.parse(userJson);

console.log(userJson); // '{"name":"Василий Иванович","age":35}'
console.log(userObj);  // {name: "Василий Иванович", age: 35}