document.querySelectorAll('.message').forEach(message => {
  const closeBtn = document.createElement('button');
  closeBtn.textContent = '[x]';
  closeBtn.className = 'close-btn';
  closeBtn.addEventListener('click', () => message.remove());
  
  message.style.position = 'relative';
  closeBtn.style.position = 'absolute';
  closeBtn.style.top = '0';
  closeBtn.style.right = '0';
  
  message.prepend(closeBtn);
});