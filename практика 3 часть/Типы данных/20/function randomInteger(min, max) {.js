function randomInteger(min, max) {
    // Случайное число от min до max+1, затем округляем вниз
    return Math.floor(min + Math.random() * (max + 1 - min));
}

// Альтернативный вариант:
function randomInteger(min, max) {
    return Math.floor(random(min, max + 1));
}