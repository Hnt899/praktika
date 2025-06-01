let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

// Или с использованием Object.values:
let sum = Object.values(salaries).reduce((acc, val) => acc + val, 0);