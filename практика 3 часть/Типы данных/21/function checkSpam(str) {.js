function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

// Примеры:
alert( checkSpam('buy ViAgRA now') ); // true
alert( checkSpam('free xxxxx') );     // true
alert( checkSpam("innocent rabbit") ); // false