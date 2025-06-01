const container = document.querySelector('.messages-container');

container.addEventListener('click', function(event) {
  if (event.target.classList.contains('close-btn')) {
    event.target.closest('.message').remove();
  }
});