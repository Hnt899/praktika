function createCalendar(elem, year, month) {
  const date = new Date(year, month-1);
  const table = document.createElement('table');
  
  // Заголовок с днями недели
  const thead = table.createTHead();
  const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  thead.innerHTML = `<tr>${days.map(d => `<th>${d}</th>`).join('')}</tr>`;
  
  // Тело календаря
  let tbody = table.createTBody();
  let row = tbody.insertRow();
  
  // Пустые ячейки до первого дня
  for (let i = 0; i < getDay(date); i++) {
    row.insertCell();
  }
  
  // Ячейки с днями
  while (date.getMonth() === month-1) {
    let cell = row.insertCell();
    cell.textContent = date.getDate();
    
    if (getDay(date) % 7 === 6) { // Воскресенье - новая строка
      row = tbody.insertRow();
    }
    
    date.setDate(date.getDate() + 1);
  }
  
  elem.append(table);
}

function getDay(date) {
  let day = date.getDay();
  return day === 0 ? 6 : day - 1; // Пн=0, Вс=6
}