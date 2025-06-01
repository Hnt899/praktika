function createTree(container, data) {
  container.innerHTML = createTreeHtml(data);
}

function createTreeHtml(data) {
  let html = '';
  for (let key in data) {
    html += `<li>${key}${createTreeHtml(data[key])}</li>`;
  }
  return html ? `<ul>${html}</ul>` : '';
}





function createTree(container, data) {
  if (Object.keys(data).length) {
    const ul = document.createElement('ul');
    for (let key in data) {
      const li = document.createElement('li');
      li.textContent = key;
      createTree(li, data[key]);
      ul.append(li);
    }
    container.append(ul);
  }
}