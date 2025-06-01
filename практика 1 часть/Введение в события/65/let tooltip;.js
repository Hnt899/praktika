let tooltip;

document.addEventListener('mouseover', function(event) {
  const target = event.target.closest('[data-tooltip]');
  if (!target) return;
  
  // Создаем подсказку
  tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  tooltip.innerHTML = target.dataset.tooltip;
  document.body.append(tooltip);
  
  // Позиционируем подсказку
  const targetRect = target.getBoundingClientRect();
  const tooltipRect = tooltip.getBoundingClientRect();
  
  let top = targetRect.top - tooltipRect.height - 5;
  let left = targetRect.left + (targetRect.width - tooltipRect.width) / 2;
  
  // Проверяем, не выходит ли подсказка за границы экрана
  if (top < 0) {
    top = targetRect.bottom + 5;
  }
  
  if (left < 0) left = 0;
  if (left + tooltipRect.width > document.documentElement.clientWidth) {
    left = document.documentElement.clientWidth - tooltipRect.width;
  }
  
  tooltip.style.top = `${top + window.pageYOffset}px`;
  tooltip.style.left = `${left + window.pageXOffset}px`;
});

document.addEventListener('mouseout', function(event) {
  if (event.target.closest('[data-tooltip]') && tooltip