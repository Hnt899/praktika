function unique(arr) {
    return Array.from(new Set(arr));
}

// Пример использования:
let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
alert(unique(values)); // ["Hare", "Krishna", ":-O"]