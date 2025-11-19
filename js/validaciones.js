/**
 * Sistema de Inscripción CENDI - IPN
 * Equipo 4 - Tecnologías para la Web
 * Archivo de validaciones con expresiones regulares
 */

// ========== EXPRESIONES REGULARES ==========

/**
 * Validación de nombres: solo letras y espacios
 */
const regexNombre = /^[a-záéíóúñA-ZÁÉÍÓÚÑ\s]+$/;

/**
 * Validación de teléfono: solo dígitos, máximo 10 caracteres
 */
const regexTelefono = /^\d{10}$/;

/**
 * Validación de CURP: 18 caracteres
 * - 4 primeras letras
 * - 6 siguientes números
 * - 6 siguientes letras
 * - 2 últimos alfanuméricos
 */
const regexCURP = /^[A-Z]{4}\d{6}[A-Z]{6}[A-Z0-9]{2}$/;

/**
 * Validación de correo electrónico institucional del IPN
 * Debe terminar en @ipn.mx
 */
const regexCorreoInstitucional = /^[a-zA-Z0-9._-]+@ipn\.mx$/;

/**
 * Validación de correo electrónico general
 */
const regexCorreoGeneral = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

/**
 * Validación de contraseña:
 * - Mínimo 6 caracteres
 * - Al menos una mayúscula
 * - Al menos un dígito
 * - Al menos un carácter especial
 */
const regexPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

/**
 * Validación de código postal: 5 dígitos
 */
const regexCodigoPostal = /^\d{5}$/;

// ========== FUNCIONES DE VALIDACIÓN ==========

/**
 * Valida un campo de nombre
 * @param {string} valor - Valor a validar
 * @returns {boolean} - True si es válido
 */
function validarNombre(valor) {
    // TODO: Implementar validación completa
    return regexNombre.test(valor);
}

/**
 * Valida un teléfono
 * @param {string} valor - Valor a validar
 * @returns {boolean} - True si es válido
 */
function validarTelefono(valor) {
    // TODO: Implementar validación completa
    return regexTelefono.test(valor);
}

/**
 * Valida un CURP
 * @param {string} valor - Valor a validar
 * @returns {boolean} - True si es válido
 */
function validarCURP(valor) {
    // TODO: Implementar validación completa
    return regexCURP.test(valor.toUpperCase());
}

/**
 * Valida correo institucional
 * @param {string} valor - Valor a validar
 * @returns {boolean} - True si es válido
 */
function validarCorreoInstitucional(valor) {
    // TODO: Implementar validación completa
    return regexCorreoInstitucional.test(valor);
}

/**
 * Valida contraseña
 * @param {string} valor - Valor a validar
 * @returns {boolean} - True si es válido
 */
function validarPassword(valor) {
    // TODO: Implementar validación completa
    return regexPassword.test(valor);
}

// TODO: Agregar más funciones de validación según sea necesario
