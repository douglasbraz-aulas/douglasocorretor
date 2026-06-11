/* form-whatsapp.js — Envio de formulários via WhatsApp */

export function initFormWhatsapp() {
  const forms = document.querySelectorAll('[data-whatsapp-form]');
  if (!forms.length) return;

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!validateForm(form)) return;

      const phone = form.dataset.whatsappPhone || '5511999999999';
      const submitBtn = form.querySelector('[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;

      const fields = Array.from(form.querySelectorAll('[data-label]'));

      const lines = fields
        .filter(field => field.value.trim() !== '')
        .map(field => `*${field.dataset.label}:* ${field.value.trim()}`);

      const formTitle = form.dataset.whatsappTitle || 'Formulário';
      const message = `*${formTitle}*\n\n${lines.join('\n')}`;

      const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

      showSuccess(form);
      window.open(url, '_blank');
    });
  });
}

function validateForm(form) {
  let valid = true;
  const required = form.querySelectorAll('[required]');

  required.forEach(field => {
    field.classList.remove('is-error');
    const errorEl = form.querySelector(`[data-error-for="${field.id}"]`);

    if (!field.value.trim()) {
      valid = false;
      field.classList.add('is-error');
      if (errorEl) errorEl.style.display = 'flex';
    } else {
      if (errorEl) errorEl.style.display = 'none';
    }
  });

  return valid;
}

function showSuccess(form) {
  const successEl = form.querySelector('.form__success');
  if (successEl) {
    form.querySelectorAll('.form__group, .form__row, [type="submit"]').forEach(el => {
      el.style.display = 'none';
    });
    successEl.classList.add('is-visible');
  }
}
