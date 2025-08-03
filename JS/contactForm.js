// Función para inicializar el formulario de contacto
const initContactForm = () => {
  const formulario = document.getElementById("contact-form");
  const personasInput = document.getElementById("personas");
  
  if (!formulario || !personasInput) {
    console.error("Faltan elementos necesarios en el DOM para el formulario de contacto");
    return;
  }

  const edadesContainer = document.createElement("div");
  edadesContainer.id = "edades-container";
  personasInput.insertAdjacentElement("afterend", edadesContainer);

  // Crear los inputs de edad cuando cambie el número de personas
  personasInput.addEventListener("input", () => {
    let cantidad = parseInt(personasInput.value);
    if (isNaN(cantidad)) return;

    // Limitar a 5 personas como máximo
    if (cantidad > 5) {
      cantidad = 5;
      personasInput.value = 5;
    }

    edadesContainer.innerHTML = ""; // Limpiar campos anteriores

    for (let i = 1; i <= cantidad; i++) {
      const label = document.createElement("label");
      label.textContent = `Edad de la persona ${i}: `;
      label.setAttribute("for", `edad_${i}`);

      const input = document.createElement("input");
      input.type = "number";
      input.id = `edad_${i}`;
      input.name = `edad_${i}`;
      input.min = "0";
      input.required = true;

      edadesContainer.appendChild(label);
      edadesContainer.appendChild(input);
      edadesContainer.appendChild(document.createElement("br"));
    }
  });

  // Evitar que el formulario se envíe
  formulario.addEventListener("submit", (e) => {
    e.preventDefault(); // Esto previene que se realice el envío al servidor

    // Limpiar el formulario después de enviar los datos
    personasInput.value = "";
    edadesContainer.innerHTML = "";

    // Mostrar un mensaje de éxito
    alert("Datos enviados exitosamente.");
  });
};

// Escuchar cuando los componentes estén cargados
document.addEventListener('componentsLoaded', initContactForm);

// También escuchar DOMContentLoaded como fallback
document.addEventListener('DOMContentLoaded', () => {
  // Esperar un poco más para asegurar que los componentes se carguen
  setTimeout(initContactForm, 100);
});

