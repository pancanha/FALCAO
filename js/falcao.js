
//-------------------------- MENU HAMBURGUER MOBILE-----------------//
document.addEventListener('DOMContentLoaded', function(){
    const btnMobile = document.getElementById('btn-mobile');
    
    function toggleMenu() {
        const nav = document.getElementById('nav');
        nav.classList.toggle('active');
        
        
    }
    
    btnMobile.addEventListener('click', toggleMenu);
    });




//------------------------SLIDE--------------------------//
var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 2000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1 
    }

    document.getElementById('radio'+cont).checked = true
}

//------------------------------BOTÃO QUE SOBE---------------------------//

 // Função para verificar a posição de rolagem e exibir/ocultar o botão
 window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var scrollTopBtn = document.getElementById("scrollTopBtn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

// Função para rolar suavemente para o topo
function scrollToTop() {
    document.body.scrollTop = 0; // Para navegadores da web
    document.documentElement.scrollTop = 0; // Para IE/Edge
}