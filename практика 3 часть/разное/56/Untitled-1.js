// 1. Получить элемент <div>
const div = document.body.children[0]; // или document.querySelector('div')

// 2. Получить <ul>
const ul = document.body.children[1]; // или document.querySelector('ul')

// 3. Получить второй <li> (с именем Пит)
const secondLi = ul.children[1]; // или ul.querySelectorAll('li')[1]

console.log(div, ul, secondLi);