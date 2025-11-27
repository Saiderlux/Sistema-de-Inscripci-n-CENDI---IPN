# 🎓 Sistema de Inscripción CENDI - IPN

[![Estado del Proyecto](https://img.shields.io/badge/Estado-En%20Desarrollo-yellow)](https://github.com/tu-usuario/cendi-ipn)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.2-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Licencia](https://img.shields.io/badge/Licencia-MIT-green.svg)](LICENSE)

## 📋 Descripción del Proyecto

Sistema web desarrollado para permitir a las y los **trabajadores del Instituto Politécnico Nacional** llevar a cabo la **inscripción de sus hijos** en los **Centros de Desarrollo Infantil (CENDI)** del IPN.

El sistema gestiona el proceso completo de inscripción mediante un formulario estructurado que captura tanto los datos del menor como los del trabajador solicitante, facilitando la administración de la COCENDI (Coordinación de Centros de Desarrollo Infantil).

### 🎯 Objetivo

Desarrollar una plataforma web responsive que permita:
- Inscripción de niños y niñas en los CENDI del IPN
- Gestión de datos de trabajadores y sus hijos
- Validación exhaustiva de información mediante expresiones regulares
- Visualización de noticias relevantes sobre los servicios de COCENDI
- Sistema de autenticación para trabajadores y administradores

### 👥 Equipo de Desarrollo

Este proyecto está siendo desarrollado por **4 integrantes** del **Equipo 4** como parte de la materia de Tecnologías para el Desarrollo de Aplicaciones Web.

**Integrantes:**
- Integrante 1 - [REGINA] - [Responsabilidad]
- Integrante 2 - [PAOLA] - [Responsabilidad]
- Integrante 3 - [VICTOR] - [Responsabilidad]
- Integrante 4 - [SAID] - [Responsabilidad]

## 🚀 Tecnologías Utilizadas

- **Frontend:**
  - HTML5 (estructura semántica)
  - CSS3 (estilos personalizados)
  - JavaScript (ES6+ con expresiones regulares para validación)
  - Bootstrap 5.3.2 (diseño responsive)
  - Bootstrap Icons

- **Control de Versiones:**
  - Git
  - GitHub


```
Proyecto_WEB/
│
├── index.html                # Index en la raíz y los demás HTML en la misma carpeta raíz
├── inicio.html               # ¿que son los cendi? *poner un video de la pag oficial, link a las redes oficiales
├── inscripción.html          # formulario
├── acceso.html               # respectivo form (instrucciones pág 2 segunda palomita)
├── administración.html       # respectivo form (instrucciones pág 2 segunda palomita)
│
├── css/
│   └── styles.css            # Estilos globales y personalizados poner siempre colores de bg y de letra con variables de css
│
├── js/
│   ├── script.js             # Comportamiento general de la página
│   ├── validaciones.js       # Validaciones con Exp.Reg. para formularios
│   └── formulario.js         # Lógica específica del formulario de inscripción
│
├── assets/
│   ├── images/
│   │   ├── logo-ipn.png         # Logo oficial del IPN
│   │   ├── logo-cocendi.png     # Logo institucional COCENDI
│   │   ├── logo-equipo.png      # Logo o ícono del equipo
│   │   └── slider/              # Imágenes del carrusel/slider
│   │
│   └── favicon.ico           # Ícono (favicon) del sitio
│
├── README.md                 # Documentación del proyecto
└── .gitignore                # Archivos ignorados por Git

```

## 📝 Funcionalidades Principales

### 🏠 Página de Inicio
- Slider con mínimo 3 noticias relevantes de COCENDI
- Menú de navegación: **Inicio** | **Inscripción** | **Acceso** | **Admin**
- Logos institucionales (IPN y COCENDI)
- Logo del equipo como favicon

### 📋 Formulario de Inscripción (2 Secciones)

#### **Sección 1: Datos de la niña o del niño**
- Primer apellido, segundo apellido, nombre(s)
- Lugar de nacimiento, fecha de nacimiento
- CURP (validación: 18 caracteres - 4 letras, 6 números, 6 letras, 2 alfanuméricos)
- Grupo sanguíneo y Rh
- Domicilio completo (calle, número, colonia)
- Alcaldía o municipio (16 alcaldías de CDMX + opción "Otro" para municipios)
- Entidad federativa (32 estados de México)
- Código postal
- Teléfono (validación: solo dígitos, máximo 10)
- Grupo (lista desplegable):
  - Lactantes I-II (0-12 meses)
  - Maternal I (1 año 1 día – 2 años)
  - Maternal II (2 años 1 día – 3 años)
  - Preescolar I (3 años 1 día – 4 años)
  - Preescolar II (4 años 1 día – 5 años)
  - Preescolar III (5 años 1 día – 6 años)
- CENDI (selección entre los 5 centros disponibles)

#### **Sección 2: Datos del trabajador o trabajadora**
- Primer apellido, segundo apellido, nombre(s)
- Lugar de nacimiento, fecha de nacimiento
- CURP (validación completa)
- Correo electrónico institucional (validación de dominio IPN)
- Correo electrónico personal
- Estado civil (casado, soltero, unión libre)
- Ocupación (docente, PAAE)
- Número de empleado
- Escolaridad
- Adscripción
- Horario de trabajo

#### **Validaciones con Expresiones Regulares**
- ✅ **Teléfono**: Solo dígitos, máximo 10 caracteres
- ✅ **Nombre**: Solo letras y espacios
- ✅ **CURP**: 18 caracteres (4 letras + 6 números + 6 letras + 2 alfanuméricos)
- ✅ **Correo institucional**: Validar dominio @ipn.mx
- ✅ **Contraseña**: Mínimo 6 caracteres, una mayúscula, un dígito, un carácter especial
- ✅ **Todos los campos son obligatorios**

#### **Botones del Formulario**
- **Registrar**: Muestra resumen de datos ingresados para verificación
- **Limpiar**: Limpia todos los campos del formulario

### 🔐 Secciones de Autenticación
- **Acceso**: Formulario de inicio de sesión para trabajadores
- **Admin**: Formulario de inicio de sesión para administradores
- Validación de campos obligatorios
- Validación de contraseña con requisitos de seguridad

## 🛠️ Instalación y Configuración

### Prerrequisitos

- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Git instalado en tu sistema
- Editor de código (VS Code recomendado)

### Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/cendi-ipn.git
cd Proyecto_WEB
```

### Ejecutar el Proyecto

1. Abre el archivo `index.html` en tu navegador web
2. O utiliza un servidor local como Live Server en VS Code

## 🤝 Guía de Colaboración con Git y GitHub

### Flujo de Trabajo Recomendado

1. **Crear una rama para cada funcionalidad:**
   ```bash
   git checkout -b feature/nombre-funcionalidad
   ```

2. **Realizar cambios y commits:**
   ```bash
   git add .
   git commit -m "Descripción clara del cambio"
   ```

3. **Subir cambios al repositorio remoto:**
   ```bash
   git push origin feature/nombre-funcionalidad
   ```

4. **Crear un Pull Request en GitHub** para revisión del equipo

5. **Después de la aprobación**, fusionar con la rama principal

### Convenciones de Commits

Usar mensajes descriptivos siguiendo este formato:
```
tipo: descripción breve

Tipos comunes:
- feat: Nueva funcionalidad
- fix: Corrección de errores
- style: Cambios de estilo/formato
- docs: Actualización de documentación
- refactor: Refactorización de código
```

**Ejemplos:**
```bash
git commit -m "feat: Agregar sección de datos del niño en formulario de inscripción"
git commit -m "fix: Corregir validación de CURP con expresión regular"
git commit -m "docs: Actualizar README con estructura del proyecto"
git commit -m "style: Ajustar diseño responsive del slider de noticias"
```

### Ramas Principales

- `main`: Rama principal con código estable
- `develop`: Rama de desarrollo activo
- `feature/*`: Ramas para nuevas funcionalidades
- `hotfix/*`: Ramas para correcciones urgentes

### Antes de Hacer Push

1. Asegúrate de que tu código funcione correctamente
2. Actualiza tu rama con los últimos cambios:
   ```bash
   git pull origin main
   ```
3. Resuelve cualquier conflicto que pueda surgir

## 📋 Lista de Tareas por Fase

### Fase 1: Estructura Base ✅
- [x] Configurar estructura de carpetas del proyecto
- [x] Crear archivos HTML, CSS y JS iniciales
- [x] Configurar Bootstrap 5.3.2
- [x] Configurar repositorio Git
- [ ] Agregar logos institucionales (IPN, COCENDI, Equipo)

### Fase 2: Página Principal (index.html)
- [ ] Implementar navbar con menú: Inicio, Inscripción, Acceso, Admin
- [ ] Crear slider con mínimo 3 noticias de COCENDI
- [ ] Agregar footer con información institucional
- [ ] Asegurar diseño responsive

### Fase 3: Formulario de Inscripción (inscripcion.html)
- [ ] Diseñar estructura de 2 secciones del formulario
- [ ] Implementar todos los campos de "Datos del niño/a"
- [ ] Implementar todos los campos de "Datos del trabajador/a"
- [ ] Crear listas desplegables (grupos, CENDI, estados, alcaldías)
- [ ] Implementar botones Registrar y Limpiar

### Fase 4: Validaciones con JavaScript
- [ ] Crear archivo validaciones.js con todas las expresiones regulares
- [ ] Validar campos de texto (solo letras)
- [ ] Validar teléfono (solo dígitos, máximo 10)
- [ ] Validar CURP (18 caracteres según formato específico)
- [ ] Validar correo institucional (@ipn.mx)
- [ ] Validar contraseña (6 caracteres mínimo, mayúscula, dígito, especial)
- [ ] Implementar validación de campos obligatorios
- [ ] Crear función para mostrar resumen de datos al registrar

### Fase 5: Páginas de Autenticación
- [ ] Crear página acceso.html (login trabajadores)
- [ ] Crear página admin.html (login administradores)
- [ ] Implementar validaciones de inicio de sesión
- [ ] Asegurar diseño homogéneo entre todas las páginas

### Fase 6: Estilos y Diseño
- [ ] Diseñar paleta de colores institucional
- [ ] Crear estilos personalizados para formularios
- [ ] Asegurar consistencia visual en todas las páginas
- [ ] Optimizar responsive para móviles y tablets
- [ ] Agregar animaciones y transiciones sutiles

### Fase 7: Testing y Optimización
- [ ] Probar formulario con datos reales
- [ ] Validar funcionamiento en diferentes navegadores
- [ ] Verificar responsive en múltiples dispositivos
- [ ] Optimizar rendimiento y tiempos de carga
- [ ] Corregir bugs encontrados

### Fase 8: Documentación Final
- [ ] Completar README con instrucciones finales
- [ ] Documentar código JavaScript
- [ ] Crear manual de usuario (si es requerido)
- [ ] Preparar presentación del proyecto

## 📊 Estado del Proyecto

**Avance General:** 10%
- ✅ Configuración inicial completada
- 🚧 Estructura base en desarrollo
- ⏳ Implementación de funcionalidades principales pendiente

## 📚 Recursos Útiles

- [Bootstrap 5.3 Documentation](https://getbootstrap.com/docs/5.3/)
- [Expresiones Regulares en JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions)
- [Validación de Formularios HTML5](https://developer.mozilla.org/es/docs/Learn/Forms/Form_validation)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [CURP - Formato oficial](https://www.gob.mx/curp/)

## 📄 Licencia

Este proyecto es parte de un trabajo académico para la materia de **Tecnologías para el Desarrollo de Aplicaciones Web** en ESCOM-IPN.

---

**Instituto Politécnico Nacional - ESCOM**  
Tecnologías para el Desarrollo de Aplicaciones Web | Equipo 4 | 2025
