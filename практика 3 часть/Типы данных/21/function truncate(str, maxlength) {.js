function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + '…';
    }
    return str;
}

// Примеры:
alert( truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) );
// "Вот, что мне хотелось…"
alert( truncate("Всем привет!", 20) ); // "Всем привет!"