let currentSlide = 0;
        
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

// Função para atualizar o slide visível
function updateSlide() {
    const slidesContainer = document.querySelector('.carousel-slides');
    slidesContainer.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
}

// Evento de clique para a seta esquerda
document.querySelector('.carousel-arrow.left').addEventListener('click', function() {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : totalSlides - 1;
    updateSlide();
});

// Evento de clique para a seta direita
document.querySelector('.carousel-arrow.right').addEventListener('click', function() {
    currentSlide = (currentSlide < totalSlides - 1) ? currentSlide + 1 : 0;
    updateSlide();
});

// Função para rotação automática dos slides
function autoRotateSlides() {
    currentSlide = (currentSlide < totalSlides - 1) ? currentSlide + 1 : 0;
    updateSlide();
}

// Configura a rotação automática para ocorrer a cada 30 segundos (30000 ms)
setInterval(autoRotateSlides, 8000);