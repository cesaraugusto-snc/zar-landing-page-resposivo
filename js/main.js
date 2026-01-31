import { acaoZap, enviarWats } from'./services/whatsapp.js';
import { menu_hamburguer } from './ui/menu.js';

// Hamburguer do site
menu_hamburguer();

// Encaminhar a mensagem para o whatsapp

const btnZap = document.getElementById('botao-cta-header');
if (btnZap) {
  btnZap.addEventListener('click', acaoZap);
}

// Formulário
window.enviarWats = enviarWats;

console.log('Menu carregado');