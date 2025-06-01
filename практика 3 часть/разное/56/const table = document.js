const table = document.querySelector('table'); // Получаем таблицу

// Перебираем все строки таблицы
for (let i = 0; i < table.rows.length; i++) {
  const row = table.rows[i];
  
  // Находим ячейку в текущей строке с индексом равным номеру строки
  if (i < row.cells.length) {
    const diagonalCell = row.cells[i];
    diagonalCell.style.backgroundColor = 'red';
  }
}