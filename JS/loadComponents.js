// Función para cargar un componente HTML en un contenedor
const loadComponent = async (url, containerId) => {
  try {
    const res = await fetch(url);
    const html = await res.text();
    document.getElementById(containerId).innerHTML = html;
    return true;
  } catch (error) {
    console.error(`Error al cargar ${url}:`, error);
    return false;
  }
};

// Función para cargar todos los componentes y notificar cuando estén listos
const loadAllComponents = async () => {
  const components = [
    { url: './components/main.html', id: 'main' },
    { url: './components/carousel.html', id: 'carousel' },
    { url: './components/about-us.html', id: 'about-us' },
    { url: './components/servicios.html', id: 'servicios' },
    { url: './components/destinos.html', id: 'destinos' },
    { url: './components/footer.html', id: 'footer' },
    { url: './components/header.html', id: 'header' },
    { url: './components/contact-form.html', id: 'container' }
  ];

  try {
    await Promise.all(components.map(comp => loadComponent(comp.url, comp.id)));
    
    // Disparar evento personalizado cuando todos los componentes estén cargados
    document.dispatchEvent(new CustomEvent('componentsLoaded'));
    console.log('Todos los componentes han sido cargados');
  } catch (error) {
    console.error('Error al cargar componentes:', error);
  }
};

// Cargar todos los componentes
loadAllComponents();

