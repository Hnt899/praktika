const slider = document.getElementById('slider');
const thumb = document.getElementById('thumb');
let isDragging = false;

thumb.addEventListener('mousedown', (e) => {
  isDragging = true;
  thumb.style.position = 'absolute';
  thumb.style.zIndex = 1000;
  document.body.append(thumb);
  
  function moveAt(pageX) {
    let newLeft = pageX - slider.getBoundingClientRect().left - thumb.offsetWidth / 2;
    
    // Ограничиваем перемещение в пределах слайдера
    newLeft = Math.max(0, Math.min(newLeft, slider.offsetWidth - thumb.offsetWidth));
    
    thumb.style.left = newLeft + 'px';
  }
  
  moveAt(e.pageX);
  
  function onMouseMove(e) {
    if (!isDragging) return;
    moveAt(e.pageX);
  }
  
  document.addEventListener('mousemove', onMouseMove);
  
  thumb.addEventListener('mouseup', () => {
    isDragging = false;
    document.removeEventListener('mousemove', onMouseMove);
  }, { once: true });
});

// Отменяем стандартное поведение при dragstart
thumb.ondragstart = () => false;