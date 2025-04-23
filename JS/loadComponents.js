// Función para cargar un componente HTML en un contenedor
const loadComponent = async (url, containerId) => {
  try {
    const res = await fetch(url);
    const html = await res.text();
    document.getElementById(containerId).innerHTML = html;
  } catch (error) {
    console.error(`Error al cargar ${url}:`, error);
  }
};

// Carga los componentes en sus respectivos contenedores
loadComponent('./components/main.html', 'main');
loadComponent('./components/carousel.html', 'carousel');
loadComponent('./components/about-us.html', 'about-us');
loadComponent('./components/servicios.html', 'servicios');
loadComponent('./components/destinos.html', 'destinos');

loadComponent('./components/footer.html', 'footer');

loadComponent('./components/header.html', 'header');



loadComponent('./components/contact-form.html', 'container') // ESTA CLASE ESTA MAL NOMBRADA.... 
//   MAS ADELANTE SE PUEDE CAMBIAR A ALGO MAS BONITO....

