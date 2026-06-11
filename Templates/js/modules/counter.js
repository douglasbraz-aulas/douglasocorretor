/* counter.js — Números que contam animados ao entrar na tela */

export function initCounter() {
  const elements = document.querySelectorAll('[data-counter]');
  if (!elements.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.4 });

  elements.forEach(el => observer.observe(el));
}

export function animateCounter(el) {
  const target   = parseFloat(el.dataset.counter);
  const duration = parseInt(el.dataset.duration ?? '1500', 10);
  const suffix   = el.dataset.suffix   ?? '';
  const prefix   = el.dataset.prefix   ?? '';
  const decimals = parseInt(el.dataset.decimals ?? '0', 10);
  const startTs  = performance.now();

  function tick(now) {
    const elapsed  = now - startTs;
    const progress = Math.min(elapsed / duration, 1);
    const ease     = 1 - Math.pow(1 - progress, 3);
    const value    = (ease * target).toFixed(decimals);
    el.textContent = prefix + parseFloat(value).toLocaleString('pt-BR', {
      minimumFractionDigits: decimals
    }) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}
