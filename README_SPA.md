# Mi Pasión - Aplicación SPA de Autos

Aplicación web de una sola página (SPA) para gestionar un catálogo de autos, construida con **HTML, CSS y JavaScript vanilla puro**.

## 🚀 Inicio Rápido

### Opción 1: Abrir directamente
Simplemente abre el archivo `index.html` en tu navegador favorito.

### Opción 2: Servidor HTTP local
```bash
# Usando Python
python3 -m http.server 8000

# O usando Node.js
npx http-server -p 8000

# Luego visita: http://localhost:8000/index.html
```

## 📁 Estructura de Archivos

```
Mi_pasion_web/
├── index.html       # Página principal HTML
├── styles.css       # Estilos CSS
└── script.js        # Lógica JavaScript
```

## ✨ Características

### Página de Inicio (Home)
- Catálogo completo de autos
- Vista en tarjetas con información detallada
- Diseño responsive

### Panel de Administración
- Agregar nuevos autos
- Editar autos existentes
- Eliminar autos del catálogo
- Validación de formularios

## 🎨 Tecnologías

- **HTML5** - Estructura semántica
- **CSS3** - Diseño moderno con gradientes y animaciones
- **JavaScript Vanilla** - Sin frameworks ni librerías
- **Hash-based Routing** - Navegación SPA sin recargas

## 🔧 Configuración (Opcional)

### Usar con json-server

Para persistencia de datos real, puedes usar json-server:

1. Instala json-server:
   ```bash
   npm install -g json-server
   ```

2. Inicia el servidor (en el directorio car-react-jsonserver-vercel/):
   ```bash
   json-server --watch db.json --port 3001
   ```

3. La aplicación se conectará automáticamente al servidor

### Configurar URL de API

Edita `script.js` línea 51 para cambiar la URL del API:
```javascript
const API_URL = 'https://tu-api.com/cars';
```

## 📱 Navegación

- **#home** - Página de inicio con catálogo
- **#admin** - Panel de administración

## 🛠️ Desarrollo

No requiere proceso de build ni dependencias. Simplemente edita los archivos y recarga el navegador.

## 📄 Licencia

Este proyecto es de código abierto.

## 👤 Autor

Gonzalo Casta
