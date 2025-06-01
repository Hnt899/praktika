function topSalary(salaries) {
  let maxSalary = 0;
  let topEarner = null;

  for (let [name, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      topEarner = name;
    }
  }

  return topEarner;
}

// Пример использования:
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert(topSalary(salaries)); // Pete
alert(topSalary({}));      // null