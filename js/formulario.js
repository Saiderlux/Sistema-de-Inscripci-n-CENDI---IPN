/**
 * Sistema de Inscripción CENDI - IPN
 * Equipo 4 - Tecnologías para la Web
 * Lógica del formulario de inscripción
 */

// ========== VARIABLES GLOBALES ==========
let formulario;
let camposValidados = new Map();

// ========== FUNCIONES DE UTILIDAD ==========

/**
 * Función para mostrar campo "Otro" en caso de no ser alcaldía de CDMX
 */ 
function mostrarOtro() {
    const select = document.getElementById("GRUPO");
    const otro = document.getElementById("otro-container");

    if (select && otro) {
        if (select.value === "otro") {
            otro.style.display = "block";
        } else {
            otro.style.display = "none";
        }
    }
}

/**
 * Calcula la edad a partir de una fecha de nacimiento
 * @param {string} fechaNacimiento - Fecha en formato YYYY-MM-DD
 * @returns {number} - Edad en años
 */
function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    return edad;
}

/**
 * Determina el género a partir del CURP
 * @param {string} curp - CURP de 18 caracteres
 * @returns {string} - "Hombre" o "Mujer"
 */
function obtenerGeneroDelCURP(curp) {
    if (curp.length >= 11) {
        return curp.charAt(10).toUpperCase() === 'H' ? 'Hombre' : 'Mujer';
    }
    return 'No especificado';
}

// ========== VALIDACIÓN EN TIEMPO REAL ==========

/**
 * Configura la validación en tiempo real para un campo
 * @param {string} idCampo - ID del campo
 * @param {Function} funcionValidacion - Función de validación a aplicar
 */
function configurarValidacionTiempoReal(idCampo, funcionValidacion) {
    const campo = document.getElementById(idCampo);
    if (!campo) return;

    campo.addEventListener('blur', function() {
        const resultado = funcionValidacion(this.value);
        if (resultado.valido) {
            mostrarValido(this);
            camposValidados.set(idCampo, true);
        } else {
            mostrarError(this, resultado.mensaje);
            camposValidados.set(idCampo, false);
        }
    });

    campo.addEventListener('input', function() {
        if (this.classList.contains('is-invalid') || this.classList.contains('is-valid')) {
            const resultado = funcionValidacion(this.value);
            if (resultado.valido) {
                mostrarValido(this);
                camposValidados.set(idCampo, true);
            } else {
                mostrarError(this, resultado.mensaje);
                camposValidados.set(idCampo, false);
            }
        }
    });
}

/**
 * Inicializa todas las validaciones en tiempo real
 */
function inicializarValidaciones() {
    // Datos del Niño/Niña
    configurarValidacionTiempoReal('APP', validarNombre);
    configurarValidacionTiempoReal('APM', validarNombre);
    configurarValidacionTiempoReal('NOMBRES', validarNombre);
    configurarValidacionTiempoReal('LUGARNINO', validarLugar);
    configurarValidacionTiempoReal('FECHANNINO', validarFechaNacimiento);
    configurarValidacionTiempoReal('CURPNINO', validarCURP);
    configurarValidacionTiempoReal('SANGRE', validarGrupoSanguineo);
    configurarValidacionTiempoReal('CONTACTONINO', validarTelefono);
    configurarValidacionTiempoReal('DOMICILIONINO', validarDomicilio);
    configurarValidacionTiempoReal('CPNINO', validarCodigoPostal);
    
    // Datos del Trabajador/a
    configurarValidacionTiempoReal('APPT', validarNombre);
    configurarValidacionTiempoReal('APMT', validarNombre);
    configurarValidacionTiempoReal('NOMBREST', validarNombre);
    configurarValidacionTiempoReal('trab_lugar_nacimiento', validarLugar);
    configurarValidacionTiempoReal('FECHAT', validarFechaNacimiento);
    configurarValidacionTiempoReal('CURPT', validarCURP);
    configurarValidacionTiempoReal('CIT', validarCorreoInstitucional);
    configurarValidacionTiempoReal('CPT', validarCorreoGeneral);
    configurarValidacionTiempoReal('NumE', validarNumeroEmpleado);
    configurarValidacionTiempoReal('ESCOLARIDAD', validarEscolaridad);
    configurarValidacionTiempoReal('ADSCRIPCION', validarLugar);
    configurarValidacionTiempoReal('HORARIO', validarHorario);
}

// ========== RECOPILACIÓN DE DATOS ==========

/**
 * Obtiene el valor seleccionado de un grupo de radio buttons
 * @param {string} name - Nombre del grupo
 * @returns {string} - Valor seleccionado
 */
function obtenerValorRadio(name) {
    const radios = document.getElementsByName(name);
    for (let radio of radios) {
        if (radio.checked) {
            return radio.value;
        }
    }
    return '';
}

/**
 * Obtiene el texto de la opción seleccionada en un select
 * @param {string} id - ID del select
 * @returns {string} - Texto de la opción seleccionada
 */
function obtenerTextoSelect(id) {
    const select = document.getElementById(id);
    if (select && select.selectedIndex >= 0) {
        return select.options[select.selectedIndex].text;
    }
    return '';
}

/**
 * Recopila todos los datos del formulario
 * @returns {Object} - Objeto con todos los datos del formulario
 */
function recopilarDatos() {
    const datos = {
        nino: {
            apellidoPaterno: document.getElementById('APP')?.value || '',
            apellidoMaterno: document.getElementById('APM')?.value || '',
            nombres: document.getElementById('NOMBRES')?.value || '',
            lugarNacimiento: document.getElementById('LUGARNINO')?.value || '',
            fechaNacimiento: document.getElementById('FECHANNINO')?.value || '',
            edad: document.getElementById('FECHANNINO')?.value ? calcularEdad(document.getElementById('FECHANNINO').value) : 0,
            curp: document.getElementById('CURPNINO')?.value.toUpperCase() || '',
            grupoSanguineo: document.getElementById('SANGRE')?.value.toUpperCase() || '',
            telefono: document.getElementById('CONTACTONINO')?.value || '',
            grupo: obtenerTextoSelect('GRUPO'),
            domicilio: document.getElementById('DOMICILIONINO')?.value || '',
            alcaldia: obtenerTextoSelect('GRUPO'),
            entidadFederativa: obtenerTextoSelect('enidad'),
            codigoPostal: document.getElementById('CPNINO')?.value || '',
            cendiAdscripcion: obtenerTextoSelect('CENDININO')
        },
        trabajador: {
            apellidoPaterno: document.getElementById('APPT')?.value || '',
            apellidoMaterno: document.getElementById('APMT')?.value || '',
            nombres: document.getElementById('NOMBREST')?.value || '',
            lugarNacimiento: document.getElementById('trab_lugar_nacimiento')?.value || '',
            fechaNacimiento: document.getElementById('FECHAT')?.value || '',
            edad: document.getElementById('FECHAT')?.value ? calcularEdad(document.getElementById('FECHAT').value) : 0,
            curp: document.getElementById('CURPT')?.value.toUpperCase() || '',
            genero: document.getElementById('CURPT')?.value ? obtenerGeneroDelCURP(document.getElementById('CURPT').value) : '',
            correoInstitucional: document.getElementById('CIT')?.value || '',
            correoPersonal: document.getElementById('CPT')?.value || '',
            ocupacion: obtenerTextoSelect('OCUPACION'),
            numeroEmpleado: document.getElementById('NumE')?.value || '',
            escolaridad: document.getElementById('ESCOLARIDAD')?.value || '',
            adscripcion: document.getElementById('ADSCRIPCION')?.value || '',
            horario: document.getElementById('HORARIO')?.value || '',
            estadoCivil: obtenerValorRadio('EC')
        }
    };

    return datos;
}

// ========== VALIDACIÓN COMPLETA DEL FORMULARIO ==========

/**
 * Valida todos los campos del formulario
 * @returns {boolean} - True si todos los campos son válidos
 */
function validarFormularioCompleto() {
    let esValido = true;
    const camposAValidar = [
        // Datos del Niño
        { id: 'APP', validador: validarNombre },
        { id: 'APM', validador: validarNombre },
        { id: 'NOMBRES', validador: validarNombre },
        { id: 'LUGARNINO', validador: validarLugar },
        { id: 'FECHANNINO', validador: validarFechaNacimiento },
        { id: 'CURPNINO', validador: validarCURP },
        { id: 'SANGRE', validador: validarGrupoSanguineo },
        { id: 'CONTACTONINO', validador: validarTelefono },
        { id: 'GRUPO', validador: validarSelect },
        { id: 'DOMICILIONINO', validador: validarDomicilio },
        { id: 'enidad', validador: validarSelect },
        { id: 'CPNINO', validador: validarCodigoPostal },
        { id: 'CENDININO', validador: validarSelect },
        
        // Datos del Trabajador
        { id: 'APPT', validador: validarNombre },
        { id: 'APMT', validador: validarNombre },
        { id: 'NOMBREST', validador: validarNombre },
        { id: 'trab_lugar_nacimiento', validador: validarLugar },
        { id: 'FECHAT', validador: validarFechaNacimiento },
        { id: 'CURPT', validador: validarCURP },
        { id: 'CIT', validador: validarCorreoInstitucional },
        { id: 'CPT', validador: validarCorreoGeneral },
        { id: 'OCUPACION', validador: validarSelect },
        { id: 'NumE', validador: validarNumeroEmpleado },
        { id: 'ESCOLARIDAD', validador: validarEscolaridad },
        { id: 'ADSCRIPCION', validador: validarLugar },
        { id: 'HORARIO', validador: validarHorario }
    ];

    // Validar todos los campos
    camposAValidar.forEach(campo => {
        const elemento = document.getElementById(campo.id);
        if (elemento) {
            const resultado = campo.validador(elemento.value);
            if (!resultado.valido) {
                mostrarError(elemento, resultado.mensaje);
                esValido = false;
            } else {
                mostrarValido(elemento);
            }
        }
    });

    // Validar estado civil (radio buttons)
    const resultadoEC = validarRadioGroup('EC');
    if (!resultadoEC.valido) {
        const radioContainer = document.querySelector('input[name="EC"]')?.parentElement?.parentElement;
        if (radioContainer) {
            // Crear o actualizar mensaje de error para radio buttons
            let errorMsg = radioContainer.querySelector('.text-danger');
            if (!errorMsg) {
                errorMsg = document.createElement('div');
                errorMsg.className = 'text-danger small mt-1';
                radioContainer.appendChild(errorMsg);
            }
            errorMsg.textContent = resultadoEC.mensaje;
        }
        esValido = false;
    }

    return esValido;
}

// ========== MANEJO DEL FORMULARIO ==========

/**
 * Maneja el envío del formulario de inscripción
 * @param {Event} event - Evento del formulario
 */
function manejarEnvioFormulario(event) {
    event.preventDefault();
    
    // Validar todos los campos
    const formularioValido = validarFormularioCompleto();
    
    if (!formularioValido) {
        // Mostrar mensaje de error general
        alert('Por favor, corrija los errores en el formulario antes de continuar.');
        
        // Hacer scroll al primer campo con error
        const primerError = document.querySelector('.is-invalid');
        if (primerError) {
            primerError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            primerError.focus();
        }
        return;
    }
    
    // Si es válido, recopilar datos y mostrar resumen
    const datos = recopilarDatos();
    mostrarResumen(datos);
}

/**
 * Limpia todos los campos del formulario
 */
function limpiarFormulario() {
    if (formulario) {
        formulario.reset();
        
        // Limpiar todas las validaciones visuales
        const campos = formulario.querySelectorAll('.form-control, .form-select');
        campos.forEach(campo => {
            limpiarValidacion(campo);
        });
        
        // Limpiar el mapa de validaciones
        camposValidados.clear();
        
        // Ocultar el campo "Otro" si estaba visible
        const otroContainer = document.getElementById('otro-container');
        if (otroContainer) {
            otroContainer.style.display = 'none';
        }
        
        // Limpiar mensajes de error de radio buttons
        const errorMessages = document.querySelectorAll('.text-danger.small');
        errorMessages.forEach(msg => msg.remove());
    }
}

/**
 * Muestra el resumen de datos ingresados
 * @param {Object} datos - Datos del formulario
 */
function mostrarResumen(datos) {
    const { nino, trabajador } = datos;
    
    // Construir mensaje de resumen
    let resumen = `Hola ${trabajador.nombres} ${trabajador.apellidoPaterno} ${trabajador.apellidoMaterno}, verifica que los datos que ingresaste sean correctos:\n\n`;
    
    resumen += '═══════════════════════════════════════\n';
    resumen += '📋 DATOS DEL TRABAJADOR/A\n';
    resumen += '═══════════════════════════════════════\n';
    resumen += `Nombre completo: ${trabajador.nombres} ${trabajador.apellidoPaterno} ${trabajador.apellidoMaterno}\n`;
    resumen += `CURP: ${trabajador.curp}\n`;
    resumen += `Género: ${trabajador.genero}\n`;
    resumen += `Fecha de nacimiento: ${trabajador.fechaNacimiento}\n`;
    resumen += `Edad: ${trabajador.edad} años\n`;
    resumen += `Lugar de nacimiento: ${trabajador.lugarNacimiento}\n`;
    resumen += `Correo institucional: ${trabajador.correoInstitucional}\n`;
    resumen += `Correo personal: ${trabajador.correoPersonal}\n`;
    resumen += `Ocupación: ${trabajador.ocupacion}\n`;
    resumen += `Número de empleado: ${trabajador.numeroEmpleado}\n`;
    resumen += `Escolaridad: ${trabajador.escolaridad}\n`;
    resumen += `Adscripción: ${trabajador.adscripcion}\n`;
    resumen += `Horario de trabajo: ${trabajador.horario}\n`;
    resumen += `Estado civil: ${trabajador.estadoCivil}\n\n`;
    
    resumen += '═══════════════════════════════════════\n';
    resumen += '👶 DATOS DEL NIÑO/NIÑA\n';
    resumen += '═══════════════════════════════════════\n';
    resumen += `Nombre completo: ${nino.nombres} ${nino.apellidoPaterno} ${nino.apellidoMaterno}\n`;
    resumen += `CURP: ${nino.curp}\n`;
    resumen += `Fecha de nacimiento: ${nino.fechaNacimiento}\n`;
    resumen += `Edad: ${nino.edad} años\n`;
    resumen += `Lugar de nacimiento: ${nino.lugarNacimiento}\n`;
    resumen += `Grupo sanguíneo: ${nino.grupoSanguineo}\n`;
    resumen += `Teléfono de contacto: ${nino.telefono}\n`;
    resumen += `Grupo: ${nino.grupo}\n`;
    resumen += `Domicilio: ${nino.domicilio}\n`;
    resumen += `Entidad federativa: ${nino.entidadFederativa}\n`;
    resumen += `Código postal: ${nino.codigoPostal}\n`;
    resumen += `CENDI de adscripción: ${nino.cendiAdscripcion}\n`;
    resumen += '═══════════════════════════════════════\n\n';
    
    resumen += '¿Los datos son correctos?\n';
    resumen += 'Si todo es correcto, presiona OK para continuar.\n';
    resumen += 'Si necesitas corregir algo, presiona Cancelar.';
    
    // Mostrar en consola para debugging
    console.log('Datos del formulario:', datos);
    
    // Mostrar resumen al usuario
    const confirmacion = confirm(resumen);
    
    if (confirmacion) {
        // Aquí se puede redirigir a página de confirmación o enviar datos
        alert('¡Inscripción registrada exitosamente!\n\nLos datos han sido guardados correctamente.');
        
        // Opcional: Redirigir a página de mensaje
        // window.location.href = 'mensaje.html';
        
        // O limpiar el formulario
        limpiarFormulario();
    }
}

// ========== INICIALIZACIÓN ==========

/**
 * Inicializa el formulario cuando el DOM está listo
 */
document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencia al formulario
    formulario = document.querySelector('form');
    
    if (formulario) {
        // Configurar validaciones en tiempo real
        inicializarValidaciones();
        
        // Agregar event listener para el envío del formulario
        formulario.addEventListener('submit', manejarEnvioFormulario);
        
        // Agregar event listener para el botón de limpiar
        const botonLimpiar = formulario.querySelector('button[type="reset"]');
        if (botonLimpiar) {
            botonLimpiar.addEventListener('click', function(e) {
                e.preventDefault();
                if (confirm('¿Está seguro de que desea limpiar todos los campos del formulario?')) {
                    limpiarFormulario();
                }
            });
        }
    }
    
    console.log('Sistema de Inscripción CENDI - Formulario inicializado');
});
