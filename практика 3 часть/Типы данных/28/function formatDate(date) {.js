function formatDate(date) {
    let diff = new Date() - date;
    
    if (diff < 1000) return "прямо сейчас";
    if (diff < 60000) return Math.floor(diff / 1000) + " сек. назад";
    if (diff < 3600000) return Math.floor(diff / 60000) + " мин. назад";
    
    let d = date;
    d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
    ].map(component => component.slice(-2));
    
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

// Примеры:
alert(formatDate(new Date(new Date - 1))); // "прямо сейчас"
alert(formatDate(new Date(new Date - 30000))); // "30 сек. назад"
alert(formatDate(new Date(new Date - 86400000))); // "вчерашняя дата"