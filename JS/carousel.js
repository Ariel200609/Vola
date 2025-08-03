// Función para inicializar el carousel
const initCarousel = () => {
  let slideIndex = 0;
  let isTransitioning = false;
  let autoSlideInterval; // Variable para guardar el intervalo

  const slides = document.querySelectorAll('.carousel-slide');
  const container = document.querySelector('.carousel-container');

  if (!slides.length || !container) {
    console.error("No se encontraron elementos del carousel");
    return;
  }


  // Función para mover la diapositiva
  function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-slide');
    const container = document.querySelector('.carousel-container');

    slideIndex += direction;

    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    } else if (slideIndex >= slides.length) {
      slideIndex = 0;
    }

    const newTransformValue = -slideIndex * 100;
    container.style.transform = `translateX(${newTransformValue}%)`;

    // Reiniciar el auto-desplazamiento cada vez que se haga clic
    restartAutoSlide();
  }

  // Función para reiniciar el auto-desplazamiento
  function restartAutoSlide() {
    // Detener el intervalo actual
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval);
    }

    // Volver a iniciar el auto-desplazamiento
    autoSlideInterval = setInterval(() => moveSlide(1), 5000);
  }



  // Iniciar el auto-desplazamiento al cargar la página
  restartAutoSlide();
};

// Escuchar cuando los componentes estén cargados
document.addEventListener('componentsLoaded', initCarousel);

// También escuchar DOMContentLoaded como fallback
document.addEventListener('DOMContentLoaded', () => {
  // Esperar un poco más para asegurar que los componentes se carguen
  setTimeout(initCarousel, 100);
});
