let currentDraggable = null;
let shiftX = 0;
let shiftY = 0;
let scrollInterval = null;

document.addEventListener('mousedown', (e) => {
  const draggable = e.target.closest('.draggable');
  if (!draggable) return;
  
  currentDraggable = draggable;
  const rect = draggable.getBoundingClientRect();
  
  shiftX = e.clientX - rect.left;
  shiftY = e.clientY - rect.top;
  
  draggable.style.position = 'absolute';
  draggable.style.zIndex = 1000;
  document.body.append(draggable);
  
  moveAt(e.clientX, e.clientY);
  
  function moveAt(clientX, clientY) {
    // Ограничиваем позицию в пределах окна
    let newX = clientX - shiftX;
    let newY = clientY - shiftY;
    
    newX = Math.max(0, Math.min(newX, window.innerWidth - draggable.offsetWidth));
    newY = Math.max(0, Math.min(newY, window.innerHeight - draggable.offsetHeight));
    
    draggable.style.left = newX + 'px';
    draggable.style.top = newY + 'px';
    
    // Автопрокрутка при приближении к границам
    handleAutoScroll(clientY);
  }
  
  function handleAutoScroll(clientY) {
    if (scrollInterval) clearInterval(scrollInterval);
    
    const scrollThreshold = 50;
    const scrollSpeed = 10;
    
    if (clientY < scrollThreshold) {
      scrollInterval = setInterval(() => {
        window.scrollBy(0, -scrollSpeed);
      }, 20);
    } else if (clientY > window.innerHeight - scrollThreshold) {
      scrollInterval = setInterval(() => {
        window.scrollBy(0, scrollSpeed);
      }, 20);
    }
  }
  
  function onMouseMove(e) {
    moveAt(e.clientX, e.clientY);
  }
  
  document.addEventListener('mousemove', onMouseMove);
  
  function onMouseUp() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
    if (scrollInterval) clearInterval(scrollInterval);
    currentDraggable = null;
  }
  
  document.addEventListener('mouseup', onMouseUp, { once: true });
});

// Отменяем стандартное поведение при dragstart
document.querySelectorAll('.draggable').forEach(el => {
  el.ondragstart = () => false;
});