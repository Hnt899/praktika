const menuTitle = document.querySelector('.menu-title');
const menuItems = document.querySelector('.menu-items');

menuTitle.addEventListener('click', function() {
  menuItems.classList.toggle('hidden');
  this.textContent = menuItems.classList.contains('hidden') 
    ? '► Сладости (нажми меня)!' 
    : '▼ Сладости (нажми меня)!';
});