document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });
  }

  function mostrarSlideSiguiente() {
    const currentSlide = slides[currentIndex];
    currentSlide.style.animation = "slide-out-right 1s";
    setTimeout(() => {
      currentSlide.style.display = "none";
      currentSlide.style.animation = "";
    }, 1000);

    currentIndex++;
    if (currentIndex >= totalSlides) {
      currentIndex = 0;
    }

    const nextSlide = slides[currentIndex];
    nextSlide.style.display = "block";
    nextSlide.style.animation = "slide-in-left 1s";
  }

  function mostrarSlideAnterior() {
    const currentSlide = slides[currentIndex];
    currentSlide.style.animation = "slide-out-left 1s";
    setTimeout(() => {
      currentSlide.style.display = "none";
      currentSlide.style.animation = "";
    }, 1000);

    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = totalSlides - 1;
    }

    const prevSlide = slides[currentIndex];
    prevSlide.style.display = "block";
    prevSlide.style.animation = "slide-in-right 1s";
  }

  document.querySelector(".siguiente").addEventListener("click", mostrarSlideSiguiente);
  document.querySelector(".anterior").addEventListener("click", mostrarSlideAnterior);

  // Mostrar el primer slide al cargar la página
  showSlide(currentIndex);
});
