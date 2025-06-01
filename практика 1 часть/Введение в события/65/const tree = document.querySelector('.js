const tree = document.querySelector('.tree');

tree.addEventListener('click', function(event) {
  const title = event.target.closest('.tree-title');
  if (!title) return;
  
  const list = title.nextElementSibling;
  if (list && list.classList.contains('tree-list')) {
    list.hidden = !list.hidden;
    title.querySelector('.arrow').textContent = list.hidden ? '▶' : '▼';
  }
});