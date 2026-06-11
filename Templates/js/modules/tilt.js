/* tilt.js — 3D card tilt seguindo o mouse */

export function initTilt() {
  document.querySelectorAll('.hover-tilt').forEach(el => {
    el.addEventListener('mousemove', e => {
      el.style.transition = 'none';
      const rect     = el.getBoundingClientRect();
      const cx       = rect.left + rect.width  / 2;
      const cy       = rect.top  + rect.height / 2;
      const dx       = (e.clientX - cx) / (rect.width  / 2);
      const dy       = (e.clientY - cy) / (rect.height / 2);
      const strength = parseFloat(el.dataset.tiltStrength ?? '14');
      el.style.transform =
        `perspective(700px) rotateY(${dx * strength}deg) rotateX(${-dy * strength}deg) scale(1.03)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transition = '';
      el.style.transform = '';
    });
  });
}
