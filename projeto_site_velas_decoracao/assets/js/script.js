
// Menu responsivo (toggle)
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
}

// Fecha o menu ao clicar em um link (opcional)
const menuLinks = document.querySelectorAll('.menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});
