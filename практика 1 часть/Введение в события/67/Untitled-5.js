list.addEventListener('click', (e) => {
  const item = e.target.closest('li');
  if (!item) return;

  const isMultiSelect = e.ctrlKey || e.metaKey;
  const isRangeSelect = e.shiftKey;
  const items = Array.from(list.children);
  const currentIndex = items.indexOf(item);

  if (isRangeSelect) {
    // Выделение диапазона с Shift
    const lastSelected = list.querySelector('li.selected:last-child');
    if (lastSelected) {
      const lastIndex = items.indexOf(lastSelected);
      const start = Math.min(currentIndex, lastIndex);
      const end = Math.max(currentIndex, lastIndex);
      
      items.forEach((el, i) => {
        el.classList.toggle('selected', i >= start && i <= end);
      });
    } else {
      item.classList.add('selected');
    }
  } else if (isMultiSelect) {
    item.classList.toggle('selected');
  } else {
    items.forEach(el => el.classList.remove('selected'));
    item.classList.add('selected');
  }
});