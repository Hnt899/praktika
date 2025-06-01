const user = {
    name: "John"
};

// Это будет работать!
user.name = "Pete";

// Но это вызовет ошибку:
// user = { name: "Pete" };