/**
 * PORTAL DO INVOCADOR — NAVEGAÇÃO & MENU MOBILE
 */
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const mainNav = document.querySelector('.main-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuBtn && mainNav) {
    menuBtn.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('is-open');
      menuBtn.setAttribute('aria-expanded', isOpen);
    });

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('is-open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Marcar página ativa baseado no pathname atual
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
