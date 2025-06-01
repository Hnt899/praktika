const tbody = document.querySelector('tbody');
const rows = Array.from(tbody.rows);

rows.sort((a, b) => a.cells[0].textContent.localeCompare(b.cells[0].textContent));
tbody.append(...rows);