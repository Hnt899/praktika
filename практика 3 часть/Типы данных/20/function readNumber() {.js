function readNumber() {
    let num;
    do {
        num = prompt("Введите число", "");
        if (num === null || num === "") return null;
    } while (!isFinite(num));
    
    return +num;
}