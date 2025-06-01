function makeUser() {
    return {
        name: "John",
        ref() { return this; } // Метод, возвращающий this
    };
}

let user = makeUser();
alert(user.ref().name); // Теперь выведет "John"