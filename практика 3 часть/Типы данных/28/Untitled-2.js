function getLastDayOfMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

// Пример:
alert(getLastDayOfMonth(2012, 1)); // 29 (февраль 2012)