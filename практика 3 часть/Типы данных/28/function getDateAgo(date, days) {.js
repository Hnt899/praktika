function getDateAgo(date, days) {
    let newDate = new Date(date);
    newDate.setDate(date.getDate() - days);
    return newDate.getDate();
}

// Пример:
let date = new Date(2015, 0, 2);
alert(getDateAgo(date, 1)); // 1
alert(getDateAgo(date, 365)); // 2