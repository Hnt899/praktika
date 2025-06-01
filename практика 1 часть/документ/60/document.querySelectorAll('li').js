document.querySelectorAll('li').forEach(li => {
  const nested = li.querySelectorAll('li').length;
  if (nested) li.firstChild.textContent += ` [${nested}]`;
});