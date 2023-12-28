const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    
}

btnMobile.document.addEventListener('click', toggleMenu);
btnMobile.document.addEventListener('touchstart', toggleMenu);