export function menu_hamburguer() {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');

  hamburger.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    hamburger.classList.toggle('ativo');
  });

  // Fechar menu ao clicar em um link
  document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('ativo');
      hamburger.classList.remove('ativo');
    });
  });
}