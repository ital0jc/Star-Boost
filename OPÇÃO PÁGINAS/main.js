// Menu mobile toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// Fechar menu ao clicar em um link (mobile)
document.querySelectorAll('.nav-item').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuToggle.classList.remove('active');
  });
});

// Animação de fade-in para elementos quando aparecem na viewport
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observar elementos para animação
document.querySelectorAll('.plano-card, .depoimento-card, .social-link, .stat-card, .step-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// Classe para animação de fade-in
const style = document.createElement('style');
style.textContent = `
  .fade-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(style);

// Contador animado para os números estatísticos
const stats = document.querySelectorAll('.stat-number');

function animateNumber(element, target) {
  const number = parseFloat(target);
  const increment = number / 50;
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= number) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.round(current);
      if (target.includes('+')) {
        element.textContent += '+';
      }
      if (target.includes('k')) {
        element.textContent += 'k+';
      }
    }
  }, 30);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = entry.target.textContent;
      animateNumber(entry.target, target);
      statsObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

stats.forEach(stat => {
  statsObserver.observe(stat);
});