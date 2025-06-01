function pow(x, n) {
    if (n < 1 || !Number.isInteger(n)) {
        return "Степень должна быть натуральным числом";
    }
    
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

let x = +prompt("Введите x", "");
let n = +prompt("Введите натуральное число n", "");

alert( pow(x, n) );