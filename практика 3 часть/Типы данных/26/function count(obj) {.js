function count(obj) {
    return Object.keys(obj).length;
}

// Альтернативный вариант:
function count(obj) {
    return Object.values(obj).length;
}

// Еще один вариант:
function count(obj) {
    return Object.entries(obj).length;
}

// Пример использования:
let user = {
    name: 'John',
    age: 30
};

alert(count(user)); // 2
alert(count({})); // 0