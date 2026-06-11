/* main.js — Entry point ES Module */

import { initHeader }         from './modules/header.js';
import { initFaq }            from './modules/faq.js';
import { initCountdown }      from './modules/countdown.js';
import { initFormWhatsapp }   from './modules/form-whatsapp.js';
import { initScrollReveal }   from './modules/scroll-reveal.js';
import { initTilt }           from './modules/tilt.js';
import { initParallax }       from './modules/parallax.js';
import { initCounter }        from './modules/counter.js';
import { initTypewriter }     from './modules/typewriter.js';
import { initTabs }           from './modules/tabs.js';
import { initScrollProgress } from './modules/scroll-progress.js';

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initFaq();
  initCountdown();
  initFormWhatsapp();
  initScrollReveal();
  initTilt();
  initParallax();
  initCounter();
  initTypewriter();
  initTabs();
  initScrollProgress();
});
