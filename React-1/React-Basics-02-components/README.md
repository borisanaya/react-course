# React Básico 02 - Componentes

Este proyecto es una introducción a los **componentes en React**. Aprenderás qué son los componentes, cómo crearlos y cómo usarlos en tu aplicación.

## ¿Qué son los Componentes?

Los **componentes** son bloques de código reutilizables que representan partes de tu interfaz de usuario (UI). Piensa en ellos como piezas de LEGO: cada pieza tiene una función específica y puedes combinarlas para construir algo más grande.

### Ventajas de usar componentes:
- **Reutilización**: Puedes usar el mismo componente en diferentes partes de tu aplicación
- **Organización**: Tu código está mejor estructurado y es más fácil de mantener
- **Separación de responsabilidades**: Cada componente se enfoca en una tarea específica

## Instalación y Configuración

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
├── main.jsx                       # Punto de entrada de la aplicación
├── components/                    # Carpeta de componentes
│   ├── ButtonComponent.jsx        # Componente de botón
│   └── HeaderComponent.jsx        # Componente de encabezado
```

## Componentes Creados

### 1. HeaderComponent

**Ubicación**: `src/components/HeaderComponent.jsx`

**¿Qué hace?**
Este componente representa el encabezado de la página con un título y un menú de navegación.

**Código del componente:**
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

export default HeaderComponent;
```

**Explicación línea por línea:**
- `function HeaderComponent()`: Define una función que es nuestro componente
- `return (...)`: Devuelve el JSX (HTML dentro de JavaScript) que se mostrará
- `<header>`: Etiqueta HTML semántica para el encabezado
- `<nav>`: Etiqueta de navegación con una lista de enlaces
- `export default HeaderComponent`: Exporta el componente para poder usarlo en otros archivos

**¿Cómo se usa?**
En `App.jsx`:
```jsx
import HeaderComponent from "./components/HeaderComponent";

<HeaderComponent></HeaderComponent>
// O de forma más corta:
<HeaderComponent />
```

### 2. ButtonComponent

**Ubicación**: `src/components/ButtonComponent.jsx`

**¿Qué hace?**
Este componente muestra un botón simple en la página.

**Código del componente:**
```jsx
function ButtonComponent() {
  return (
    <button>Soy un botón</button>
  )
}

export default ButtonComponent;
```

**Explicación:**
- Es un componente muy simple que devuelve un elemento `<button>`
- El texto "Soy un botón" aparece dentro del botón
- `export default` permite importarlo en otros archivos

**¿Cómo se usa?**
En `App.jsx`:
```jsx
import ButtonComponent from "./components/ButtonComponent";

<ButtonComponent></ButtonComponent>
// O de forma más corta:
<ButtonComponent />
```

## Componente App.jsx

Este es el componente principal que combina todos los demás componentes:

```jsx
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import HeaderComponent from "./components/HeaderComponent";

function App() {
  return (
    <>
      <HeaderComponent></HeaderComponent>

      <div>
        <h2>Hola a todos!</h2>
        <ButtonComponent></ButtonComponent>
      </div>
    </>
  );
}

export default App;
```

**Explicación:**
1. **Importaciones**: En las primeras líneas importamos los componentes que vamos a usar
2. **Fragment (`<>...</>`)**: Envuelve múltiples elementos sin agregar un div extra al DOM
3. **Uso de componentes**: Usamos `<HeaderComponent />` y `<ButtonComponent />` como si fueran etiquetas HTML normales
4. **Composición**: Combinamos nuestros componentes personalizados con HTML estándar (`<div>`, `<h2>`)

## Conceptos Clave

### 1. Creación de un Componente
```jsx
function MiComponente() {
  return (
    <div>Contenido del componente</div>
  );
}

export default MiComponente;
```

### 2. Importar un Componente
```jsx
import MiComponente from "./components/MiComponente";
```

### 3. Usar un Componente
```jsx
<MiComponente />
// O con etiqueta de cierre:
<MiComponente></MiComponente>
```

### 4. Reglas Importantes
- El nombre del componente **siempre empieza con mayúscula** (ej: `HeaderComponent`, no `headerComponent`)
- Un componente debe devolver (`return`) un solo elemento raíz
- Usa JSX para escribir "HTML" dentro de JavaScript
- Exporta el componente con `export default` para usarlo en otros archivos

## Ejercicios Sugeridos

Para practicar, intenta:

1. **Crear un componente FooterComponent** con información de copyright
2. **Crear un componente CardComponent** que muestre una tarjeta con título y descripción
3. **Modificar ButtonComponent** para que tenga un texto diferente
4. **Agregar más enlaces** al menú de navegación en HeaderComponent




