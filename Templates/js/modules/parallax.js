/* parallax.js — Camadas com velocidades diferentes no scroll */

export function initParallax() {
  const elements = document.querySelectorAll('[data-parallax]');
  if (!elements.length) return;

  /* captura a posição original (before any transform) */
  const origins = Array.from(elements).map(el =>
    el.getBoundingClientRect().top + window.scrollY + el.offsetHeight / 2
  );

  let ticking = false;

  function update() {
    const vpCenter = window.scrollY + window.innerHeight / 2;
    elements.forEach((el, i) => {
      const speed  = parseFloat(el.dataset.speed ?? '0.3');
      const offset = (vpCenter - origins[i]) * speed;
      el.style.transform = `translateY(${offset}px)`;
    });
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });

  update();
}
