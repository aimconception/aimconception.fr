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
    btn.textContent = 'Envoi en cours…';
    btn.disabled = true;

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: new FormData(form)
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        btn.textContent = 'Message envoyé ✓';
        btn.style.background = '#2d7a4f';
        form.reset();
      } else {
        btn.textContent = 'Erreur – réessayez';
        btn.style.background = '#c0392b';
        btn.disabled = false;
      }
    })
    .catch(() => {
      btn.textContent = 'Erreur – réessayez';
      btn.style.background = '#c0392b';
      btn.disabled = false;
    });
  });
}
