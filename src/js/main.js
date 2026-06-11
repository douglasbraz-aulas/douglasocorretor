// main.js - Ponto de entrada do JavaScript (ES Modules)
import { initHeader } from './modules/header.js';
import { initContato } from './modules/contato.js';

document.addEventListener('DOMContentLoaded', () => {
  // Inicialização de módulos e comportamentos interativos
  initHeader();
  initContato();
});
