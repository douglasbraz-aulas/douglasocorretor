// header.js - Comportamentos do Cabeçalho e Menu Mobile

export function initHeader() {
  const header = document.querySelector('.header');
  const toggleBtn = document.querySelector('.header__toggle');
  const nav = document.querySelector('.header__nav');
  const menuLinks = document.querySelectorAll('.header__menu-link');

  // 1. Efeito de scroll no Header (muda background ao rolar)
  function handleScroll() {
    if (window.scrollY > 50) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Executa inicialmente para checar a posição atual

  // 2. Toggle do Menu Mobile
  if (toggleBtn && nav) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = nav.classList.toggle('header__nav--active');
      toggleBtn.classList.toggle('header__toggle--active');
      toggleBtn.setAttribute('aria-expanded', isActive);
    });

    // Fechar ao clicar fora do menu
    document.addEventListener('click', (e) => {
      if (nav.classList.contains('header__nav--active') && !nav.contains(e.target) && !toggleBtn.contains(e.target)) {
        nav.classList.remove('header__nav--active');
        toggleBtn.classList.remove('header__toggle--active');
        toggleBtn.setAttribute('aria-expanded', false);
      }
    });
  }

  // 3. Fechar menu mobile ao clicar em um link (âncora)
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (nav && nav.classList.contains('header__nav--active')) {
        nav.classList.remove('header__nav--active');
        toggleBtn.classList.remove('header__toggle--active');
        toggleBtn.setAttribute('aria-expanded', false);
      }
    });
  });
}
