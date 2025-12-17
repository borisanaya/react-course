# Proyecto React con Vite

Este es un proyecto React creado con Vite, una herramienta de desarrollo moderna que ofrece un inicio rápido y una experiencia de desarrollo optimizada.

## Cómo crear un proyecto React como este

Para crear un proyecto React similar a este, sigue estos pasos:

1. **Asegúrate de tener Node.js instalado** (versión 16 o superior recomendada). Para VSCode agrega la extensión ES7 + Rect/Redux/react-Native snippets

2. **Ejecuta el comando de creación:**
   ```bash
   npm create vite@latest
   ```

3. **Sigue las instrucciones interactivas:**
   - Ingresa el nombre de tu proyecto
   - Selecciona `React` como framework
   - Selecciona `JavaScript` o `TypeScript` como variante

4. **Navega a la carpeta del proyecto:**
   ```bash
   cd nombre-de-tu-proyecto
   ```

5. **Instala las dependencias:**
   ```bash
   npm install
   ```

## Estructura del proyecto

Cuando creas un proyecto con Vite, se genera la siguiente estructura de archivos y carpetas:

```
proyecto/
├── node_modules/          # Dependencias del proyecto (se crea después de npm install)
├── public/                # Archivos estáticos públicos
│   └── vite.svg          # Favicon por defecto
├── src/                   # Código fuente de la aplicación
│   ├── assets/           # Recursos estáticos (imágenes, etc.)
│   ├── App.css           # Estilos del componente App
│   ├── App.jsx           # Componente principal de la aplicación
│   ├── index.css         # Estilos globales
│   └── main.jsx          # Punto de entrada de la aplicación
├── .gitignore            # Archivos ignorados por Git
├── index.html            # Plantilla HTML principal
├── package.json          # Configuración del proyecto y dependencias
├── package-lock.json     # Versiones exactas de las dependencias
├── vite.config.js        # Configuración de Vite
└── README.md             # Este archivo
```

### Descripción de archivos y carpetas principales

#### `index.html`
- Plantilla HTML principal de la aplicación
- Contiene el div root donde se monta la aplicación React
- Incluye el script que carga `main.jsx`

#### `src/main.jsx`
- Punto de entrada de la aplicación
- Renderiza el componente App en el DOM
- Configura React con StrictMode

#### `src/App.jsx`
- Componente principal de la aplicación
- Es el componente raíz desde donde se construye la interfaz

#### `src/App.css` y `src/index.css`
- Archivos de estilos CSS
- `index.css`: estilos globales
- `App.css`: estilos específicos del componente App

#### `src/assets/`
- Carpeta para recursos estáticos (imágenes, fuentes, etc.)
- Los archivos aquí pueden ser importados en los componentes

#### `public/`
- Archivos estáticos que se copian tal cual a la carpeta de distribución
- Útil para favicon, robots.txt, etc.

#### `vite.config.js`
- Archivo de configuración de Vite
- Define plugins y opciones de construcción

#### `package.json`
- Define las dependencias del proyecto
- Contiene scripts para ejecutar, construir y previsualizar la aplicación

## Cómo ejecutar el proyecto

### Modo desarrollo

Para ejecutar el proyecto en modo desarrollo con hot reload:

```bash
npm run dev
```

Esto iniciará un servidor de desarrollo, generalmente en `http://localhost:5173`

### Construir para producción

Para crear una versión optimizada para producción:

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`

### Previsualizar la versión de producción

Para previsualizar la versión de producción localmente:

```bash
npm run preview
```


