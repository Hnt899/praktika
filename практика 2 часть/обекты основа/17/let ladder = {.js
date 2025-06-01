let ladder = {
    step: 0,
    
    up() {
        this.step++;
        return this; // Возвращаем сам объект для цепочки
    },
    
    down() {
        this.step--;
        return this; // Возвращаем сам объект для цепочки
    },
    
    showStep() {
        alert(this.step);
        return this; // Возвращаем сам объект для цепочки
    }
};

// Пример использования:
ladder.up().up().down().showStep().down().showStep(); // 1, затем 0