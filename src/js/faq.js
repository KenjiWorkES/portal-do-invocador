/**
 * PORTAL DO INVOCADOR — ACCORDION FAQ
 * Comportamento sanfona com suporte completo a acessibilidade (aria-expanded)
 */
document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const headerBtn = item.querySelector('.faq-header');
    if (!headerBtn) return;

    headerBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Fechar outros itens abertos para manter foco limpo
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherBtn = otherItem.querySelector('.faq-header');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      // Alternar estado atual
      item.classList.toggle('active', !isActive);
      headerBtn.setAttribute('aria-expanded', !isActive);
    });
  });
});
