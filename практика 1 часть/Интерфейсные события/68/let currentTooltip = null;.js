let currentTooltip = null;

document.addEventListener('mouseover', function(event) {
  // Находим ближайший элемент с подсказкой
  const target = event.target.closest('[data-tooltip]');
  if (!target) return;
  
  // Отменяем предыдущую подсказку
  if (currentTooltip) currentTooltip.remove();
  
  // Создаем новую подсказку
  currentTooltip = document.createElement('div');
  currentTooltip.className = 'tooltip';
  currentTooltip.textContent = target.dataset.tooltip;
  document.body.append(currentTooltip);
  
  // Позиционируем подсказку
  const targetRect = target.getBoundingClientRect();
  const tooltipRect = currentTooltip.getBoundingClientRect();
  
  let top = targetRect.top - tooltipRect.height - 5;
  let left = targetRect.left + (targetRect.width - tooltipRect.width) / 2;
  
  // Корректируем позицию, если выходит за границы экрана
  if (top < 0) top = targetRect.bottom + 5;
  if (left < 0) left = 0;
  if (left + tooltipRect.width > window.innerWidth) {
    left = window.innerWidth - tooltipRect.width;
  }
  
  currentTooltip.style.top = `${top + window.pageYOffset}px`;
  currentTooltip.style.left = `${left + window.pageXOffset}px`;
});

document.addEventListener('mouseout', function(event) {
  // Проверяем, остался ли курсор внутри элемента с подсказкой
  if (!event.relatedTarget || !event.relatedTarget.closest('[data-tooltip]')) {
    if (currentTooltip) {
      currentTooltip.remove();
      currentTooltip = null;
    }
  }
});