# Cart React 03 - Estado e Interactividad con useState

## Objetivo

Agregar **interactividad** a la aplicación permitiendo que los usuarios agreguen libros al carrito. Aprenderemos a usar el hook `useState` para manejar el estado de la aplicación.

## ¿Qué aprenderás?

- Qué es el estado (state) en React
- Cómo usar el hook `useState`
- Qué es la inmutabilidad
- Manejo de eventos (onClick)
- Cómo pasar funciones como props (callback functions)
- Por qué React re-renderiza cuando cambia el estado

## Requisitos Previos

- Haber completado Cart-React-02
- Entender qué son las props
- Conocer la sintaxis básica de funciones flecha

## Configuración Inicial

1. **Asegúrate de tener Node.js instalado** (versión 16 o superior)
2. **Instala las dependencias del proyecto:**
   ```bash
   npm install
   ```

## Partiendo del Proyecto Anterior

Este proyecto parte de Cart-React-02. Si estás construyéndolo desde cero:
1. Copia la carpeta del proyecto anterior
2. Renombra a `cart-react-03`
3. Sigue las modificaciones indicadas abajo

## Modificaciones a Realizar

### Paso 1: Agregar useState a App.jsx

**Antes (Cart-React-02):**
```jsx
function App() {
  const books = [ /* ... */ ];
  const cartCount = 0; // Variable fija
  
  return ( /* ... */ );
}
```

**Después (Cart-React-03):**

**Archivo:** `src/App.jsx`

```jsx
// Importamos los estilos de la aplicación
import "./App.css";
// Importamos useState - hook para manejar estado en componentes funcionales
import { useState } from "react";
// Importamos los componentes
import Header from "./components/Header";
import BookList from "./components/BookList";

// Componente principal de la aplicación
function App() {
  // Array de libros (aún hardcodeado)
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

  // useState para manejar el estado del carrito
  // cartItems: array que contiene los libros agregados al carrito
  // setCartItems: función para actualizar el estado
  // useState([]): valor inicial del estado (array vacío)
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar un libro al carrito
  // Esta función se pasará como prop a los componentes hijos
  const handleAddToCart = (book) => {
    // Agregamos el libro al array usando el spread operator
    // [...cartItems, book] crea un nuevo array con todos los items anteriores + el nuevo
    // IMPORTANTE: No modificamos el array directamente (inmutabilidad)
    setCartItems([...cartItems, book]);
    
    // Mostramos en consola para ver qué está pasando
    console.log('Libro agregado:', book.title);
    console.log('Total items en carrito:', cartItems.length + 1);
  };

  // Renderizado del componente
  return (
    <div className="window">
      {/* Pasamos el número de items en el carrito al Header */}
      <Header cartCount={cartItems.length} />
      
      <div className="window-content">
        <div className="pane-group">
          <div className="pane">
            {/* Pasamos los libros Y la función handleAddToCart */}
            <BookList 
              books={books} 
              onAddToCart={handleAddToCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Exportamos el componente
export default App;
```

**Explicación detallada:**

1. **Importación de useState:**
   ```jsx
   import { useState } from "react";
   ```
   - `useState` es un hook que permite agregar estado a componentes funcionales

2. **Declaración del estado:**
   ```jsx
   const [cartItems, setCartItems] = useState([]);
   ```
   - `cartItems`: variable que contiene el estado actual (array de libros)
   - `setCartItems`: función para actualizar el estado
   - `useState([])`: inicializa el estado con un array vacío

3. **Función handleAddToCart:**
   ```jsx
   const handleAddToCart = (book) => {
     setCartItems([...cartItems, book]);
   };
   ```
   - Recibe un libro como parámetro
   - `[...cartItems, book]` usa el spread operator para crear un nuevo array
   - NUNCA hacemos `cartItems.push(book)` (eso modifica el array original)

4. **Inmutabilidad:**
   ```jsx
   // ❌ MAL - Muta el array directamente
   cartItems.push(book);
   
   // ✅ BIEN - Crea un nuevo array
   setCartItems([...cartItems, book]);
   ```

### Paso 2: Modificar BookList.jsx para Pasar la Función

**Archivo:** `src/components/BookList.jsx`

```jsx
// Importamos el componente BookItem
import BookItem from "./BookItem";

// Componente BookList - Muestra la lista de libros disponibles
// Ahora también recibe la función onAddToCart que pasará a cada BookItem
function BookList({ books, onAddToCart }) {
  return (
    <div className="wrapper">
      {/* Pasamos tanto el libro como la función a cada BookItem */}
      <BookItem book={books[0]} onAddToCart={onAddToCart} />
      <BookItem book={books[1]} onAddToCart={onAddToCart} />
      <BookItem book={books[2]} onAddToCart={onAddToCart} />
    </div>
  );
}

// Exportamos el componente
export default BookList;
```

**Explicación:**
- `{ books, onAddToCart }` recibe tanto los libros como la función
- Pasamos `onAddToCart` a cada `BookItem`
- La función "viaja" desde App → BookList → BookItem

### Paso 3: Modificar BookItem.jsx para Agregar Interactividad

**Antes (Cart-React-02):**
```jsx
function BookItem({ book }) {
  return (
    <div>
      <img src={`/images/${book.img}`} alt={book.title} height="170" width="108"/>
      {/* ... */}
    </div>
  );
}
```

**Después (Cart-React-03):**

**Archivo:** `src/components/BookItem.jsx`

```jsx
// Componente BookItem - Muestra un libro individual
// Ahora recibe onAddToCart para manejar el clic
function BookItem({ book, onAddToCart }) {
  
  // Función que se ejecuta al hacer clic en la imagen
  // Llama a la función del padre (callback) pasando el libro
  const handleClick = () => {
    onAddToCart(book);
  };

  return (
    <div>
      {/* Agregamos el evento onClick a la imagen */}
      {/* También agregamos cursor pointer para indicar que es clickeable */}
      <img 
        src={`/images/${book.img}`} 
        alt={book.title}
        height="170" 
        width="108"
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
      />
      <br />
      <strong>{book.title}</strong>
      <br />
      {book.author}
    </div>
  );
}

// Exportamos el componente
export default BookItem;
```

**Explicación:**

1. **Nueva prop onAddToCart:**
   ```jsx
   function BookItem({ book, onAddToCart }) {
   ```
   - Recibe la función desde el componente padre

2. **Función handleClick:**
   ```jsx
   const handleClick = () => {
     onAddToCart(book);
   };
   ```
   - Se ejecuta cuando el usuario hace clic
   - Llama a `onAddToCart` pasándole el libro actual

3. **Evento onClick:**
   ```jsx
   <img onClick={handleClick} />
   ```
   - Conecta el evento de clic con nuestra función

4. **Cursor pointer:**
   ```jsx
   style={{ cursor: 'pointer' }}
   ```
   - Cambia el cursor para indicar que es clickeable

### Alternativa: Función Inline

También podríamos escribir la función directamente en el onClick:

```jsx
<img 
  onClick={() => onAddToCart(book)}
  // ... otras props
/>
```

Ambas formas funcionan, pero tener una función separada (`handleClick`) es más legible.

## Conceptos Clave Aprendidos

### 1. Estado (State)
El estado es información que puede cambiar con el tiempo y hace que React re-renderice el componente:

```jsx
const [valor, setValor] = useState(valorInicial);
```

- `valor`: el valor actual del estado
- `setValor`: función para actualizar el estado
- `valorInicial`: valor cuando el componente se monta

### 2. Inmutabilidad
NUNCA modificamos el estado directamente. Siempre creamos una copia nueva:

```jsx
// ❌ MAL - Modifica el array directamente
const items = [1, 2, 3];
items.push(4);

// ✅ BIEN - Crea un nuevo array
const items = [1, 2, 3];
const newItems = [...items, 4];
```

### 3. Funciones como Props (Callbacks)
Podemos pasar funciones de padre a hijo:

```jsx
// Componente padre
function Padre() {
  const miFuncion = (dato) => {
    console.log(dato);
  };
  
  return <Hijo callback={miFuncion} />;
}

// Componente hijo
function Hijo({ callback }) {
  return <button onClick={() => callback('Hola')}>Click</button>;
}
```

### 4. Spread Operator
El operador spread (`...`) expande un array:

```jsx
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]
```

### 5. Eventos en React
React usa eventos sintéticos (SyntheticEvents):

```jsx
<button onClick={handleClick}>Click</button>
<input onChange={handleChange} />
<form onSubmit={handleSubmit}>
```

## Flujo de Datos y Eventos

```
App (tiene el estado: cartItems)
  ↓ pasa: handleAddToCart
BookList
  ↓ pasa: handleAddToCart
BookItem
  ↓ usuario hace clic
  ↑ llama: onAddToCart(book)
  ↑ ejecuta: handleAddToCart(book)
App (actualiza el estado)
  ↓ React re-renderiza
Header (muestra nuevo cartCount)
```

## Resultado Esperado

Al ejecutar `npm run dev` y hacer clic en los libros:
- El contador en el header aumenta cada vez que haces clic
- En la consola del navegador verás los mensajes de "Libro agregado"
- Puedes hacer clic varias veces en el mismo libro (se agrega cada vez)

## ¿Cómo Saber si Funciona?

1. Abre las DevTools del navegador (F12)
2. Ve a la pestaña Console
3. Haz clic en un libro
4. Deberías ver: "Libro agregado: [nombre del libro]"
5. El contador en el header debería aumentar

## Ejercicios Propuestos

1. Agrega un `console.log` en `handleAddToCart` para mostrar el array completo: `console.log(cartItems)`
2. Modifica el código para que muestre una alerta cuando agregas un libro
3. Crea un botón "Limpiar Carrito" que ponga `cartItems` en array vacío
4. Modifica el estilo para que la imagen tenga un borde cuando pasas el mouse por encima

## Limitaciones de esta Versión

- Aún tenemos que escribir manualmente cada `<BookItem>` 
- No podemos ver qué libros están en el carrito (solo el contador)
- No podemos eliminar libros del carrito
- Si agregamos el mismo libro varias veces, no lo detectamos

**En la siguiente versión (Cart-React-04)** aprenderemos a:
- Usar `.map()` para renderizar listas dinámicamente
- Evitar escribir componentes manualmente uno por uno
- Agregar claves (keys) a las listas

## Debugging: Problemas Comunes

**El contador no aumenta:**
- Verifica que estés usando `setCartItems([...cartItems, book])` no `cartItems.push(book)`
- Asegúrate de estar pasando `handleAddToCart` correctamente a través de las props

**Error: "Cannot read property 'length' of undefined":**
- Verifica que hayas inicializado el estado: `useState([])`
- Asegúrate de que `cartItems` existe antes de usarlo

**El clic no hace nada:**
- Abre la consola (F12) y busca errores en rojo
- Verifica que `onClick={handleClick}` esté escrito correctamente (camelCase)
- Asegúrate de que `handleClick` sea una función, no una llamada: `onClick={handleClick}` NO `onClick={handleClick()}`

**Los libros se agregan pero el contador no se actualiza:**
- Verifica que estés pasando `cartItems.length` al Header
- React debería re-renderizar automáticamente cuando el estado cambia

## Estado vs Props: ¿Cuál es la diferencia?

| Estado (State) | Props |
|---------------|-------|
| Datos que PUEDEN cambiar | Datos que se RECIBEN del padre |
| Se gestiona con `useState` | Se pasan como atributos |
| Es "privado" del componente | Son "read-only" (solo lectura) |
| `const [x, setX] = useState()` | `function Mi({ x })` |

## Ciclo de Vida del Evento

1. Usuario hace clic en la imagen del libro
2. Se ejecuta `handleClick` en BookItem
3. `handleClick` llama a `onAddToCart(book)`
4. `onAddToCart` es realmente `handleAddToCart` de App
5. `handleAddToCart` llama a `setCartItems([...cartItems, book])`
6. React detecta el cambio de estado
7. React re-renderiza App y sus componentes hijos
8. Header muestra el nuevo valor de `cartItems.length`

¡Felicidades! Ahora tu aplicación es interactiva. 🎉
