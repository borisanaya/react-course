# React Básico 07 - Exercises (Soluciones)

Este proyecto contiene las soluciones a los ejercicios propuestos en **React-Basics-06-variables-reactivity**. Aquí se implementan dos funcionalidades clave usando `useState`: un contador de clics y una validación visual de input.

## Ejercicios Propuestos en React-Basics-06-variables-reactivity

Los ejercicios del proyecto anterior eran:

1. **Crea un botón que cuente cuántas veces se ha hecho clic**
2. **La validación del input, en vez mostrar un mensaje por consola, que muestre un mensaje en la página**

## Soluciones Implementadas

### Ejercicio 1: Contador de Clics en ButtonComponent

**Archivo:** `src/components/ButtonComponent.jsx`

**Código Implementado:**
```jsx
import { useState } from "react";
import "./ButtonComponent.css";

function ButtonComponent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button className="btn" onClick={handleClick}>
        Haz clic aquí
      </button>
      <div className="counter-display">
        Has hecho clic {count} {count === 1 ? 'vez' : 'veces'}
      </div>
    </div>
  );
}

export default ButtonComponent;
```

#### Explicación de la Solución

**1. Importar useState:**
```jsx
import { useState } from "react";
```
- Necesario para crear el estado del contador

**2. Crear el estado del contador:**
```jsx
const [count, setCount] = useState(0);
```
- `count`: variable que guarda el número de clics (empieza en 0)
- `setCount`: función para actualizar el contador
- `useState(0)`: inicializa el contador en 0

**3. Función para incrementar el contador:**
```jsx
const handleClick = () => {
  setCount(count + 1);
};
```
- Cada vez que se hace clic, incrementa `count` en 1
- Usa `setCount` para actualizar el estado
- React detecta el cambio y re-renderiza el componente

**4. Mostrar el contador en la interfaz:**
```jsx
<div className="counter-display">
  Has hecho clic {count} {count === 1 ? 'vez' : 'veces'}
</div>
```
- Muestra el valor actual de `count`
- Usa operador ternario para mostrar "vez" (singular) o "veces" (plural)
- Se actualiza automáticamente cada vez que cambia el estado

**Conceptos Aplicados:**
- ✅ Estado con `useState`
- ✅ Evento `onClick`
- ✅ Actualización de estado con `setCount`
- ✅ Renderizado dinámico del valor
- ✅ Operador ternario para lógica condicional

---

### Ejercicio 2: Validación Visual del Input

**Archivo:** `src/App.jsx`

**Código Implementado:**
```jsx
import { useState } from "react";

function App() {
  // Estados para la validación del input
  const [inputValue, setInputValue] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const [isValid, setIsValid] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    
    if (value.length === 0) {
      setValidationMessage("");
      setIsValid(null);
    } else if (value.length < 3) {
      setValidationMessage("⚠️ El texto debe tener al menos 3 caracteres");
      setIsValid(false);
    } else {
      setValidationMessage("✅ Texto válido");
      setIsValid(true);
    }
  };

  return (
    <div className="input-container">
      <p>Escribe al menos 3 caracteres en el campo:</p>
      <input 
        type="text" 
        value={inputValue}
        onChange={handleChange} 
        placeholder="Escribe aquí..." 
      />
      
      {validationMessage && (
        <div className={`validation-message ${isValid ? 'success' : 'error'}`}>
          {validationMessage}
        </div>
      )}
    </div>
  );
}
```

#### Explicación de la Solución

**1. Tres estados para gestionar la validación:**
```jsx
const [inputValue, setInputValue] = useState("");
const [validationMessage, setValidationMessage] = useState("");
const [isValid, setIsValid] = useState(null);
```
- `inputValue`: almacena el texto que escribe el usuario
- `validationMessage`: el mensaje que se mostrará ("⚠️ ..." o "✅ ...")
- `isValid`: booleano que indica si la validación pasó (null, true o false)

**¿Por qué tres estados?**
- Necesitamos guardar el valor del input (para el componente controlado)
- Necesitamos el mensaje para mostrarlo
- Necesitamos saber si es válido o no (para aplicar estilos diferentes)

**2. Función manejadora del cambio:**
```jsx
const handleChange = (e) => {
  const value = e.target.value;
  setInputValue(value);
  
  if (value.length === 0) {
    setValidationMessage("");
    setIsValid(null);
  } else if (value.length < 3) {
    setValidationMessage("⚠️ El texto debe tener al menos 3 caracteres");
    setIsValid(false);
  } else {
    setValidationMessage("✅ Texto válido");
    setIsValid(true);
  }
};
```

**Lógica de validación paso a paso:**

a) **Obtener el valor del input:**
```jsx
const value = e.target.value;
```
- `e.target.value` contiene el texto actual del input

b) **Actualizar el estado del input:**
```jsx
setInputValue(value);
```
- Guarda el valor en el estado para que el input sea controlado

c) **Validar según la longitud:**
- **Si está vacío:** No muestra mensaje (limpia todo)
- **Si tiene menos de 3 caracteres:** Muestra mensaje de error
- **Si tiene 3 o más caracteres:** Muestra mensaje de éxito

**3. Input controlado:**
```jsx
<input 
  type="text" 
  value={inputValue}
  onChange={handleChange} 
  placeholder="Escribe aquí..." 
/>
```
- `value={inputValue}`: React controla el valor del input
- `onChange={handleChange}`: Cada tecla que presionas ejecuta la validación
- El valor del input siempre viene del estado

**4. Renderizado condicional del mensaje:**
```jsx
{validationMessage && (
  <div className={`validation-message ${isValid ? 'success' : 'error'}`}>
    {validationMessage}
  </div>
)}
```

**¿Cómo funciona?**
- `validationMessage &&`: Solo renderiza si hay un mensaje (no está vacío)
- `${isValid ? 'success' : 'error'}`: Aplica clase CSS según la validación
  - Si `isValid === true` → clase "success" (verde)
  - Si `isValid === false` → clase "error" (rojo)

**5. Estilos CSS (App.css):**
```css
.validation-message.error {
  background-color: #ffebee;
  color: #c62828;
}

.validation-message.success {
  background-color: #e8f5e9;
  color: #2e7d32;
}
```
- Mensaje de error: fondo rojo claro, texto rojo oscuro
- Mensaje de éxito: fondo verde claro, texto verde oscuro

**Conceptos Aplicados:**
- ✅ Múltiples estados trabajando juntos
- ✅ Componente controlado (input con `value` y `onChange`)
- ✅ Validación en tiempo real
- ✅ Renderizado condicional (`&&`)
- ✅ Clases CSS dinámicas
- ✅ Lógica condicional (if/else if/else)

---

## Funcionalidad Adicional: Título Dinámico

Además de las soluciones a los ejercicios, este proyecto incluye una demostración adicional de `useState`:

**Código:**
```jsx
const [titleText, setTitleText] = useState("Saludos!");

const handleTitleClick = () => {
  setTitleText("¡Hiciste clic! 😄");
};

const handleMouseEnter = () => {
  setTitleText("¡El mouse está aquí! 🖱️");
};

const handleMouseLeave = () => {
  setTitleText("Saludos!");
};

return (
  <h2 
    onClick={handleTitleClick}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    {titleText}
  </h2>
);
```

**¿Qué hace?**
- El título cambia según la interacción del usuario
- Múltiples eventos (`onClick`, `onMouseEnter`, `onMouseLeave`) actualizan el mismo estado
- Demuestra cómo un estado puede ser modificado por diferentes eventos

---

## Comparación: Proyecto Anterior vs Soluciones

### Proyecto Anterior (React-Basics-06-variables-reactivity)

**Input con problema:**
```jsx
<input type="text" placeholder={myPlaceholder} value={myValue} />
```
- No tenía `onChange`
- El usuario NO podía escribir (solo lectura)
- No mostraba validación visual

**Sin contador de clics:**
- No había un componente ButtonComponent funcional

### Proyecto Actual (React-Basics-07-exercises)

**Input funcional con validación:**
```jsx
<input 
  type="text" 
  value={inputValue}
  onChange={handleChange}  // ✅ Ahora SÍ tiene onChange
  placeholder="Escribe aquí..." 
/>
{validationMessage && (
  <div className={...}>{validationMessage}</div>  // ✅ Muestra mensaje en pantalla
)}
```

**Contador implementado:**
```jsx
<ButtonComponent />  // ✅ Componente funcional con contador
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

4. Prueba las funcionalidades:
   - Escribe en el input y observa los mensajes de validación
   - Haz clic en el botón naranja y ve cómo aumenta el contador
   - Interactúa con el título (clic y hover)

---

## Estructura del Proyecto

```
src/
├── App.jsx                        # Validación de input y título dinámico
├── App.css                        # Estilos de validación e input
├── main.jsx                       # Punto de entrada
├── index.css                      # Estilos globales
└── components/
    ├── ButtonComponent.jsx        # Contador de clics (Ejercicio 1)
    ├── ButtonComponent.css        # Estilos del botón y contador
    ├── HeaderComponent.jsx        # Encabezado
    └── HeaderComponent.css        # Estilos del encabezado
```

---

## Conceptos Clave Aprendidos

### 1. Múltiples Estados en un Componente
```jsx
const [state1, setState1] = useState(initialValue1);
const [state2, setState2] = useState(initialValue2);
const [state3, setState3] = useState(initialValue3);
```
Un componente puede tener tantos estados como necesite, cada uno independiente.

### 2. Componente Controlado
```jsx
<input value={inputValue} onChange={handleChange} />
```
React controla completamente el valor del input a través del estado.

### 3. Renderizado Condicional
```jsx
{condition && <Component />}
```
Solo renderiza el componente si la condición es verdadera.

### 4. Clases CSS Dinámicas
```jsx
className={`base-class ${condition ? 'class-true' : 'class-false'}`}
```
Aplica diferentes clases según el estado.

### 5. Validación en Tiempo Real
La validación ocurre mientras el usuario escribe, proporcionando feedback inmediato.

---

## Mejoras Implementadas Respecto al Proyecto Base

| Aspecto | React-Basics-06 | React-Basics-07 |
|---------|----------------|-----------------|
| **Input** | Solo lectura | Completamente funcional |
| **Validación** | Sin validación | Validación visual en tiempo real |
| **Contador** | No existe | Implementado con useState |
| **Feedback visual** | No hay | Mensajes con colores (rojo/verde) |
| **Componente controlado** | Incompleto | Correctamente implementado |

---

## Ejercicios Adicionales Propuestos

1. **Botón de Reset:** Agrega un botón que reinicie el contador a 0

2. **Validación más compleja:** Agrega más reglas:
   - Máximo 20 caracteres
   - No permitir números
   - Primera letra mayúscula

3. **Contador de caracteres:** Muestra "X/20 caracteres" debajo del input

4. **Doble contador:** Crea dos botones que incrementen contadores independientes

5. **Deshabilitar botón:** Que el botón solo funcione si el input es válido

---

## Resumen de Soluciones

✅ **Ejercicio 1:** Contador de clics implementado en ButtonComponent  
✅ **Ejercicio 2:** Validación visual del input con mensajes en pantalla  
✅ **Extra:** Título dinámico con múltiples eventos  
✅ **Extra:** Estilos CSS para feedback visual (rojo/verde)  
✅ **Extra:** Input completamente controlado por React  

## Lección Principal

**Con `useState` podemos crear interfaces verdaderamente interactivas.** Los cambios en el estado se reflejan automáticamente en la UI, permitiendo validaciones en tiempo real, contadores, formularios dinámicos y mucho más.
