function fib(n) {
    let a = 1, b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

// Примеры:
alert(fib(3));  // 2
alert(fib(7));  // 13
alert(fib(77)); // 5527939700884757