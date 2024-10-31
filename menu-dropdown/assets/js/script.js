// Seleciona os elementos do DOM: botão, ícone do menu e barra lateral
let btnToggle = document.querySelector('[btn-toggle]');
let menuIcon = document.querySelector('.fa-bars');
let sidebar = document.querySelector('[sidebar]');

// Controla a exibição da barra lateral e do ícone
btnToggle.addEventListener('click', () => {
  if(menuIcon.classList.contains('fa-bars')) {
    menuIcon.classList.replace('fa-bars', 'fa-x');
    sidebar.classList.add('active');
  } else {
    menuIcon.classList.replace('fa-x', 'fa-bars');
    sidebar.classList.remove('active');
  }
});