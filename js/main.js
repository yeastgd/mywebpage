document.getElementById('btn-view-projects')?.addEventListener('click', () => {
  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
});

const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle?.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

const contactForm = document.querySelector('.contact-form');
const formStatus = contactForm?.querySelector('.form-status');

contactForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  formStatus.style.display = 'block';
  formStatus.textContent = 'Sending...';

  try {
    const response = await fetch(contactForm.action, {
      method: 'POST',
      body: new FormData(contactForm),
      headers: { Accept: 'application/json' },
    });
    if (response.ok) {
      formStatus.textContent = "Thanks! Your message has been sent.";
      contactForm.reset();
    } else {
      formStatus.textContent = "Something went wrong. Please try emailing me directly.";
    }
  } catch {
    formStatus.textContent = "Something went wrong. Please try emailing me directly.";
  } finally {
    submitBtn.disabled = false;
  }
});
