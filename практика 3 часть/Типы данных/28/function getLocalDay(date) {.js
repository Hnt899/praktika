function getLocalDay(date) {
    return date.getDay() || 7;
}

// Пример:
let date = new Date(2012, 0, 3); // 3 января 2012
alert(getLocalDay(date)); // 2 (вторник)