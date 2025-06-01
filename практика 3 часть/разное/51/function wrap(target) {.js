function wrap(target) {
  return new Proxy(target, {
    get(target, prop, receiver) {
      if (prop in target) {
        return Reflect.get(target, prop, receiver);
      } else {
        throw new Error(`Ошибка: свойства "${prop}" не существует`);
      }
    }
  });
}

let user = {
  name: "John"
};

user = wrap(user);

console.log(user.name); // John
console.log(user.age); // Ошибка: свойства "age" не существует