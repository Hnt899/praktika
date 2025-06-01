const list = document.querySelector('ul');

// Предотвращаем выделение текста при кликах
list.addEventListener('mousedown', (e) => {
  e.preventDefault();
});

// Обработка кликов по элементам списка
list.addEventListener('click', (e) => {
  const item = e.target.closest('li');
  if (!item) return;

  // Проверяем, зажат ли Ctrl (Cmd на Mac)
  const isMultiSelect = e.ctrlKey || e.metaKey;

  if (isMultiSelect) {
    // Переключаем выделение только для текущего элемента
    item.classList.toggle('selected');
  } else {
    // Снимаем выделение со всех элементов
    document.querySelectorAll('li.selected').forEach(el => {
      if (el !== item) el.classList.remove('selected');
    });
    // Выделяем текущий элемент
    item.classList.add('selected');
  }
});