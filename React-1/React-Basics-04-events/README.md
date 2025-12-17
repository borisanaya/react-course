# React Básico 04 - Eventos

Este proyecto es una introducción a los **eventos en React**. Aprenderás qué son los eventos, cómo funcionan y cómo manejarlos en tus componentes.

## ¿Qué son los Eventos en React?

Los **eventos** son acciones que ocurren en tu aplicación, como:
- Un clic en un botón
- Escribir en un campo de texto
- Mover el mouse sobre un elemento
- Enviar un formulario

En React, los eventos funcionan de manera similar a los eventos HTML, pero con algunas diferencias importantes:

### Diferencias entre HTML y React:

**HTML tradicional:**
```html
<button onclick="miFuncion()">Haz clic</button>
```

**React:**
```jsx
<button onClick={miFuncion}>Haz clic</button>
```

**Diferencias clave:**
1. En React usamos **camelCase**: `onClick` en lugar de `onclick`
2. Pasamos la función directamente (sin paréntesis ni comillas): `{miFuncion}` en lugar de `"miFuncion()"`
3. Los eventos en React son sintéticos (SyntheticEvent), lo que asegura compatibilidad entre navegadores

## Eventos Implementados en este Proyecto

### 1. Evento onClick en el título (App.jsx)

**Código:**
```jsx
function App() {
  const sayHello = () => {
    console.log("Hello! 😄");
  };

  return (
    <h2 onClick={sayHello}>Saludos!</h2>
  );
}
```

**Explicación paso a paso:**

1. **Creamos la función manejadora:**
   ```jsx
   const sayHello = () => {
     console.log("Hello! 😄");
   };
   ```
   - `sayHello` es una función de flecha (arrow function)
   - Cuando se ejecute, mostrará un mensaje en la consola del navegador

2. **Asignamos el evento:**
   ```jsx
   <h2 onClick={sayHello}>Saludos!</h2>
   ```
   - Usamos el atributo `onClick` en el elemento `<h2>`
   - Le pasamos la función `sayHello` entre llaves `{}`
   - **Importante:** NO ponemos paréntesis `sayHello()`, porque eso ejecutaría la función inmediatamente

3. **¿Qué sucede?**
   - Cuando haces clic en el texto "Saludos!", se ejecuta la función `sayHello`
   - Abre la consola del navegador (F12) para ver el mensaje

### 2. Evento onClick en ButtonComponent

**Código:**
```jsx
function ButtonComponent() {
  const handleClick = () => {
    console.log("Hello! 😄");
  };

  return <button className="btn" onClick={handleClick}>Soy un botón</button>;
}
```

**Explicación paso a paso:**

1. **Creamos la función manejadora dentro del componente:**
   ```jsx
   const handleClick = () => {
     console.log("Hello! 😄");
   };
   ```
   - Similar a `sayHello`, pero está definida dentro del componente
   - Usamos el nombre `handleClick` (convención común para manejadores de eventos)

2. **Asignamos el evento al botón:**
   ```jsx
   <button className="btn" onClick={handleClick}>Soy un botón</button>
   ```
   - El botón tiene tanto una clase CSS (`className="btn"`) como un evento (`onClick`)
   - Cuando se hace clic, ejecuta `handleClick`

3. **¿Por qué dentro del componente?**
   - Cada componente debe ser independiente
   - El componente define su propio comportamiento
   - Así el componente es reutilizable con su funcionalidad incluida

### 3. Evento onChange en input (App.jsx)

**Código:**
```jsx
function App() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <input type="text" onChange={handleChange} />
  );
}
```

**Explicación paso a paso:**

1. **La función recibe un parámetro `e` (evento):**
   ```jsx
   const handleChange = (e) => {
     console.log(e.target.value);
   };
   ```
   - `e` es el objeto del evento que React pasa automáticamente
   - `e.target` es el elemento que disparó el evento (en este caso, el input)
   - `e.target.value` es el valor actual del input

2. **El evento onChange se dispara cada vez que cambias el texto:**
   ```jsx
   <input type="text" onChange={handleChange} />
   ```
   - Cada letra que escribes dispara el evento
   - Puedes ver en la consola el valor actual del input

## Eventos Comunes en React

| Evento | Cuándo se dispara | Ejemplo de uso |
|--------|-------------------|----------------|
| `onClick` | Al hacer clic | Botones, enlaces, cualquier elemento |
| `onChange` | Al cambiar el valor | Inputs, textareas, selects |
| `onSubmit` | Al enviar un formulario | Formularios |
| `onMouseEnter` | Al pasar el mouse encima | Tooltips, menús |
| `onMouseLeave` | Al salir el mouse | Tooltips, menús |
| `onFocus` | Al enfocar un elemento | Validación de campos |
| `onBlur` | Al desenfocar un elemento | Validación de campos |

## Buenas Prácticas

### 1. Nomenclatura de funciones manejadoras
```jsx
// ✅ Bueno - nombre descriptivo
const handleClick = () => { ... }
const handleSubmit = () => { ... }
const handleChange = () => { ... }

// ❌ Evitar - nombres poco claros
const func = () => { ... }
const doIt = () => { ... }
```

### 2. No ejecutar la función inmediatamente
```jsx
// ✅ Correcto - pasa la referencia
<button onClick={handleClick}>Clic</button>

// ❌ Incorrecto - ejecuta inmediatamente
<button onClick={handleClick()}>Clic</button>
```

### 3. Si necesitas pasar argumentos
```jsx
// ✅ Correcto - usa una arrow function
<button onClick={() => handleClick(id)}>Clic</button>

// O define una nueva función
const handleButtonClick = () => handleClick(id);
<button onClick={handleButtonClick}>Clic</button>
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

4. Abre la consola del navegador (F12) para ver los mensajes de los eventos

## Estructura del Proyecto

```
src/
├── App.jsx                        # Componente principal con eventos
├── App.css                        # Estilos del componente principal
├── main.jsx                       # Punto de entrada
├── index.css                      # Estilos globales
└── components/
    ├── ButtonComponent.jsx        # Botón con evento onClick
    ├── ButtonComponent.css        # Estilos del botón
    ├── HeaderComponent.jsx        # Encabezado
    └── HeaderComponent.css        # Estilos del encabezado
```

## Ejercicios Propuestos

1. Agrega un evento `onMouseEnter` al título que muestre un mensaje diferente en la consola
2. Agrega validación al input: si escribes menos de 3 caracteres, muestra un mensaje en la consola

## Próximos Pasos

En el siguiente proyecto aprenderemos sobre **useState** para manejar el estado de los componentes y hacer que los eventos modifiquen la interfaz de usuario, no solo la consola.
