# React Básico 03 - Componentes con CSS

Este proyecto es una continuación de **React-Basics-02-components** donde se agregan estilos CSS a los componentes existentes. Aprenderás cómo aplicar estilos específicos a cada componente y usar CSS anidado.

## Cambios respecto a React-Basics-02-components

Este proyecto toma como base el proyecto anterior y añade estilización a los componentes. Los principales cambios son:

### 1. ButtonComponent

**Antes (React-Basics-02-components):**
```jsx
function ButtonComponent() {
  return <button>Soy un botón</button>
}
```

**Después (React-Basics-03-components-css):**
```jsx
import "./ButtonComponent.css";

function ButtonComponent() {
  return <button className="btn">Soy un botón</button>;
}
```

**Cambios aplicados:**
- Creado archivo `ButtonComponent.css` con estilos personalizados
- Importado el archivo CSS en el componente
- Añadido `className="btn"` al botón
- Estilos incluidos:
  - Padding y tamaño de fuente personalizados
  - Color de fondo naranja
  - Efectos hover (darkorange) y active (#FFD580)
  - Cursor pointer en hover

### 2. HeaderComponent

**Antes (React-Basics-02-components):**
```jsx
function HeaderComponent() {
  return (
    <header>
      <h1>Bienvenidos a esta página</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
}
```

**Después (React-Basics-03-components-css):**
```jsx
import "./HeaderComponent.css";

function HeaderComponent() {
  return (
    <header className="header">
      <h1 className="title">Bienvenidos a esta página</h1>
      <nav>
        <ul className="header-list">
          <li><a href="#" className="link">Home</a></li>
          <li><a href="#" className="link">Blog</a></li>
          <li><a href="#" className="link">News</a></li>
          <li><a href="#" className="link">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
}
```

**Cambios aplicados:**
- Creado archivo `HeaderComponent.css` con estilos personalizados
- Importado el archivo CSS en el componente
- Añadidas clases CSS a todos los elementos: `header`, `title`, `header-list`, `link`
- Estilos incluidos:
  - Fondo azul con texto blanco
  - Título centrado con padding
  - Navegación con flexbox y distribución espaciada
  - CSS anidado para mejor organización

### 3. App.jsx

**Cambios aplicados:**
- Añadido `className="main-content"` al contenedor principal
- Creado archivo `App.css` con padding para el contenido principal

## Conceptos Aprendidos

### Importar CSS en Componentes
```jsx
import "./ComponentName.css";
```
Cada componente puede tener su propio archivo CSS para mantener los estilos organizados.

### Uso de className
En React usamos `className` en lugar de `class` para asignar clases CSS:
```jsx
<div className="my-class">Contenido</div>
```

### CSS Anidado
El proyecto usa CSS anidado (nesting) para organizar mejor los estilos:
```css
.header {
  background-color: blue;
  
  .title {
    text-align: center;
  }
}
```

## Instalación y Ejecución

1. Instala las dependencias:
```bash
npm install
```

2. Inicia el servidor de desarrollo:
```bash
npm run dev
```

3. Abre tu navegador en `http://localhost:5173`

## Estructura del Proyecto

```
src/
├── App.jsx                        # Componente principal
├── App.css                        # Estilos del contenedor principal
├── main.jsx                       # Punto de entrada
├── index.css                      # Estilos globales
└── components/
    ├── ButtonComponent.jsx        # Componente de botón
    ├── ButtonComponent.css        # Estilos del botón
    ├── HeaderComponent.jsx        # Componente de encabezado
    └── HeaderComponent.css        # Estilos del encabezado
```


