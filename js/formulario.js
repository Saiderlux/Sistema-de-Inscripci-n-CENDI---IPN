/**
 * Sistema de Inscripción CENDI - IPN
 * Equipo 4 - Tecnologías para la Web
 * Lógica del formulario de inscripción
 */
/*funciones para agregar otro en caso de no ser alcaldía*/ 
function mostrarOtro() {
    const select = document.getElementById("GRUPO");
    const otro = document.getElementById("otro-container");

    if (select.value === "otro") {
        otro.style.display = "block";
    } else {
        otro.style.display = "none";
    }
}

// TODO: Implementar lógica del formulario

/**
 * Maneja el envío del formulario de inscripción
 * @param {Event} event - Evento del formulario
 */
function manejarEnvioFormulario(event) {
    event.preventDefault();
    
    // TODO: Validar todos los campos
    // TODO: Mostrar resumen de datos ingresados
    // TODO: Ejemplo del formato de salida:
    /*
    Hola "el nombre del o de la trabajadora", verifica que los datos que ingresaste sean correctos:
    
    Nombre: Patricia
    Primer apellido: Escamilla
    Segundo apellido: Miranda
    CURP: AEIO123456AEIOUAA2
    Género: Mujer
    ...
    (Considerar toda la información solicitada al usuario)
    */
}

/**
 * Limpia todos los campos del formulario
 */
function limpiarFormulario() {
    // TODO: Implementar limpieza de campos
    document.getElementById('formInscripcion').reset();
}

/**
 * Muestra el resumen de datos ingresados
 * @param {Object} datos - Datos del formulario
 */
function mostrarResumen(datos) {
    // TODO: Implementar visualización del resumen
    console.log('Resumen de datos:', datos);
}

// TODO: Agregar event listeners cuando el DOM esté listo
