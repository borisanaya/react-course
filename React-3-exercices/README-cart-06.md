# Cart React 06 - Carga de Datos con useEffect y Fetch API

## Objetivo

Aprender a cargar datos dinámicamente desde un archivo JSON externo usando el hook `useEffect` y la Fetch API. Separar los datos del código para hacerlo más mantenible y escalable.

## ¿Qué aprenderás?

- Qué es el hook `useEffect` y para qué sirve
- Cómo cargar datos con Fetch API
- Trabajar con promesas en JavaScript
- El ciclo de vida de los componentes
- Manejo de estados de carga y errores
- Separación de datos y lógica

## Requisitos Previos

- Haber completado Cart-React-05
- Entender el concepto de asincronía en JavaScript
- Conocer conceptos básicos de promesas

## Configuración Inicial

1. **Asegúrate de tener Node.js instalado** (versión 16 o superior)
2. **Instala las dependencias del proyecto:**
   ```bash
   npm install
   ```

## Partiendo del Proyecto Anterior

Este proyecto parte de Cart-React-05. Si estás construyéndolo desde cero:
1. Copia la carpeta del proyecto anterior
2. Renombra a `cart-react-06`
3. Sigue las modificaciones indicadas abajo

## Modificaciones a Realizar

### Paso 1: Crear el Archivo books.json

Primero, movemos los datos a un archivo JSON externo.

**Archivo:** `public/books.json`

```json
[
  {
    "title": "Q",
    "author": "Luther Blissett",
    "img": "0.jpg"
  },
  {
    "title": "El amor en tiempos de cólera",
    "author": "Gabriel García Márquez",
    "img": "1.jpg"
  },
  {
    "title": "Watchmen",
    "author": "Alan Moore y Dave Gibbons",
    "img": "2.jpg"
  },
  {
    "title": "54",
    "author": "Wu Ming",
    "img": "3.jpg"
  },
  {
    "title": "El ejército de los sonámbulos",
    "author": "Wu Ming",
    "img": "4.jpg"
  },
  {
    "title": "Maus",
    "author": "Art Spiegelman",
    "img": "5.jpg"
  },
  {
    "title": "El tambor de hojalata",
    "author": "Günter Grass",
    "img": "6.jpg"
  },
  {
    "title": "Setenta kilos",
    "author": "Ramón Palomar",
    "img": "7.jpg"
  },
  {
    "title": "Manela es nombre de Tango",
    "author": "Almudena Grandes",
    "img": "8.jpg"
  },
  {
    "title": "La trilogía de Nueva York",
    "author": "Paul Auster",
    "img": "9.jpg"
  }
]
```

**Explicación:**
- Archivo JSON válido (no JavaScript)
- Array de objetos
- Cada objeto representa un libro
- Se coloca en `public/` para que sea accesible desde el navegador

### Paso 2: Modificar App.jsx para Cargar los Datos

**Antes (Cart-React-05):**
```jsx
function App() {
  const books = [ /* datos hardcodeados */ ];
  const [cartItems, setCartItems] = useState([]);
  // ...
}
```

**Después (Cart-React-06):**

**Archivo:** `src/App.jsx`

```jsx
// Importamos los estilos de la aplicación
import "./App.css";
// Importamos los hooks de React que vamos a utilizar
import { useState, useEffect } from "react";
// Importamos los componentes que vamos a usar
import Header from "./components/Header";
import BookList from "./components/BookList";
import Cart from "./components/Cart";

// Componente principal de la aplicación
function App() {
  // Estado para almacenar los libros cargados desde el JSON
  // Inicialmente es un array vacío
  const [books, setBooks] = useState([]);
  
  // Estado para almacenar los libros seleccionados en el carrito
  const [cartItems, setCartItems] = useState([]);
  
  // Estado para controlar si el carrito está visible u oculto
  const [showCart, setShowCart] = useState(false);

  // useEffect se ejecuta cuando el componente se monta
  // El array vacío [] como segundo parámetro significa "ejecutar solo una vez"
  useEffect(() => {
    // Fetch API para cargar los datos desde el archivo JSON
    // fetch() devuelve una promesa
    fetch('/books.json')
      .then(response => {
        // Convertimos la respuesta a JSON
        // response.json() también devuelve una promesa
        return response.json();
      })
      .then(data => {
        // Una vez que tenemos los datos, actualizamos el estado
        console.log('Libros cargados:', data);
        setBooks(data);
      })
      .catch(error => {
        // Si hay un error, lo mostramos en la consola
        console.error('Error loading books:', error);
      });
  }, []); // Array vacío: solo se ejecuta una vez al montar el componente

  // Función para agregar un libro al carrito
  const handleAddToCart = (book) => {
    setCartItems([...cartItems, book]);
  };

  // Función para eliminar un libro del carrito por su índice
  const handleRemoveFromCart = (index) => {
    const newCartItems = cartItems.filter((item, i) => i !== index);
    setCartItems(newCartItems);
  };

  // Función para mostrar/ocultar el carrito
  const handleToggleCart = () => {
    setShowCart(!showCart);
  };

  // Renderizado del componente
  return (
    <div className="window">
      {/* Header con el título y contador */}
      <Header 
        cartCount={cartItems.length} 
        onToggleCart={handleToggleCart}
      />
      
      <div className="window-content">
        <div className="pane-group">
          {/* Panel izquierdo: Lista de libros */}
          <div className="pane">
            {/* Mientras no hay libros, podríamos mostrar un mensaje */}
            {books.length === 0 ? (
              <p>Cargando libros...</p>
            ) : (
              <BookList 
                books={books} 
                onAddToCart={handleAddToCart}
              />
            )}
          </div>
          
          {/* Panel derecho: Carrito (renderizado condicional) */}
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

// Exportamos el componente para poder usarlo en main.jsx
export default App;
```

**Explicación detallada:**

### 1. Nuevo estado para los libros
```jsx
const [books, setBooks] = useState([]);
```
- Antes: `const books = [...]` (constante)
- Ahora: `const [books, setBooks] = useState([])` (estado)
- Inicia como array vacío hasta que se carguen los datos

### 2. El hook useEffect
```jsx
useEffect(() => {
  // Código que se ejecuta
}, []);
```

**Sintaxis:**
- Primer parámetro: función que contiene el efecto
- Segundo parámetro: array de dependencias

**Array de dependencias:**
- `[]` vacío: se ejecuta solo una vez al montar
- `[variable]`: se ejecuta cuando `variable` cambia
- Sin array: se ejecuta en cada render (¡cuidado!)

### 3. Fetch API
```jsx
fetch('/books.json')
  .then(response => response.json())
  .then(data => setBooks(data))
  .catch(error => console.error(error));
```

**Flujo:**
1. `fetch('/books.json')`: inicia la petición
2. `.then(response => response.json())`: convierte a JSON
3. `.then(data => setBooks(data))`: actualiza el estado
4. `.catch(error => ...)`: maneja errores

### 4. Renderizado condicional
```jsx
{books.length === 0 ? (
  <p>Cargando libros...</p>
) : (
  <BookList books={books} />
)}
```
- Mientras `books` está vacío, muestra "Cargando..."
- Cuando se cargan los datos, muestra la lista

## Entendiendo useEffect

### ¿Qué es un "efecto"?

Los efectos son operaciones que "escapan" del flujo normal de React:
- Peticiones HTTP (fetch)
- Suscripciones
- Timers (setTimeout, setInterval)
- Manipulación directa del DOM
- LocalStorage

### ¿Cuándo se ejecuta useEffect?

```jsx
// 1. Solo al montar el componente (una vez)
useEffect(() => {
  console.log('Componente montado');
}, []);

// 2. Al montar Y cuando cambia `count`
useEffect(() => {
  console.log('Count cambió:', count);
}, [count]);

// 3. En cada render (evitar si es posible)
useEffect(() => {
  console.log('Cada render');
});

// 4. Con cleanup (limpieza)
useEffect(() => {
  const timer = setInterval(() => console.log('Tick'), 1000);
  
  // Función de limpieza (se ejecuta al desmontar)
  return () => {
    clearInterval(timer);
  };
}, []);
```

### Orden de Ejecución

```
1. Componente se renderiza (primera vez)
   - books = []
   - Se muestra "Cargando libros..."

2. useEffect se ejecuta (después del render)
   - fetch('/books.json') inicia

3. fetch completa (asíncrono)
   - setBooks(data) actualiza el estado

4. Componente se re-renderiza (porque cambió el estado)
   - books = [...data from JSON]
   - Se muestra <BookList books={books} />
```

## Entendiendo Fetch API

### Sintaxis Básica

```jsx
// Promesas con .then()
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Async/await (alternativa moderna)
async function loadData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

### Fetch con useEffect usando async/await

Alternativa al código con promesas:

```jsx
useEffect(() => {
  // Necesitamos crear una función async dentro de useEffect
  const loadBooks = async () => {
    try {
      const response = await fetch('/books.json');
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error('Error loading books:', error);
    }
  };
  
  loadBooks();
}, []);
```

**Nota:** No podemos hacer el callback de useEffect directamente async:
```jsx
// ❌ MAL
useEffect(async () => { /* ... */ }, []);

// ✅ BIEN
useEffect(() => {
  async function loadData() { /* ... */ }
  loadData();
}, []);
```

## Mejora: Agregar Estados de Carga y Error

Versión mejorada con manejo completo de estados:

```jsx
function App() {
  const [books, setBooks] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  
  // Nuevos estados
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        setLoading(true);
        const response = await fetch('/books.json');
        
        if (!response.ok) {
          throw new Error('Error al cargar los libros');
        }
        
        const data = await response.json();
        setBooks(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };
    
    loadBooks();
  }, []);

  // Renderizado según el estado
  if (loading) {
    return <div>Cargando libros...</div>;
  }
  
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="window">
      {/* ... resto del código ... */}
    </div>
  );
}
```

## Conceptos Clave Aprendidos

### 1. useEffect Hook
Permite ejecutar efectos secundarios en componentes funcionales:
```jsx
useEffect(() => {
  // Tu código aquí
}, [dependencias]);
```

### 2. Fetch API
API nativa del navegador para hacer peticiones HTTP:
```jsx
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));
```

### 3. Promesas
Objetos que representan el resultado eventual de una operación asíncrona:
```jsx
promise
  .then(resultado => { /* éxito */ })
  .catch(error => { /* error */ });
```

### 4. Async/Await
Sintaxis moderna para trabajar con promesas:
```jsx
async function miFuncion() {
  const resultado = await promesa;
  return resultado;
}
```

### 5. Ciclo de Vida del Componente
- **Montaje (mount):** Cuando el componente aparece en el DOM
- **Actualización (update):** Cuando cambia el estado o las props
- **Desmontaje (unmount):** Cuando el componente se elimina del DOM

## Resultado Esperado

Al ejecutar `npm run dev`:

1. **Inicialmente:**
   - Se muestra "Cargando libros..." (muy brevemente)

2. **Después de cargar:**
   - Se muestran 10 libros (en lugar de 6)
   - Los datos vienen del archivo JSON
   - El resto de la funcionalidad sigue igual

3. **En la consola:**
   - Verás el mensaje: "Libros cargados: [array de libros]"

## Ventajas de Esta Arquitectura

### ✅ Separación de Datos y Código
- Los datos están en `books.json`
- El código está en los componentes
- Fácil de actualizar los datos sin tocar el código

### ✅ Escalabilidad
- Puedes agregar 100 libros al JSON sin modificar el código
- En el futuro, podrías cambiar de archivo JSON a una API real

### ✅ Mantenibilidad
- Diferentes personas pueden trabajar en datos y código
- Los diseñadores pueden editar el JSON sin tocar React

### ✅ Realismo
- Simula cómo funcionan las aplicaciones reales
- Preparado para conectar con una API backend

## Ejercicios Propuestos

1. **Agregar más libros:** Añade más libros al archivo `books.json` y verifica que se rendericen automáticamente

2. **Mostrar estado de carga:** Implementa un componente `Loading` personalizado en lugar del texto simple

3. **Manejo de errores:** Implementa estados `loading` y `error` como se muestra en la sección de mejoras

4. **Cargar desde API real:** Cambia `/books.json` por una API pública como:
   ```jsx
   fetch('https://jsonplaceholder.typicode.com/posts')
   ```

5. **Agregar IDs únicos:** Modifica el JSON para que cada libro tenga un `id` y úsalo como `key` en lugar del índice

6. **Filtrar libros:** Agrega un input de búsqueda que filtre los libros por título o autor

## Debugging: Problemas Comunes

**Los libros no se cargan:**
- Abre las DevTools (F12) → pestaña Network
- Recarga la página y busca la petición a `books.json`
- Verifica que el status sea 200 OK
- Si es 404, verifica que el archivo esté en `public/books.json`

**Error: "Unexpected token < in JSON":**
- El servidor está devolviendo HTML en lugar de JSON
- Verifica la ruta: debe ser `/books.json` no `./books.json`
- Asegúrate de que el archivo JSON sea válido (sin comas extras)

**useEffect se ejecuta dos veces en desarrollo:**
- Esto es normal en React 18 con Strict Mode
- Solo ocurre en desarrollo, no en producción
- Ayuda a detectar problemas con efectos

**Los libros aparecen y desaparecen:**
- Verifica que el array de dependencias esté vacío: `[]`
- Si pones `[books]`, causará un loop infinito

**"Cannot read property 'map' of undefined":**
- Inicializa el estado: `useState([])` no `useState()`
- Verifica que estés usando el renderizado condicional

## Comparación: Antes vs Después

| Cart-React-05 | Cart-React-06 |
|---------------|---------------|
| Datos hardcodeados | Datos desde JSON |
| 6 libros fijos | 10+ libros (fácil de agregar más) |
| Datos en el código | Datos separados |
| No simula carga | Simula carga asíncrona |

## Conceptos de Asincronía

### Sincrónico vs Asincrónico

**Código Sincrónico (bloqueante):**
```jsx
console.log('1');
console.log('2');
console.log('3');
// Output: 1, 2, 3 (en orden)
```

**Código Asincrónico (no bloqueante):**
```jsx
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');
// Output: 1, 3, 2 (2 se ejecuta después)
```

**Fetch es asincrónico:**
```jsx
console.log('Antes');
fetch('/books.json').then(data => console.log('Datos:', data));
console.log('Después');
// Output: Antes, Después, Datos: [...]
```

## Próximos Pasos

Ahora que tienes una aplicación completa de carrito de compras, puedes:

1. **Agregar persistencia con LocalStorage:**
   ```jsx
   // Guardar
   localStorage.setItem('cart', JSON.stringify(cartItems));
   
   // Cargar
   const saved = localStorage.getItem('cart');
   if (saved) setCartItems(JSON.parse(saved));
   ```

2. **Conectar a una API backend real**

3. **Agregar autenticación de usuarios**

4. **Implementar un sistema de pago**

5. **Agregar filtros y búsqueda avanzada**

## ¿Por Qué useEffect?

Sin `useEffect`, si intentáramos hacer fetch directamente:

```jsx
// ❌ MAL - Causaría un loop infinito
function App() {
  const [books, setBooks] = useState([]);
  
  fetch('/books.json')
    .then(response => response.json())
    .then(data => setBooks(data));  // Actualiza el estado
    // → Componente se re-renderiza
    // → fetch se ejecuta de nuevo
    // → loop infinito ❌
  
  return <div>{/* ... */}</div>;
}

// ✅ BIEN - useEffect con [] se ejecuta solo una vez
function App() {
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    fetch('/books.json')
      .then(response => response.json())
      .then(data => setBooks(data));
  }, []); // Array vacío: solo al montar
  
  return <div>{/* ... */}</div>;
}
```

¡Felicidades! Has completado una aplicación React completa con carga de datos asíncrona. 🎉

Ahora entiendes:
- ✅ Componentes y Props
- ✅ Estado con useState
- ✅ Efectos con useEffect
- ✅ Renderizado de listas con .map()
- ✅ Renderizado condicional
- ✅ Manejo de eventos
- ✅ Fetch API y promesas
- ✅ Arquitectura de aplicaciones React

¡Estás listo para construir tus propias aplicaciones React! 🚀
