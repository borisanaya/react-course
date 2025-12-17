# Cart React 05 - Visualización y Gestión del Carrito

## Objetivo

Crear un componente `Cart` para visualizar los libros agregados al carrito y permitir eliminarlos. Aprenderemos sobre renderizado condicional y operaciones de gestión de estado más avanzadas.

## ¿Qué aprenderás?

- Crear un componente Cart para mostrar el contenido del carrito
- Implementar funcionalidad para eliminar items
- Renderizado condicional (mostrar/ocultar componentes)
- Filtrar elementos de un array con `.filter()`
- Gestión de eventos más compleja
- Layout de dos paneles (libros + carrito)

## Requisitos Previos

- Haber completado Cart-React-04
- Entender el concepto de estado y props
- Conocer el método `.map()` para renderizar listas

## Configuración Inicial

1. **Asegúrate de tener Node.js instalado** (versión 16 o superior)
2. **Instala las dependencias del proyecto:**
   ```bash
   npm install
   ```

## Partiendo del Proyecto Anterior

Este proyecto parte de Cart-React-04. Si estás construyéndolo desde cero:
1. Copia la carpeta del proyecto anterior
2. Renombra a `cart-react-05`
3. Sigue las modificaciones indicadas abajo

## Modificaciones a Realizar

### Paso 1: Crear el Componente Cart

**Archivo:** `src/components/Cart.jsx`

```jsx
// Componente Cart - Muestra el carrito de compras
// Recibe la lista de items del carrito y función para eliminar
function Cart({ cartItems, onRemoveFromCart }) {
  return (
    <div className="pane-sm sidebar">
      <ul className="list-group">
        {/* Renderizado de lista: mapeamos cada item del carrito */}
        {cartItems.map((book, index) => (
          <li key={index} className="list-group-item">
            {/* Imagen pequeña del libro */}
            <img 
              className="img-circle media-object pull-left" 
              src={`/images/${book.img}`} 
              alt={book.title}
              width="32" 
              height="32"
            />
            
            {/* Información del libro */}
            <div className="media-body">
              <strong>{book.title}</strong>
              <p>{book.author}</p>
              
              {/* Botón para eliminar el libro del carrito */}
              {/* onClick llama a la función del padre pasando el índice */}
              <button 
                className="btn btn-mini btn-default"
                onClick={() => onRemoveFromCart(index)}
              >
                ❌
              </button>
            </div>
          </li>
        ))}
        
        {/* Renderizado condicional: si el carrito está vacío, mostramos un mensaje */}
        {cartItems.length === 0 && (
          <li className="list-group-item">
            <p style={{ textAlign: 'center', color: '#999' }}>
              El carrito está vacío
            </p>
          </li>
        )}
      </ul>
    </div>
  );
}

// Exportamos el componente
export default Cart;
```

**Explicación:**

1. **Props recibidas:**
   - `cartItems`: array de libros en el carrito
   - `onRemoveFromCart`: función para eliminar un libro

2. **Renderizado de la lista:**
   ```jsx
   {cartItems.map((book, index) => ( /* ... */ ))}
   ```
   - Usa `.map()` como en BookList

3. **Botón de eliminar:**
   ```jsx
   <button onClick={() => onRemoveFromCart(index)}>❌</button>
   ```
   - Arrow function inline para pasar el índice
   - `onRemoveFromCart(index)` elimina el libro en esa posición

4. **Renderizado condicional:**
   ```jsx
   {cartItems.length === 0 && (
     <p>El carrito está vacío</p>
   )}
   ```
   - Operador lógico AND (`&&`)
   - Si `cartItems.length === 0` es true, renderiza el mensaje
   - Si es false, no renderiza nada

### Paso 2: Modificar Header.jsx para Toggle del Carrito

**Archivo:** `src/components/Header.jsx`

```jsx
// Componente Header - Muestra la cabecera de la tienda
// Ahora también maneja el toggle (mostrar/ocultar) del carrito
function Header({ cartCount, onToggleCart }) {
  return (
    <header className="cabecera">
      {/* Título de la tienda */}
      <span className="titulo">Your Book Store</span>
      
      {/* Contador de items en el carrito */}
      {/* Ahora es clickeable para mostrar/ocultar el carrito */}
      <span 
        id="contador" 
        className="blue" 
        onClick={onToggleCart}
        style={{ cursor: 'pointer' }}
      >
        {cartCount}
      </span>
    </header>
  );
}

// Exportamos el componente
export default Header;
```

**Explicación:**
- `onToggleCart`: función que se ejecuta al hacer clic en el contador
- `cursor: 'pointer'`: indica que es clickeable

### Paso 3: Actualizar App.jsx con la Funcionalidad Completa

**Archivo:** `src/App.jsx`

```jsx
// Importamos los estilos de la aplicación
import "./App.css";
// Importamos los hooks de React que vamos a utilizar
import { useState } from "react";
// Importamos los componentes que vamos a usar
import Header from "./components/Header";
import BookList from "./components/BookList";
import Cart from "./components/Cart";

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
    },
    {
      title: "54",
      author: "Wu Ming",
      img: "3.jpg"
    },
    {
      title: "El ejército de los sonámbulos",
      author: "Wu Ming",
      img: "4.jpg"
    },
    {
      title: "Maus",
      author: "Art Spiegelman",
      img: "5.jpg"
    }
  ];
  
  // Estado para almacenar los libros seleccionados en el carrito
  const [cartItems, setCartItems] = useState([]);
  
  // Estado para controlar si el carrito está visible u oculto
  const [showCart, setShowCart] = useState(false);

  // Función para agregar un libro al carrito
  const handleAddToCart = (book) => {
    setCartItems([...cartItems, book]);
  };

  // Función para eliminar un libro del carrito por su índice
  const handleRemoveFromCart = (index) => {
    // .filter() crea un nuevo array excluyendo el elemento en el índice especificado
    // (item, i) => i !== index: mantiene todos los elementos excepto el del índice
    const newCartItems = cartItems.filter((item, i) => i !== index);
    setCartItems(newCartItems);
  };

  // Función para mostrar/ocultar el carrito
  const handleToggleCart = () => {
    // Invertimos el valor booleano: true -> false, false -> true
    setShowCart(!showCart);
  };

  // Renderizado del componente
  return (
    <div className="window">
      {/* Header con el título y contador clickeable */}
      <Header 
        cartCount={cartItems.length} 
        onToggleCart={handleToggleCart}
      />
      
      <div className="window-content">
        <div className="pane-group">
          {/* Panel izquierdo: Lista de libros */}
          <div className="pane">
            <BookList 
              books={books} 
              onAddToCart={handleAddToCart}
            />
          </div>
          
          {/* Panel derecho: Carrito (renderizado condicional) */}
          {/* Solo se renderiza si showCart es true */}
          {showCart && (
            <Cart 
              cartItems={cartItems} 
              onRemoveFromCart={handleRemoveFromCart}
            />
          )}
        </div>
      </div>
    </div>
  );
}

// Exportamos el componente
export default App;
```

**Explicación detallada:**

1. **Nuevo estado: showCart**
   ```jsx
   const [showCart, setShowCart] = useState(false);
   ```
   - Controla si el carrito está visible o no
   - Inicia en `false` (oculto)

2. **Función handleRemoveFromCart:**
   ```jsx
   const handleRemoveFromCart = (index) => {
     const newCartItems = cartItems.filter((item, i) => i !== index);
     setCartItems(newCartItems);
   };
   ```
   - `.filter()` crea un nuevo array
   - `(item, i) => i !== index`: mantiene todos excepto el del índice
   - Respeta la inmutabilidad (no modifica el array original)

3. **Función handleToggleCart:**
   ```jsx
   const handleToggleCart = () => {
     setShowCart(!showCart);
   };
   ```
   - `!showCart`: invierte el valor booleano
   - Si era `true` pasa a `false` y viceversa

4. **Renderizado condicional del Cart:**
   ```jsx
   {showCart && <Cart ... />}
   ```
   - Solo renderiza el componente Cart si `showCart` es `true`
   - Operador lógico AND (`&&`)

### Paso 4: Actualizar los Estilos CSS

Agrega estos estilos al final de `App.css`:

**Archivo:** `src/App.css`

```css
/* ... estilos anteriores ... */

/* Sidebar del carrito */
.pane-sm {
  width: 300px;
  border-left: 1px solid #ddd;
  background-color: #f9f9f9;
}

.sidebar {
  padding: 1rem;
}

/* Lista de items del carrito */
.list-group {
  list-style: none;
  padding: 0;
  margin: 0;
}

.list-group-item {
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

.list-group-item:last-child {
  border-bottom: none;
}

/* Imagen circular */
.img-circle {
  border-radius: 50%;
  object-fit: cover;
}

.media-object {
  flex-shrink: 0;
}

.pull-left {
  margin-right: 0.5rem;
}

/* Información del libro en el carrito */
.media-body {
  flex: 1;
}

.media-body strong {
  display: block;
  margin-bottom: 0.25rem;
  color: #333;
}

.media-body p {
  margin: 0;
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 0.5rem;
}

/* Botones */
.btn {
  padding: 0.25rem 0.5rem;
  border: 1px solid #ddd;
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: all 0.2s;
}

.btn:hover {
  background-color: #f0f0f0;
}

.btn-mini {
  padding: 0.2rem 0.4rem;
  font-size: 0.75rem;
}

.btn-default {
  color: #333;
}
```

## Conceptos Clave Aprendidos

### 1. Renderizado Condicional

Hay varias formas de hacer renderizado condicional en React:

**Operador lógico AND (&&):**
```jsx
{condition && <Component />}
// Si condition es true, renderiza el componente
```

**Operador ternario (? :):**
```jsx
{condition ? <ComponentA /> : <ComponentB />}
// Si condition es true, renderiza A, sino B
```

**If statement (fuera del JSX):**
```jsx
let componente;
if (condition) {
  componente = <ComponentA />;
} else {
  componente = <ComponentB />;
}
return <div>{componente}</div>;
```

### 2. El Método .filter()

Crea un nuevo array con los elementos que cumplen una condición:

```jsx
const numeros = [1, 2, 3, 4, 5];
const pares = numeros.filter(num => num % 2 === 0);
// pares = [2, 4]
```

En nuestro caso:
```jsx
cartItems.filter((item, i) => i !== index)
// Mantiene todos los items excepto el del índice especificado
```

### 3. Estados Booleanos para Toggle

```jsx
const [isOpen, setIsOpen] = useState(false);

const toggle = () => setIsOpen(!isOpen);
// Invierte el valor: true <-> false
```

### 4. Funciones Arrow Inline

```jsx
// Sin parámetros
onClick={handleClick}

// Con parámetros (necesita arrow function)
onClick={() => handleClick(param)}
```

## Flujo de Datos Completo

```
App (gestiona todo el estado)
├── cartItems (array de libros)
├── showCart (booleano)
│
├── Header
│   ├── recibe: cartCount, onToggleCart
│   └── al hacer clic: llama onToggleCart()
│
├── BookList
│   ├── recibe: books, onAddToCart
│   └── BookItem
│       └── al hacer clic: llama onAddToCart(book)
│
└── Cart (solo si showCart === true)
    ├── recibe: cartItems, onRemoveFromCart
    └── al hacer clic en ❌: llama onRemoveFromCart(index)
```

## Resultado Esperado

Al ejecutar `npm run dev`:

1. **Inicialmente:**
   - Se muestran los 6 libros
   - El contador muestra 0
   - El carrito está oculto

2. **Al hacer clic en un libro:**
   - El contador aumenta
   - El libro se agrega al carrito (pero aún no lo vemos)

3. **Al hacer clic en el contador:**
   - El carrito aparece en el lado derecho
   - Se muestran todos los libros agregados

4. **Al hacer clic en ❌ en un libro del carrito:**
   - El libro se elimina del carrito
   - El contador disminuye

5. **Al volver a hacer clic en el contador:**
   - El carrito se oculta

## Visualización del Layout

```
┌─────────────────────────────────────────────────────┐
│  Your Book Store                               [3]  │ ← Header
├──────────────────────────┬──────────────────────────┤
│                          │                          │
│  [Libro1] [Libro2]       │  📦 Carrito              │
│  [Libro3] [Libro4]       │  ┌──────────────────┐   │
│  [Libro5] [Libro6]       │  │ 📖 Watchmen  ❌  │   │
│                          │  │ 📖 Q         ❌  │   │
│                          │  │ 📖 Maus      ❌  │   │
│                          │  └──────────────────┘   │
│  Lista de libros         │  Cart (condicional)     │
└──────────────────────────┴──────────────────────────┘
```

## Ejercicios Propuestos

1. **Evitar duplicados:** Modifica `handleAddToCart` para que no agregue el mismo libro dos veces:
   ```jsx
   const existe = cartItems.some(item => item.title === book.title);
   if (!existe) {
     setCartItems([...cartItems, book]);
   }
   ```

2. **Botón "Vaciar Carrito":** Agrega un botón en Cart que elimine todos los items:
   ```jsx
   <button onClick={() => setCartItems([])}>Vaciar Carrito</button>
   ```

3. **Contador por libro:** Modifica para que si agregas el mismo libro, aumente un contador en lugar de duplicarlo

4. **Total de libros:** Si agregas precios, muestra el total en el carrito

5. **Animación:** Agrega una transición CSS cuando el carrito aparece/desaparece

## Limitaciones de esta Versión

- Los datos aún están hardcodeados en App.jsx
- No hay persistencia (si recargas la página, pierdes el carrito)
- Las imágenes deben estar en la carpeta public

**En la siguiente versión (Cart-React-06)** aprenderemos a:
- Usar el hook `useEffect` para efectos secundarios
- Cargar datos desde un archivo JSON con `fetch`
- Separar los datos del código

## Debugging: Problemas Comunes

**El carrito no aparece al hacer clic:**
- Verifica que `showCart` esté cambiando (usa React DevTools)
- Asegúrate de que `handleToggleCart` esté conectado correctamente
- Revisa la sintaxis: `{showCart && <Cart />}`

**Error al eliminar un libro:**
- Verifica que estés pasando el `index` correctamente
- Asegúrate de usar `.filter()` no `.splice()` (inmutabilidad)
- Revisa que el índice sea un número

**Los estilos no se aplican:**
- Verifica que hayas copiado todos los estilos a `App.css`
- Asegúrate de que los nombres de las clases coincidan

**"Cannot read property 'map' of undefined":**
- Verifica que `cartItems` esté inicializado: `useState([])`
- Asegúrate de pasar `cartItems` al componente Cart

## Comparación de Métodos de Array

| Método | Qué hace | Modifica original | Retorna |
|--------|----------|-------------------|---------|
| `.map()` | Transforma cada elemento | No | Nuevo array |
| `.filter()` | Filtra elementos | No | Nuevo array |
| `.push()` | Agrega al final | **Sí** ❌ | Longitud |
| `.splice()` | Elimina/agrega elementos | **Sí** ❌ | Array eliminados |
| Spread `[...]` | Copia array | No | Nuevo array |

**En React siempre usamos métodos que NO modifican el original** (inmutabilidad).

¡Felicidades! Ahora tienes un carrito de compras completamente funcional. 🛒
