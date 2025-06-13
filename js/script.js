//--slider animado e controle manual --------------------

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const indicadoresContainer = document.querySelector('.indicadores');

// Criar os spans
slides.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
    updateIndicadores();
  });
  indicadoresContainer.appendChild(dot);
});

// Seleciona todos os indicadores criados
const indicadores = document.querySelectorAll('.indicadores span');

// Atualiza os indicadores
function updateIndicadores() {
  indicadores.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

function showSlide(index) {
    slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    });
    updateIndicadores();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto troca a cada 5 segundos
setInterval(nextSlide, 5000);

// Inicial
showSlide(currentSlide);