new Promise(function(resolve, reject) {
  setTimeout(() => {
    try {
      throw new Error("Whoops!");
    } catch (err) {
      reject(err); // Явно отклоняем промис
    }
  }, 1000);
}).catch(alert); // Теперь сработает