/* typewriter.js — Texto que digita letra a letra */

export function initTypewriter() {
  document.querySelectorAll('[data-typewriter]').forEach(el => {
    const text  = el.dataset.typewriter;
    const speed = parseInt(el.dataset.speed ?? '55', 10);
    const loop  = el.hasAttribute('data-loop');

    el.textContent = '';
    el.classList.add('typewriter-active');

    const observer = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) return;
      observer.unobserve(el);
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        el.textContent = text;
        return;
      }
      runTypewriter(el, text, speed, loop);
    }, { threshold: 0.5 });

    observer.observe(el);
  });
}

function runTypewriter(el, text, speed, loop) {
  let i = 0;

  function type() {
    el.textContent = text.slice(0, ++i);
    if (i < text.length) {
      setTimeout(type, speed);
    } else if (loop) {
      setTimeout(erase, 2000);
    }
  }

  function erase() {
    el.textContent = text.slice(0, --i);
    if (i > 0) setTimeout(erase, speed / 2);
    else setTimeout(type, 600);
  }

  type();
}
