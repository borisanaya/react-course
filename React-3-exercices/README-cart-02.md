# Cart React 02 - Componentes Reutilizables y Props

## Objetivo

Refactorizar el código para hacer componentes más pequeños y reutilizables. Aprenderemos a pasar datos de un componente padre a un componente hijo usando **props** (propiedades).

## ¿Qué aprenderás?

- Qué son las props en React
- Cómo pasar datos de padre a hijo
- Desestructuración de props
- Hacer componentes más dinámicos y reutilizables
- Principio DRY (Don't Repeat Yourself) en React

## Requisitos Previos

- Haber completado Cart-React-01
- Entender la estructura básica de componentes

## Configuración Inicial

1. **Asegúrate de tener Node.js instalado** (versión 16 o superior)
2. **Instala las dependencias del proyecto:**
   ```bash
   npm install
   ```

## Partiendo del Proyecto Anterior

Este proyecto parte de Cart-React-01. Si estás construyéndolo desde cero:
1. Copia la carpeta del proyecto anterior
2. Renombra a `cart-react-02`
3. Sigue las modificaciones indicadas abajo

## Modificaciones a Realizar

### Paso 1: Crear el Componente BookItem

Actualmente, cada libro está duplicado en `BookList.jsx`. Vamos a crear un componente separado para representar un solo libro.

**Archivo:** `src/components/BookItem.jsx`

```jsx
// Componente BookItem - Muestra un libro individual
// Recibe las props del componente padre (BookList)
// { book } es desestructuración: extrae la propiedad "book" del objeto props
function BookItem({ book }) {
  return (
    <div>
      {/* Usamos template literals para construir la ruta de la imagen */}
      <img 
        src={`/images/${book.img}`} 
        alt={book.title}
        height="170" 
        width="108"
      />
      <br />
      {/* Mostramos el título del libro desde las props */}
      <strong>{book.title}</strong>
      <br />
      {/* Mostramos el autor del libro desde las props */}
      {book.author}
    </div>
  );
}

// Exportamos el componente
export default BookItem;
```

**Explicación:**
- `{ book }` es desestructuración de props: extrae la propiedad `book` del objeto props
- `book.img`, `book.title`, `book.author` acceden a las propiedades del objeto libro
- Template literals `` `texto ${variable}` `` permiten insertar variables en strings
- El componente es reutilizable: puede mostrar cualquier libro que le pasemos

### Paso 2: Modificar Header.jsx para Recibir Props

**Antes (Cart-React-01):**
```jsx
function Header() {
  return (
    <header className="cabecera">
      <span className="titulo">Your Book Store</span>
      <span id="contador" className="blue">0</span>
    </header>
  );
}
```

**Después (Cart-React-02):**

**Archivo:** `src/components/Header.jsx`

```jsx
// Componente Header - Muestra la cabecera de la tienda
// Ahora recibe la cantidad de items en el carrito como prop
function Header({ cartCount }) {
  return (
    <header className="cabecera">
      {/* Título de la tienda */}
      <span className="titulo">Your Book Store</span>
      
      {/* Contador dinámico de items en el carrito */}
      {/* Muestra el valor recibido por props en lugar de un valor fijo */}
      <span id="contador" className="blue">
        {cartCount}
      </span>
    </header>
  );
}

// Exportamos el componente
export default Header;
```

**Explicación:**
- `{ cartCount }` recibe el número de items del carrito desde el componente padre
- `{cartCount}` muestra el valor dinámico en el JSX
- Ahora el componente es más flexible y reutilizable

### Paso 3: Modificar BookList.jsx para Usar BookItem

**Antes (Cart-React-01):**
```jsx
function BookList() {
  return (
    <div className="wrapper">
      {/* Código repetido para cada libro... */}
    </div>
  );
}
```

**Después (Cart-React-02):**

**Archivo:** `src/components/BookList.jsx`

```jsx
// Importamos el componente BookItem que mostrará cada libro individual
import BookItem from "./BookItem";

// Componente BookList - Muestra la lista de libros disponibles
// Recibe un array de libros desde el componente padre
function BookList({ books }) {
  return (
    <div className="wrapper">
      {/* Renderizamos cada libro usando el componente BookItem */}
      {/* Pasamos cada objeto libro como prop "book" */}
      
      {/* Libro 1 */}
      <BookItem book={books[0]} />
      
      {/* Libro 2 */}
      <BookItem book={books[1]} />
      
      {/* Libro 3 */}
      <BookItem book={books[2]} />
    </div>
  );
}

// Exportamos el componente
export default BookList;
```

**Explicación:**
- Importamos `BookItem` al inicio del archivo
- `{ books }` recibe el array de libros desde App
- `books[0]`, `books[1]`, `books[2]` acceden a cada libro del array
- `<BookItem book={books[0]} />` pasa el libro como prop al componente hijo
- Ahora el código es menos repetitivo

### Paso 4: Modificar App.jsx para Pasar Props

**Archivo:** `src/App.jsx`

```jsx
// Importamos los estilos de la aplicación
import "./App.css";
// Importamos los componentes que vamos a usar
import Header from "./components/Header";
import BookList from "./components/BookList";

// Componente principal de la aplicación
function App() {
  // Array de libros hardcodeado
  // Por ahora los datos están aquí, en versiones futuras los cargaremos de un archivo
  const books = [
    {
      title: "Q",
      author: "Luther Blissett",
      img: "0.jpg"
    },
    {
      title: "El amor en tiempos de cólera",
      author: "Gabriel García Márquez",
      img: "1.jpg"
    },
    {
      title: "Watchmen",
      author: "Alan Moore y Dave Gibbons",
      img: "2.jpg"
    }
  ];

  // Variable para el contador del carrito (por ahora fijo en 0)
  const cartCount = 0;

  // Renderizado del componente
  return (
    <div className="window">
      {/* Pasamos cartCount al Header como prop */}
      <Header cartCount={cartCount} />
      
      <div className="window-content">
        <div className="pane-group">
          {/* Pasamos el array de libros al BookList como prop */}
          <div className="pane">
            <BookList books={books} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Exportamos el componente
export default App;
```

**Explicación:**
- Definimos un array `books` con los datos de los libros
- Definimos una variable `cartCount` con el valor 0
- `<Header cartCount={cartCount} />` pasa el contador al Header
- `<BookList books={books} />` pasa el array de libros al BookList
- Los datos fluyen de padre (App) a hijos (Header, BookList)

## Conceptos Clave Aprendidos

### 1. Props (Propiedades)
Las props son datos que se pasan de un componente padre a un componente hijo:
```jsx
// Componente padre
<MiComponente nombre="Juan" edad={25} />

// Componente hijo
function MiComponente({ nombre, edad }) {
  return <p>{nombre} tiene {edad} años</p>;
}
```

### 2. Desestructuración de Props
Podemos extraer las props de dos formas:
```jsx
// Sin desestructuración
function BookItem(props) {
  return <div>{props.book.title}</div>;
}

// Con desestructuración (recomendado)
function BookItem({ book }) {
  return <div>{book.title}</div>;
}
```

### 3. Template Literals
Permiten insertar variables en strings:
```jsx
const nombre = "Juan";
const saludo = `Hola, ${nombre}!`; // "Hola, Juan!"

// En JSX
<img src={`/images/${book.img}`} />
```

### 4. Flujo de Datos Unidireccional
En React, los datos fluyen de arriba hacia abajo (de padre a hijo):
```
App (tiene los datos)
  ↓ props
Header (recibe cartCount)
  ↓ props  
BookList (recibe books)
  ↓ props
BookItem (recibe book)
```

## Estructura de Componentes

```
App
├── Header
│   └── recibe: cartCount
└── BookList
    └── recibe: books
        └── BookItem (×3)
            └── recibe: book
```

## Resultado Esperado

El resultado visual es idéntico a Cart-React-01, pero el código es:
- Más organizado
- Más reutilizable
- Más fácil de mantener
- Menos repetitivo

## Ventajas de Usar Props y Componentes Pequeños

✅ **Reutilización:** BookItem puede mostrar cualquier libro
✅ **Mantenibilidad:** Si necesitas cambiar cómo se ve un libro, solo modificas BookItem
✅ **Separación de responsabilidades:** Cada componente tiene una función clara
✅ **Testabilidad:** Es más fácil testear componentes pequeños

## Comparación: Antes vs Después

**Antes (Cart-React-01):**
```jsx
// Código duplicado 3 veces en BookList
<div>
  <img src="/images/0.jpg" alt="Q" height="170" width="108"/>
  <br />
  <strong>Q</strong>
  <br />
  Luther Blissett
</div>
```

**Después (Cart-React-02):**
```jsx
// Código reutilizable
<BookItem book={books[0]} />
<BookItem book={books[1]} />
<BookItem book={books[2]} />
```

## Ejercicios Propuestos

1. Agrega más libros al array `books` en App.jsx y renderízalos en BookList
2. Crea una nueva prop `price` en el objeto libro y muéstrala en BookItem
3. Modifica Header para que también reciba el título de la tienda como prop
4. Crea un componente `Footer` que reciba el año como prop y lo muestre

## Limitaciones de esta Versión

- Aún tenemos que escribir manualmente `<BookItem book={books[0]} />` para cada libro
- No hay interactividad (no podemos agregar libros al carrito)
- El contador del carrito sigue siendo estático (siempre 0)
- Los datos están hardcodeados en App.jsx

**En la siguiente versión (Cart-React-03)** aprenderemos a:
- Usar el hook `useState` para manejar estado
- Agregar interactividad (hacer clic en los libros)
- Actualizar el contador dinámicamente

## Solución de Problemas

**Error: "Cannot read property 'title' of undefined"**
- Verifica que el array `books` tenga datos
- Asegúrate de estar pasando `books[0]`, `books[1]`, etc. correctamente
- Revisa que las propiedades del objeto (title, author, img) estén escritas correctamente

**Los libros no se muestran:**
- Verifica que estés importando `BookItem` en `BookList`
- Asegúrate de estar pasando la prop `book` (singular) a BookItem
- Revisa que las imágenes existan en `public/images/`

**Props undefined:**
- Verifica que estés desestructurando las props correctamente: `{ book }` no `{ books }`
- Asegúrate de que el componente padre esté pasando la prop con el nombre correcto
