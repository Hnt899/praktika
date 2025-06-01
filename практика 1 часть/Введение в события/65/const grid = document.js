const grid = document.getElementById('grid');
const tbody = grid.querySelector('tbody');
const rows = Array.from(tbody.rows);

grid.addEventListener('click', function(event) {
  const th = event.target.closest('th');
  if (!th) return;
  
  const type = th.dataset.type;
  const colNum = th.cellIndex;
  
  rows.sort((rowA, rowB) => {
    const a = rowA.cells[colNum].textContent;
    const b = rowB.cells[colNum].textContent;
    
    return type === 'number' 
      ? a - b 
      : a.localeCompare(b);
  });
  
  tbody.append(...rows);
});