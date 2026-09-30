/**
 * PORTAL DO INVOCADOR — VALIDAÇÃO DE CONTATO & SUPORTE
 */
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const toastSuccess = document.getElementById('toast-success');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // Campos
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const subjectSelect = document.getElementById('contact-subject');
    const messageInput = document.getElementById('contact-message');

    function validateField(input, condition) {
      const formGroup = input.closest('.form-group');
      if (!condition) {
        formGroup.classList.add('has-error');
        isValid = false;
      } else {
        formGroup.classList.remove('has-error');
      }
    }

    // Validação de Nome (mínimo 3 caracteres)
    validateField(nameInput, nameInput.value.trim().length >= 3);

    // Validação de E-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    validateField(emailInput, emailRegex.test(emailInput.value.trim()));

    // Validação de Assunto
    validateField(subjectSelect, subjectSelect.value !== '');

    // Validação de Mensagem (mínimo 10 caracteres)
    validateField(messageInput, messageInput.value.trim().length >= 10);

    if (isValid) {
      if (toastSuccess) {
        toastSuccess.style.display = 'block';
        toastSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      form.reset();

      // Esconder toast após 6 segundos
      setTimeout(() => {
        if (toastSuccess) toastSuccess.style.display = 'none';
      }, 6000);
    }
  });
});
