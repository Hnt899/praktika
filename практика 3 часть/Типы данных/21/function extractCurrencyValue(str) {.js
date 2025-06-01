function extractCurrencyValue(str) {
    return +str.slice(1);
}

// Универсальная версия (если знак валюты может быть любым нечисловым символом):
function extractCurrencyValue(str) {
    return parseFloat(str.replace(/[^\d.-]/g, ''));
}

// Примеры:
alert( extractCurrencyValue('$120') ); // 120
alert( extractCurrencyValue('#120') ); // 120
alert( extractCurrencyValue('€120') ); // 120