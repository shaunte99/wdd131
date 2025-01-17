
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('open');
  menu.style.display = menu.classList.contains('open') ? 'flex' : 'none';
});


const currentYear = document.getElementById('current-year');
const lastModified = document.getElementById('last-modified');

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;
