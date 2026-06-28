// Menu mobile
const toggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');
if (toggle && navUl) {
  toggle.addEventListener('click', () => navUl.classList.toggle('open'));
  document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => navUl.classList.remove('open')));
}

// Lien actif dans la nav
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a').forEach(a => {
  if (a.getAttribute('href') === currentPage) a.classList.add('active');
});

// Formulaire contact
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Message envoyé ✓';
    btn.disabled = true;
    btn.style.background = '#2d7a4f';
  });
}
