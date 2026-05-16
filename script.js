const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const year = document.querySelector('#year');

if (year) year.textContent = new Date().getFullYear();

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}


// make entire cards clickable when they contain a main link
(function makeCardsClickable(){
  const selectors = ['.blog-card', '.course-card', '.feature-item', '.info-card', '.price-card'];
  document.querySelectorAll(selectors.join(',')).forEach(card => {
    if (card.closest('a')) return;
    const link = card.querySelector('a[href]');
    if (!link) return;
    card.style.cursor = 'pointer';
    card.addEventListener('click', (event) => {
      if (event.target.closest('a, button, summary, input, textarea, select')) return;
      const href = link.getAttribute('href');
      if (!href) return;
      if (link.target === '_blank') window.open(href, '_blank', 'noopener');
      else window.location.href = href;
    });
  });
})();
