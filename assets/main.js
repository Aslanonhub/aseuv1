// Theme toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('#theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('light');
    });
  }

  // Reveal animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      if (answer) {
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
      }
    });
  });
});
