function sortByAge(users) {
    users.sort((a, b) => a.age - b.age);
}

// Пример:
let arr = [vasya, petya, masha];
sortByAge(arr);
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша