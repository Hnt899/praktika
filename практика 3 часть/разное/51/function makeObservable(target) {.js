function makeObservable(target) {
  const handlers = [];
  
  target.observe = function(handler) {
    handlers.push(handler);
  };
  
  return new Proxy(target, {
    set(target, prop, value, receiver) {
      const success = Reflect.set(target, prop, value, receiver);
      if (success) {
        handlers.forEach(handler => handler(prop, value));
      }
      return success;
    }
  });
}

let user = {};
user = makeObservable(user);

user.observe((key, value) => {
  console.log(`SET ${key}=${value}`);
});

user.name = "John"; // Выведет: SET name=John
user.age = 30;      // Выведет: SET age=30