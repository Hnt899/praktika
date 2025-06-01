let ul = document.createElement('ul');
document.body.append(ul);

while (true) {
  let text = prompt("Введите содержимое пункта списка", "");
  if (!text) break;
  
  let li = document.createElement('li');
  li.textContent = text; // textContent вместо innerHTML для безопасности
  ul.append(li);
}