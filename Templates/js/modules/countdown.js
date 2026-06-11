/* countdown.js — Contador regressivo de urgência */

export function initCountdown() {
  const timers = document.querySelectorAll('[data-countdown]');
  if (!timers.length) return;

  timers.forEach(el => {
    const minutes = parseInt(el.dataset.countdown, 10) || 30;
    let total = minutes * 60;

    let intervalId;

    function tick() {
      if (total <= 0) {
        el.textContent = '00:00';
        clearInterval(intervalId);
        return;
      }
      total -= 1;
      const m = String(Math.floor(total / 60)).padStart(2, '0');
      const s = String(total % 60).padStart(2, '0');
      el.textContent = `${m}:${s}`;
    }

    tick();
    intervalId = setInterval(tick, 1000);
  });
}
