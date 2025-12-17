# Cart React 01 - Estructura Básica del Proyecto

## Objetivo

Crear la estructura básica de una tienda de libros en línea con React. En esta primera etapa, crearemos un header estático y mostraremos una lista de libros de forma hardcodeada.

## ¿Qué aprenderás?

- Crear componentes React básicos
- Organizar componentes en carpetas
- Composición de componentes (componentes dentro de componentes)
- Estructura de un proyecto React con Vite
- Renderizado de listas básicas en React

## Requisitos Previos

- Node.js instalado (versión 16 o superior)
- Editor de código (VS Code recomendado)
- Extensión de VS Code: ES7 + React/Redux/React-Native snippets

## Configuración Inicial del Proyecto

1. **Crea un nuevo proyecto con Vite:**
   ```bash
   npm create vite@latest cart-react-01
   ```

2. **Selecciona las opciones:**
   - Framework: `React`
   - Variante: `JavaScript`

3. **Instala las dependencias:**
   ```bash
   cd cart-react-01
   npm install
   ```

4. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

## Paso 1: Crear la Carpeta de Imágenes

Crea la carpeta `public/images` y coloca algunas imágenes de libros (0.jpg, 1.jpg, 2.jpg, etc.). Puedes usar imágenes de marcador de posición si no tienes imágenes de libros.

## Paso 2: Crear el Componente Header

Crea una carpeta `components` dentro de `src`:

**Archivo:** `src/components/Header.jsx`

```jsx
// Componente Header - Muestra la cabecera de la tienda
// Por ahora es estático, solo muestra el título y un contador fijo
function Header() {
  return (
    <header className="cabecera">
      {/* Título de la tienda */}
      <span className="titulo">Your Book Store</span>
      
      {/* Contador de items en el carrito (por ahora fijo en 0) */}
      <span id="contador" className="blue">
        0
      </span>
    </header>
  );
}

// Exportamos el componente para poder usarlo en App.jsx
export default Header;
```

**Explicación:**
- `Header` es un componente funcional simple
- Retorna un elemento `<header>` con dos spans: uno para el título y otro para el contador
- Por ahora, el contador está hardcodeado a 0

## Paso 3: Crear el Componente BookList

**Archivo:** `src/components/BookList.jsx`

```jsx
// Componente BookList - Muestra la lista de libros disponibles
// Por ahora, los libros están hardcodeados directamente en el componente
function BookList() {
  return (
    <div className="wrapper">
      {/* Libro 1 */}
      <div>
        <img 
          src="/images/0.jpg" 
          alt="Q"
          height="170" 
          width="108"
        />
        <br />
        <strong>Q</strong>
        <br />
        Luther Blissett
      </div>

      {/* Libro 2 */}
      <div>
        <img 
          src="/images/1.jpg" 
          alt="El amor en tiempos de cólera"
          height="170" 
          width="108"
        />
        <br />
        <strong>El amor en tiempos de cólera</strong>
        <br />
        Gabriel García Márquez
      </div>

      {/* Libro 3 */}
      <div>
        <img 
          src="/images/2.jpg" 
          alt="Watchmen"
          height="170" 
          width="108"
        />
        <br />
        <strong>Watchmen</strong>
        <br />
        Alan Moore y Dave Gibbons
      </div>
    </div>
  );
}

// Exportamos el componente
export default BookList;
```

**Explicación:**
- Por ahora, cada libro está escrito directamente en el JSX (hardcodeado)
- Cada libro muestra: imagen, título y autor
- Están todos dentro de un `div` con clase `wrapper`

## Paso 4: Modificar App.jsx

**Archivo:** `src/App.jsx`

```jsx
// Importamos los estilos de la aplicación
import "./App.css";
// Importamos los componentes que vamos a usar
import Header from "./components/Header";
import BookList from "./components/BookList";

// Componente principal de la aplicación
function App() {
  return (
    <div className="window">
      {/* Header con el título y contador */}
      <Header />
      
      <div className="window-content">
        <div className="pane-group">
          {/* Panel con la lista de libros */}
          <div className="pane">
            <BookList />
          </div>
        </div>
      </div>
    </div>
  );
}

// Exportamos el componente para poder usarlo en main.jsx
export default App;
```

**Explicación:**
- Importamos los componentes `Header` y `BookList`
- Organizamos el layout con divs que tienen clases CSS
- Por ahora no hay lógica, solo estructura

## Paso 5: Agregar los Estilos CSS

**Archivo:** `src/App.css`

```css
/* Estilos generales */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
}

/* Contenedor principal tipo ventana */
.window {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Cabecera */
.cabecera {
  background-color: #2c3e50;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.titulo {
  font-size: 1.5rem;
  font-weight: bold;
}

#contador {
  background-color: #3498db;
  border-radius: 50%;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  min-width: 40px;
  text-align: center;
}

.blue {
  color: white;
}

/* Contenedor de contenido */
.window-content {
  flex: 1;
}

.pane-group {
  display: flex;
  height: 100%;
}

.pane {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
}

/* Grid de libros */
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 2rem;
  justify-items: center;
}

.wrapper > div {
  text-align: center;
}

.wrapper img {
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}

.wrapper img:hover {
  transform: scale(1.05);
}
```

## Paso 6: Modificar index.css

**Archivo:** `src/index.css`

```css
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

#root {
  width: 100%;
  margin: 0;
  padding: 0;
}
```

## Conceptos Clave Aprendidos

### 1. Componentes Funcionales
Los componentes son funciones que retornan JSX:
```jsx
function MiComponente() {
  return <div>Hola</div>;
}
```

### 2. Composición de Componentes
Un componente puede usar otros componentes:
```jsx
function App() {
  return (
    <div>
      <Header />
      <BookList />
    </div>
  );
}
```

### 3. Estructura de carpetas
```
src/
  ├── components/
  │   ├── Header.jsx
  │   └── BookList.jsx
  ├── App.jsx
  ├── App.css
  └── main.jsx
```

## Resultado Esperado

Al ejecutar `npm run dev`, deberías ver:
- Un header azul con el título "Your Book Store" y un contador en 0
- Una lista de 3 libros con sus imágenes, títulos y autores
- Los libros organizados en un grid responsive

## Limitaciones de esta Versión

- Los libros están hardcodeados (escritos directamente en el JSX)
- No hay interactividad (no se puede hacer clic en nada)
- El contador siempre muestra 0
- Código repetitivo para cada libro

**En la siguiente versión (Cart-React-02)** aprenderemos a:
- Crear componentes más pequeños y reutilizables
- Pasar datos usando props
- Hacer el código más mantenible

## Ejercicios Propuestos

1. Agrega más libros a la lista (copia y pega el código de un libro y cambia los datos)
2. Cambia los colores del header modificando el CSS
3. Modifica el tamaño de las imágenes de los libros
4. Agrega tu nombre en el footer de la página

## Solución de Problemas

**Las imágenes no se muestran:**
- Verifica que las imágenes estén en `public/images/`
- Asegúrate de que los nombres coincidan (0.jpg, 1.jpg, etc.)
- La carpeta `public` se sirve directamente, usa `/images/0.jpg` no `./images/0.jpg`

**El servidor no inicia:**
- Asegúrate de haber ejecutado `npm install` primero
- Verifica que el puerto 5173 no esté siendo usado por otra aplicación

**Los estilos no se aplican:**
- Verifica que hayas importado `App.css` en `App.jsx`
- Asegúrate de que los nombres de las clases CSS coincidan
