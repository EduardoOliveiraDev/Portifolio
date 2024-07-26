const carrossel = document.querySelector('.mc2Container');
const slides = document.querySelectorAll('.mc2Item');
const anterior = document.getElementById('mc2Left');
const proximo = document.getElementById('mc2Right');
let currentIndex = 1; 

anterior.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        atualizarSlideAtual();
    }
});


proximo.addEventListener('click', () => {
    if (currentIndex < 8) { 
        currentIndex++;
        atualizarSlideAtual();
    }
});


slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
        if (index < currentIndex) {
            currentIndex = index;
            atualizarSlideAtual();
        } 
        else if (index > currentIndex) {
            currentIndex = index;
            atualizarSlideAtual();
        }
    });
});

function atualizarSlideAtual() {
    slides.forEach((slide, index) => {
        if (index === currentIndex) {
            slide.id = 'ativo';
        } else if (index === currentIndex - 1 || index === currentIndex + 1) {
            slide.id = 'ativo2';
        } else {
            slide.removeAttribute('id');
        }
        
        // Adiciona espaço extra à esquerda se estiver no primeiro slide
        if (currentIndex === 0 && index === 0) {
            slide.style.marginLeft = '30%';
        } else {
            slide.style.marginLeft = '0';
        }

        // Adiciona espaço extra à direita se estiver no último slide
        if (currentIndex === 8 && index === 8) {
            slide.style.marginRight = '30%';
        } else {
            slide.style.marginRight = '0';
        }
    });
}
