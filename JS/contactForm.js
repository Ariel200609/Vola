document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("contact-form");
  const personasInput = document.getElementById("personas");
  const edadesContainer = document.createElement("div");
  edadesContainer.id = "edades-container";
  personasInput.insertAdjacentElement("afterend", edadesContainer);

  if (!formulario || !personasInput || !edadesContainer) {
    console.error("Faltan elementos necesarios en el DOM");
    return;
  }

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
});

