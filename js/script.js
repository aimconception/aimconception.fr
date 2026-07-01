// Menu central (bouton hamburger + dropdown)
document.addEventListener('DOMContentLoaded', function() {
  var menuBtn = document.getElementById('menuBtn');
  var dropdown = document.getElementById('dropdownMenu');
  if (menuBtn && dropdown) {
    menuBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      var isOpen = dropdown.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    document.addEventListener('click', function() {
      dropdown.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
    dropdown.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }
});

// Lien actif dans la nav
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a').forEach(a => {
  if (a.getAttribute('href') === currentPage) a.classList.add('active');
});
