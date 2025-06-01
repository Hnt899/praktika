function Accumulator(startingValue) {
    this.value = startingValue;
    
    this.read = function() {
        let input;
        do {
            input = prompt('Сколько нужно добавить?', 0);
        } while (isNaN(input));
        
        this.value += +input;
    };
}