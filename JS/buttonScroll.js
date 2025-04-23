// Obtén el botón
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Muestra el botón cuando el usuario haga scroll hacia abajo
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Cuando el usuario hace clic en el botón, vuelve al inicio
scrollToTopBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
