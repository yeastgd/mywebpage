document.getElementById('btn-view-projects')?.addEventListener('click', () => {
  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
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
