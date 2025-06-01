function getSecondsToday() {
    let now = new Date();
    return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
}

// Пример (если сейчас 10:00):
alert(getSecondsToday()); // 36000