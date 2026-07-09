document.getElementById('btn-view-projects')?.addEventListener('click', () => {
  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.nav-cta')?.addEventListener('click', () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.contact-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
});
