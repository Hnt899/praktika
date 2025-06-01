function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    return Math.round((tomorrow - now) / 1000);
}

// Пример (если сейчас 23:00):
alert(getSecondsToTomorrow()); // 3600