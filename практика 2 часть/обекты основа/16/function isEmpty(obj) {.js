function isEmpty(obj) {
    for (let key in obj) {
        // Если есть хотя бы одно свойство - объект не пустой
        return false;
    }
    return true;
}

// Альтернативные варианты:
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function isEmpty(obj) {
    return JSON.stringify(obj) === '{}';
}