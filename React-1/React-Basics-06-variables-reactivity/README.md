# React Básico 05 - Variables y Reactividad

Este proyecto es una introducción a la **reactividad en React** y explica por qué las variables normales no funcionan para actualizar la interfaz de usuario, y por qué necesitamos **useState**.

## Cambios respecto a React-Basics-04-events

Este proyecto parte de React-Basics-04-events y modifica el App.jsx para demostrar conceptos importantes sobre reactividad y estado en React.

### Comparación de App.jsx

#### React-Basics-04-events (Proyecto Anterior)

**Código:**
```jsx
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import HeaderComponent from "./components/HeaderComponent";

function App() {
  const sayHello = () => {
    console.log("Hello! 😄");
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <HeaderComponent></HeaderComponent>

      <main className="main-content">
        <h2 onClick={sayHello}>Saludos!</h2>
        <input type="text" onChange={handleChange} />

        <br />
        <br />
        <ButtonComponent></ButtonComponent>
      </main>
    </>
  );
}
```

**Características:**
- Solo maneja eventos que muestran información en la consola
- No modifica la interfaz de usuario
- No usa useState
- El input no está controlado (React no controla su valor)

#### React-Basics-05-variables-reactiviy (Proyecto Actual)

**Código:**
```jsx
import { useState } from "react";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";

function App() {
  // let number = 0;
  const [number, setNumber] = useState(0);
  const myPlaceholder = "Escribe aquí";
  const [myValue, setMyValue] = useState("");

  const addOne = () => {
    // number++;
    setNumber(number + 1);
    console.log(number);
  };

  return (
    <>
      <HeaderComponent></HeaderComponent>

      <main className="main-content">
        <h2>Saludos!</h2>

        <h3>{myValue}</h3> {/* myValue no cambia cuando cambia el input */}
        <input type="text" placeholder={myPlaceholder} value={myValue} />
        
        <h2 onClick={addOne}>Number: {number}</h2>
      </main>
    </>
  );
}
```

**Características:**
- Importa y usa `useState` de React
- Demuestra el concepto de reactividad
- Muestra por qué las variables normales no funcionan
- Implementa un contador que actualiza la interfaz
- Tiene código comentado para mostrar el antes/después

---

## Cambios Detallados

### 1. Importación de useState

**Antes:**
```jsx
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import HeaderComponent from "./components/HeaderComponent";
```

**Después:**
```jsx
import { useState } from "react";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
```

**¿Qué cambió?**
- Se agregó la importación de `useState` desde React
- Se eliminó la importación de `ButtonComponent` (no se usa en este ejemplo)

**¿Por qué?**
- `useState` es necesario para crear variables reactivas (estado)
- El proyecto se enfoca en demostrar el concepto de estado, no en los botones

### 2. Eliminación de Eventos de Consola

**Antes:**
```jsx
const sayHello = () => {
  console.log("Hello! 😄");
};

const handleChange = (e) => {
  console.log(e.target.value);
};
```

**Después:**
```jsx
// Estas funciones fueron eliminadas
```

**¿Por qué?**
- El proyecto anterior se enfocaba en eventos que solo mostraban mensajes en consola
- Este proyecto se enfoca en cambios visibles en la interfaz de usuario
- Las funciones fueron reemplazadas por `addOne` que actualiza el estado

### 3. Introducción de Estado con useState

**Nuevo código:**
```jsx
// let number = 0;  // ← Comentado para mostrar que esto NO funciona
const [number, setNumber] = useState(0);
```

**Explicación:**
- La línea comentada `let number = 0;` muestra el enfoque incorrecto
- `const [number, setNumber] = useState(0);` es la forma correcta usando estado
- `number`: variable que contiene el valor actual (comienza en 0)
- `setNumber`: función para actualizar el valor
- `useState(0)`: inicializa el estado en 0

**¿Por qué no funciona `let number = 0;`?**
```jsx
// ❌ Esto NO funciona en React:
let number = 0;
const addOne = () => {
  number++;  // Cambia la variable pero React no lo detecta
  console.log(number);  // La consola muestra el cambio
  // Pero la interfaz NO se actualiza
};
```

React no detecta cambios en variables normales. Solo detecta cambios en el **estado** creado con `useState`.

### 4. Variables Constantes (No Reactivas)

**Nuevo código:**
```jsx
const myPlaceholder = "Escribe aquí";
const [myValue, setMyValue] = useState("");
```

**Explicación:**
- `myPlaceholder`: constante normal que no cambia (no necesita useState)
- `myValue`: estado que SÍ puede cambiar (usa useState)

**Regla general:**
- Si el valor **nunca cambia** → usa `const` normal
- Si el valor **puede cambiar y debe actualizar la UI** → usa `useState`

### 5. Nueva Función de Evento: addOne

**Antes:**
```jsx
const sayHello = () => {
  console.log("Hello! 😄");
};
```

**Después:**
```jsx
const addOne = () => {
  // number++;  // ← Comentado: esto NO actualiza la UI
  setNumber(number + 1);  // ✅ Correcto: actualiza el estado
  console.log(number);
};
```

**¿Qué hace?**
- Incrementa el contador `number` en 1
- Usa `setNumber` (la función que devuelve useState)
- Al cambiar el estado, React re-renderiza el componente
- La UI muestra el nuevo número automáticamente

**Diferencia clave:**
- `number++` cambia la variable pero React no lo detecta → UI no cambia
- `setNumber(number + 1)` actualiza el estado → React detecta el cambio → UI se actualiza

### 6. Cambios en la Interfaz (JSX)

**Antes:**
```jsx
<main className="main-content">
  <h2 onClick={sayHello}>Saludos!</h2>
  <input type="text" onChange={handleChange} />
  
  <br />
  <br />
  <ButtonComponent></ButtonComponent>
</main>
```

**Después:**
```jsx
<main className="main-content">
  <h2>Saludos!</h2>

  <h3>{myValue}</h3>
  <input type="text" placeholder={myPlaceholder} value={myValue} />
  
  <h2 onClick={addOne}>Number: {number}</h2>
</main>
```

**Cambios detallados:**

1. **Título sin evento:**
   ```jsx
   <h2>Saludos!</h2>
   ```
   - Ya no tiene `onClick={sayHello}`
   - Es solo un título estático

2. **Nuevo h3 que muestra el estado:**
   ```jsx
   <h3>{myValue}</h3>
   ```
   - Muestra el valor actual del estado `myValue`
   - Se actualiza automáticamente cuando cambia el estado

3. **Input con placeholder y value:**
   ```jsx
   <input type="text" placeholder={myPlaceholder} value={myValue} />
   ```
   - **Antes:** `onChange={handleChange}` (solo mostraba en consola)
   - **Después:** `value={myValue}` (input controlado por React)
   - `placeholder={myPlaceholder}`: texto de ayuda en el input
   - **NOTA:** Este input tiene un problema: `value` sin `onChange` lo hace solo lectura

4. **Nuevo contador interactivo:**
   ```jsx
   <h2 onClick={addOne}>Number: {number}</h2>
   ```
   - Muestra el valor actual del estado `number`
   - Al hacer clic, ejecuta `addOne` que incrementa el contador
   - La UI se actualiza automáticamente

5. **Eliminación de ButtonComponent:**
   - Se quitó el componente `ButtonComponent`
   - El ejemplo se simplificó para enfocarse en el concepto de estado

---

## Conceptos Clave Demostrados

### 1. Variables Normales vs Estado

| Aspecto | Variable Normal (`let`) | Estado (`useState`) |
|---------|------------------------|---------------------|
| **Sintaxis** | `let number = 0;` | `const [number, setNumber] = useState(0);` |
| **Cambiar valor** | `number++` | `setNumber(number + 1)` |
| **React detecta cambios** | ❌ No | ✅ Sí |
| **UI se actualiza** | ❌ No | ✅ Sí |
| **Usar en consola** | ✅ Funciona | ✅ Funciona |

### 2. Reactividad en React

**Reactividad** significa que cuando los datos cambian, la interfaz se actualiza automáticamente.

```jsx
const [number, setNumber] = useState(0);

// Al hacer clic:
setNumber(number + 1);  // 1. Actualiza el estado
                        // 2. React detecta el cambio
                        // 3. React re-renderiza el componente
                        // 4. La UI muestra el nuevo valor
```

### 3. Input Controlado (con problema)

```jsx
<input type="text" placeholder={myPlaceholder} value={myValue} />
```

Este input tiene `value={myValue}` pero **no tiene `onChange`**, por lo que:
- React controla el valor del input
- El usuario NO puede escribir en él (es solo lectura)
- Para hacerlo funcional necesitarías agregar:

```jsx
const handleInputChange = (e) => {
  setMyValue(e.target.value);
};

<input 
  type="text" 
  placeholder={myPlaceholder} 
  value={myValue} 
  onChange={handleInputChange}  // ← Esto falta
/>
```

---

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

4. Experimenta:
   - Haz clic en "Number: 0" varias veces
   - Observa cómo el número se incrementa en la pantalla
   - Abre la consola (F12) y compara el valor en consola vs la UI

## Estructura del Proyecto

```
src/
├── App.jsx                        # Componente con ejemplos de estado
├── App.css                        # Estilos del componente principal
├── main.jsx                       # Punto de entrada
├── index.css                      # Estilos globales
└── components/
    ├── HeaderComponent.jsx        # Encabezado
    └── HeaderComponent.css        # Estilos del encabezado
```

## Experimentos Sugeridos

1. **Descomenta la variable normal:**
   - Descomenta `let number = 0;`
   - Comenta la línea `const [number, setNumber] = useState(0);`
   - Descomenta `number++;` y comenta `setNumber(number + 1);`
   - Observa que la consola muestra el cambio pero la UI no

2. **Arregla el input:**
   - Agrega una función `handleInputChange`
   - Conecta el `onChange` al input
   - Ahora deberías poder escribir y ver el texto en el `<h3>`

3. **Agrega más contadores:**
   - Crea otro estado para un segundo contador
   - Agrega otro `<h2>` que lo muestre
   - Observa que cada estado es independiente


## Resumen de Cambios

✅ **Agregado:** Importación de `useState`  
✅ **Agregado:** Estado `number` con `useState(0)`  
✅ **Agregado:** Estado `myValue` con `useState("")`  
✅ **Agregado:** Función `addOne` que actualiza el estado  
✅ **Modificado:** Interfaz para mostrar valores de estado  
✅ **Modificado:** Input con `value` controlado por estado  
✅ **Eliminado:** Funciones `sayHello` y `handleChange` que solo usaban consola  
✅ **Eliminado:** `ButtonComponent` para simplificar el ejemplo  

## Lección Principal

**Las variables normales NO son reactivas en React.** Si quieres que los cambios en los datos se reflejen en la interfaz de usuario, debes usar `useState` para crear estado reactivo.

## Ejercicio
1. Crea un botón que cuente cuántas veces se ha hecho clic.
2. La validación del input, en vez mostrar un mensaje por consola, que muestre un mensaje en la página