let promise = Promise.reject(new Error("Ошибка!"));

// Вариант 1 - перехватывает все ошибки
promise
  .then(result => {
    console.log("Then 1:", result);
    throw new Error("Ошибка в then!");
  })
  .catch(err => console.log("Catch 1:", err.message)); 
  // Выведет: "Catch 1: Ошибка!"

// Вариант 2 - не перехватывает ошибки в then
promise.then(
  result => {
    console.log("Then 2:", result);
    throw new Error("Ошибка в then!");
  },
  err => console.log("Then error handler:", err.message)
); 
// Выведет: "Then error handler: Ошибка!", 
// но не поймает "Ошибка в then!"