# Mi Pasión - Aplicación Web de Autos 🚗

## Descripción y Temática

### El Hobbie Elegido: Automóviles
La pasión por los automóviles es un hobby que une a millones de personas alrededor del mundo. Desde coleccionistas de autos clásicos hasta entusiastas de la velocidad y la tecnología automotriz, esta aplicación web sirve como punto de encuentro para compartir y explorar el fascinante mundo de los vehículos.

### Propósito de la Aplicación
**Mi Pasión** es una Single Page Application (SPA) que permite a los entusiastas de los automóviles:
- **Explorar** un catálogo de vehículos con información detallada
- **Agregar** sus propios autos favoritos a la colección
- **Gestionar** un inventario personal de vehículos
- **Consultar** información real sobre fabricantes de vehículos a través de APIs oficiales
- **Interactuar** con una interfaz moderna, segura y totalmente responsive

La aplicación resuelve el problema de tener un lugar centralizado donde los aficionados pueden catalogar y compartir información sobre automóviles de manera fácil y visual.

## 🚀 Enlace al Despliegue

**Aplicación en Vivo:** [Mi_pasion_web en GitHub Pages](https://gonzalocasta.github.io/Mi_pasion_web/)

> La aplicación está desplegada y lista para usar. Visita el enlace para explorar todas sus funcionalidades.

## 🛠️ Tecnologías Utilizadas

### Frontend (SPA)
- **HTML5 Semántico**: Estructura clara y accesible con elementos semánticos (`<nav>`, `<main>`, `<footer>`)
- **CSS3**: Diseño moderno con:
  - Gradientes y animaciones
  - Flexbox y CSS Grid para layouts responsive
  - Media queries para adaptabilidad móvil
  - Transiciones suaves y efectos hover
- **JavaScript Vanilla (ES6+)**: Sin frameworks adicionales
  - Arrow functions
  - Async/await para manejo de APIs
  - Template literals
  - Promises
  - Destructuring
  - Módulos y funciones puras

### APIs Integradas

#### 1. API Externa: NHTSA Vehicle API
- **Nombre**: National Highway Traffic Safety Administration Vehicle API
- **URL**: `https://vpic.nhtsa.dot.gov/api/`
- **Autenticación**: No requiere API key (servicio público)
- **Propósito**: Obtener datos reales de fabricantes de vehículos
- **Endpoints utilizados**:
  - `GET /vehicles/GetAllManufacturers?format=json` - Lista de todos los fabricantes de vehículos
  - `GET /vehicles/DecodeVin/{vin}?format=json` - Decodificación de VIN (número de identificación del vehículo)

**¿Por qué esta API?**
La NHTSA API es perfecta para esta aplicación porque:
- Es una fuente oficial y confiable del gobierno de EE.UU.
- No requiere registro ni claves API
- Proporciona datos completos sobre fabricantes automotrices
- Es gratuita y sin límites de uso razonables
- Perfecto para enriquecer la experiencia del usuario con datos reales

#### 2. API Propia (Mock/Backend)
- **Tecnología**: json-server
- **Puerto**: 3001
- **Base de datos**: `db.json`
- **Endpoints**:
  - `GET /cars` - Obtener todos los autos
  - `POST /cars` - Agregar un nuevo auto
  - `PUT /cars/:id` - Actualizar un auto
  - `DELETE /cars/:id` - Eliminar un auto

## 🔒 Seguridad Implementada

### 1. Prevención de Cross-Site Scripting (XSS)

La aplicación implementa múltiples capas de protección contra XSS:

#### a) Sanitización de Entrada
```javascript
function sanitizeHTML(str) {
    const temp = document.createElement('div');
    temp.textContent = str;  // textContent previene ejecución de HTML
    return temp.innerHTML;
}
```

#### b) Sanitización de Atributos
```javascript
function sanitizeAttribute(str) {
    return str.replace(/[<>"'&]/g, function(match) {
        const escape = {
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;',
            '&': '&amp;'
        };
        return escape[match];
    });
}
```

#### c) Uso Seguro en Renderizado
- Todo contenido generado por usuarios se sanitiza antes de mostrarse
- Se usa `textContent` en lugar de `innerHTML` donde sea posible
- Los atributos HTML son escapados correctamente

### 2. Validación de Entrada Robusta

#### Validación del Lado del Cliente
La aplicación valida todos los campos del formulario:

**Marca (Make)**:
- Mínimo 2 caracteres, máximo 50
- Solo letras, espacios y guiones
- Patrón regex: `/^[a-zA-Z\s\-]+$/`

**Modelo**:
- Obligatorio, máximo 50 caracteres
- No puede estar vacío

**Año**:
- Debe ser un número entre 1900 y el año siguiente al actual
- Validación con `parseInt()` y rangos

**Precio**:
- Número positivo
- Máximo $10,000,000
- Validación con `parseFloat()`

**Descripción**:
- Opcional
- Máximo 500 caracteres

#### Validación en Tiempo Real
```javascript
// Validación al perder el foco en cada campo
input.addEventListener('blur', () => {
    validateFieldOnBlur(input);
});
```

#### Retroalimentación Visual
- Mensajes de error específicos por campo
- Bordes rojos en campos inválidos
- Lista de errores al intentar enviar formulario inválido

### 3. Prevención de Inyección de Código

- Uso de `novalidate` en formularios para control completo de validación
- Prevención de caracteres peligrosos en atributos HTML
- Escape de comillas y caracteres especiales

## ⚡ Optimizaciones de Rendimiento

### 1. Optimización de Carga Inicial

#### Preconnect a APIs Externas
```html
<link rel="preconnect" href="https://vpic.nhtsa.dot.gov">
```
Establece conexiones tempranas con la API externa, reduciendo latencia en las primeras solicitudes.

#### Carga Paralela de Datos
```javascript
await Promise.all([
    fetchCars(),
    fetchManufacturers()
]);
```
Las peticiones a diferentes APIs se realizan en paralelo, reduciendo el tiempo de carga total.

### 2. Lazy Loading

#### Preparado para Imágenes Lazy Load
```css
img[loading="lazy"] {
    opacity: 0;
    transition: opacity 0.3s ease-in;
}

img[loading="lazy"].loaded {
    opacity: 1;
}
```

Cuando se agreguen imágenes de autos, se cargaran solo cuando entren en el viewport:
```html
<img src="car.jpg" loading="lazy" alt="Descripción">
```

### 3. Caché de API

#### Caché de Fabricantes
```javascript
if (state.manufacturers.length > 0) {
    return state.manufacturers; // Usar caché
}
```
Los fabricantes se cargan una sola vez y se almacenan en memoria, evitando peticiones repetidas.

### 4. Minificación (Producción)

Para producción, el código debe minificarse:

**CSS**:
```bash
npx cssnano styles.css styles.min.css
```

**JavaScript**:
```bash
npx terser script.js -o script.min.js -c -m
```

Luego actualizar referencias en `index.html`:
```html
<link rel="stylesheet" href="styles.min.css">
<script src="script.min.js"></script>
```

### 5. Optimización de Imágenes

**Recomendaciones para imágenes de autos**:
- Usar formato **WebP** para imágenes modernas (hasta 30% más pequeñas que JPEG)
- Comprimir con herramientas como:
  - [Squoosh](https://squoosh.app/)
  - `imagemagick`: `convert car.jpg -quality 85 car.webp`
- Implementar responsive images con `<picture>`:

```html
<picture>
  <source srcset="car.webp" type="image/webp">
  <source srcset="car.jpg" type="image/jpeg">
  <img src="car.jpg" alt="Auto" loading="lazy">
</picture>
```

### 6. Reducción de Motion (Accesibilidad)
```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
```
Respeta las preferencias del sistema para usuarios con sensibilidad al movimiento.

## 📦 Instalación y Ejecución Local

### Requisitos Previos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Node.js y npm (solo para backend opcional)

### Opción 1: Ejecución Simple (Solo Frontend)

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/gonzalocasta/Mi_pasion_web.git
   cd Mi_pasion_web
   ```

2. **Abrir en navegador**:
   - Simplemente abre `index.html` en tu navegador
   - O usa un servidor HTTP local:
   
   **Con Python**:
   ```bash
   python3 -m http.server 8000
   # Visita: http://localhost:8000
   ```
   
   **Con Node.js**:
   ```bash
   npx http-server -p 8000
   # Visita: http://localhost:8000
   ```
   
   **Con PHP**:
   ```bash
   php -S localhost:8000
   # Visita: http://localhost:8000
   ```

3. **¡Listo!** La aplicación funcionará con datos mock y la API externa de NHTSA.

### Opción 2: Con Backend Completo (json-server)

Para tener persistencia de datos real:

1. **Instalar dependencias**:
   ```bash
   cd car-react-jsonserver-vercel
   npm install
   ```

2. **Iniciar el servidor mock**:
   ```bash
   npm run json-server
   ```
   El servidor estará disponible en `http://localhost:3001`

3. **En otra terminal, abrir la aplicación**:
   ```bash
   # Volver al directorio raíz
   cd ..
   # Iniciar servidor HTTP
   python3 -m http.server 8000
   ```

4. **Visitar**: `http://localhost:8000`

La aplicación ahora guardará los datos de forma persistente en `car-react-jsonserver-vercel/db.json`.

## 📱 Características de la Aplicación

### Página de Inicio (`#home`)
- ✅ Catálogo visual de autos en formato de tarjetas
- ✅ Diseño responsive con CSS Grid
- ✅ Información detallada: marca, modelo, año, precio, descripción
- ✅ Animaciones suaves al hacer hover

### Panel de Administración (`#admin`)
- ✅ Formulario para agregar nuevos autos
- ✅ **Selector de fabricantes** con datos reales de API externa
- ✅ Validación completa del formulario
- ✅ Edición de autos existentes
- ✅ Eliminación con confirmación
- ✅ Mensajes de éxito/error
- ✅ Protección contra XSS

### Navegación SPA
- ✅ Enrutamiento basado en hash (`#home`, `#admin`)
- ✅ Sin recargas de página
- ✅ Indicadores visuales de página activa
- ✅ Navegación con historial del navegador

## 🎨 Diseño Responsive

La aplicación se adapta perfectamente a diferentes tamaños de pantalla:

- **Desktop** (>768px): Layout de 2 columnas en admin, grid de múltiples columnas
- **Tablet** (≤768px): Grid de 1 columna, formularios apilados
- **Mobile** (<480px): Optimizado para touch, botones grandes

```css
@media (max-width: 768px) {
    .admin-container {
        grid-template-columns: 1fr;
    }
    .car-grid {
        grid-template-columns: 1fr;
    }
}
```

## 📁 Estructura del Proyecto

```
Mi_pasion_web/
├── index.html              # Página principal (HTML5 semántico)
├── styles.css              # Estilos (CSS3 moderno, responsive)
├── script.js               # Lógica de aplicación (JavaScript ES6+)
├── README.md               # Este archivo - Documentación completa
├── README_SPA.md           # Documentación técnica adicional
└── car-react-jsonserver-vercel/  # Versión React + Backend (opcional)
    ├── db.json             # Base de datos mock
    ├── json-server/        # Configuración del servidor
    ├── src/                # Código fuente React
    └── package.json        # Dependencias
```

## 🧪 Testing Manual

Para verificar que todo funciona correctamente:

### 1. Verificar Seguridad (XSS)
1. Ir a `#admin`
2. Intentar agregar un auto con: `<script>alert('XSS')</script>` en la descripción
3. Verificar que se muestra como texto, no ejecuta código

### 2. Verificar Validación
1. Intentar enviar formulario vacío → Debe mostrar errores
2. Poner un año inválido (ej: 3000) → Debe rechazarse
3. Poner precio negativo → Debe rechazarse

### 3. Verificar API Externa
1. Abrir consola del navegador
2. Ver que se carga la lista de fabricantes
3. Verificar selector desplegable con marcas reales

### 4. Verificar Responsive
1. Abrir DevTools (F12)
2. Activar vista móvil
3. Verificar que todo se adapta correctamente

## 🚀 Despliegue en Producción

### GitHub Pages (Recomendado para este proyecto)

1. **Subir código a GitHub** (ya hecho)

2. **Habilitar GitHub Pages**:
   - Ve a Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / root
   - Save

3. **La aplicación estará disponible en**:
   ```
   https://gonzalocasta.github.io/Mi_pasion_web/
   ```

### Alternativas de Despliegue

#### Vercel
```bash
npm install -g vercel
vercel --prod
```

#### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

## 📊 Cumplimiento de Requisitos

### ✅ Tecnologías Base
- [x] SPA con JavaScript Vanilla (ES6+)
- [x] HTML5 semántico (`<nav>`, `<main>`, `<footer>`)
- [x] CSS moderno y responsive
- [x] Interactividad con JavaScript

### ✅ APIs
- [x] API Externa: NHTSA Vehicle API (fabricantes)
- [x] API Propia: json-server (CRUD de autos)
- [x] Formulario para publicar contenido

### ✅ Seguridad
- [x] Prevención de XSS con sanitización
- [x] Validación robusta de formularios
- [x] Validación de tipos de datos

### ✅ Rendimiento
- [x] Preconnect a API externa
- [x] Carga paralela de datos
- [x] Caché de peticiones API
- [x] Lazy loading preparado
- [x] Instrucciones de minificación
- [x] Optimización de imágenes (WebP)

### ✅ Entregables
- [x] Código en repositorio Git público
- [x] Commits descriptivos
- [x] Aplicación desplegada
- [x] README.md completo con todas las secciones

## 👤 Autor

**Gonzalo Casta**
- GitHub: [@gonzalocasta](https://github.com/gonzalocasta)

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

## 🔗 Enlaces Importantes

- **Repositorio**: https://github.com/gonzalocasta/Mi_pasion_web
- **Aplicación en Vivo**: https://gonzalocasta.github.io/Mi_pasion_web/
- **NHTSA API Docs**: https://vpic.nhtsa.dot.gov/api/

---

## 📚 Documentación Adicional

### Decisiones de Diseño

**¿Por qué Vanilla JavaScript y no un framework?**
- Demostración de conocimientos fundamentales
- Menor tamaño de bundle (más rápido)
- Sin dependencias externas
- Control total sobre el código

**¿Por qué la temática de autos?**
Los automóviles son una pasión universal que combina:
- Tecnología y ingeniería
- Diseño y estética
- Historia y cultura
- Comunidad de entusiastas

Perfecto para una aplicación web que debe ser útil y atractiva.

### Próximas Mejoras

- [ ] Añadir imágenes reales de autos
- [ ] Implementar búsqueda y filtros
- [ ] Agregar comparador de autos
- [ ] Sistema de favoritos con localStorage
- [ ] Modo oscuro
- [ ] PWA (Progressive Web App)

---

**¡Gracias por visitar Mi Pasión!** 🚗💨