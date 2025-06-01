function sumInput() {
    let numbers = [];
    let input;
    
    while (true) {
        input = prompt("Введите число", "");
        
        if (input === null || input === "" || !isFinite(input)) break;
        
        numbers.push(+input);
    }
    
    return numbers.reduce((sum, current) => sum + current, 0);
}

alert(sumInput());