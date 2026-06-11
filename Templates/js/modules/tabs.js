/* tabs.js — Troca de conteúdo com animação de fade */

export function initTabs() {
  document.querySelectorAll('[data-tabs]').forEach(container => {
    const triggers = container.querySelectorAll('[data-tab-trigger]');
    const panels   = container.querySelectorAll('[data-tab-panel]');

    function activate(id) {
      triggers.forEach(t => {
        const active = t.dataset.tabTrigger === id;
        t.classList.toggle('tabs__trigger--active', active);
        t.setAttribute('aria-selected', String(active));
      });

      panels.forEach(p => {
        if (p.dataset.tabPanel === id) {
          p.hidden = false;
          /* reflow com elemento visível — reinicia a animação corretamente */
          p.classList.remove('tabs__panel--entering');
          void p.offsetWidth;
          p.classList.add('tabs__panel--entering');
        } else {
          p.hidden = true;
          p.classList.remove('tabs__panel--entering');
        }
      });
    }

    triggers.forEach(t => t.addEventListener('click', () => activate(t.dataset.tabTrigger)));

    /* esconde todos, depois mostra o primeiro */
    panels.forEach(p => { p.hidden = true; });
    if (triggers.length) activate(triggers[0].dataset.tabTrigger);
  });
}
