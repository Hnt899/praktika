const contents = document.getElementById('contents');

contents.addEventListener('click', function(event) {
  const link = event.target.closest('a');
  
  if (link && contents.contains(link)) {
    const isLeaving = confirm(`Вы действительно хотите перейти по ссылке ${link.href}?`);
    if (!isLeaving) {
      event.preventDefault();
    }
  }
});