# React Básico 05 - Exercises (Soluciones)

Este proyecto contiene las soluciones a los ejercicios 1 y 2 propuestos en **React-Basics-04-events**. Aquí aprenderás a usar más eventos en React y a validar datos de entrada.

## Ejercicios Implementados

### Ejercicio 1: Evento onMouseEnter en el título

**Enunciado del ejercicio:**
"Agrega un evento `onMouseEnter` al título que muestre un mensaje diferente en la consola"

#### ¿Qué es onMouseEnter?

`onMouseEnter` es un evento que se dispara cuando el cursor del mouse **entra** en el área de un elemento. Es diferente a `onClick` porque no necesitas hacer clic, solo pasar el mouse por encima.

**Otros eventos relacionados:**
- `onMouseEnter`: Se dispara al entrar en el elemento
- `onMouseLeave`: Se dispara al salir del elemento
- `onMouseMove`: Se dispara mientras mueves el mouse dentro del elemento

#### Solución Implementada

**Código en App.jsx:**
```jsx
function App() {
  // Función original para el click
  const sayHello = () => {
    console.log("Hello! 😄");
  };

  // Nueva función para el mouseEnter
  const handleMouseEnter = () => {
    console.log("¡El mouse está sobre el título! 🖱️");
  };

  return (
    <h2 onClick={sayHello} onMouseEnter={handleMouseEnter}>
      Saludos!
    </h2>
  );
}
```

#### Explicación Paso a Paso

1. **Creamos una nueva función manejadora:**
   ```jsx
   const handleMouseEnter = () => {
     console.log("¡El mouse está sobre el título! 🖱️");
   };
   ```
   - Esta función se ejecutará cuando el mouse entre en el área del título
   - Muestra un mensaje diferente al del click

2. **Agregamos el evento al título:**
   ```jsx
   <h2 onClick={sayHello} onMouseEnter={handleMouseEnter}>
   ```
   - Un elemento puede tener **múltiples eventos** al mismo tiempo
   - `onClick` se ejecuta cuando haces clic
   - `onMouseEnter` se ejecuta cuando pasas el mouse por encima

3. **¿Cómo probarlo?**
   - Abre la consola del navegador (F12)
   - Pasa el mouse sobre el título "Saludos!" → verás "¡El mouse está sobre el título! 🖱️"
   - Haz clic en el título → verás "Hello! 😄"

#### Concepto Importante: Múltiples Eventos

Un elemento puede tener varios eventos asignados:
```jsx
<div 
  onClick={handleClick}
  onMouseEnter={handleEnter}
  onMouseLeave={handleLeave}
  onDoubleClick={handleDoubleClick}
>
  Elemento con múltiples eventos
</div>
```

---

### Ejercicio 2: Validación del input

**Enunciado del ejercicio:**
"Agrega validación al input: si escribes menos de 3 caracteres, muestra un mensaje en la consola"

#### ¿Por qué validar?

La validación es importante para:
- Asegurar que los usuarios ingresen datos correctos
- Prevenir errores en tu aplicación
- Dar feedback inmediato al usuario

#### Solución Implementada

**Código en App.jsx:**
```jsx
function App() {
  const handleChange = (e) => {
    const value = e.target.value;
    console.log(`Valor actual: ${value}`);
    
    if (value.length < 3) {
      console.log("⚠️ El texto debe tener al menos 3 caracteres");
    } else {
      console.log("✅ Texto válido");
    }
  };

  return (
    <>
      <p>Escribe al menos 3 caracteres en el campo:</p>
      <input type="text" onChange={handleChange} placeholder="Escribe aquí..." />
    </>
  );
}
```

#### Explicación Paso a Paso

1. **Obtenemos el valor del input:**
   ```jsx
   const value = e.target.value;
   ```
   - `e` es el objeto del evento que React pasa automáticamente
   - `e.target` es el elemento input
   - `e.target.value` es el texto que el usuario ha escrito
   - Guardamos el valor en una variable para usarlo después

2. **Mostramos el valor actual:**
   ```jsx
   console.log(`Valor actual: ${value}`);
   ```
   - Usamos template strings (` ` con ${}) para mostrar el valor
   - Esto nos ayuda a ver qué está escribiendo el usuario

3. **Validamos la longitud:**
   ```jsx
   if (value.length < 3) {
     console.log("⚠️ El texto debe tener al menos 3 caracteres");
   } else {
     console.log("✅ Texto válido");
   }
   ```
   - `value.length` nos da el número de caracteres
   - Si tiene menos de 3 caracteres, mostramos un mensaje de advertencia
   - Si tiene 3 o más, mostramos un mensaje de éxito

4. **¿Cómo probarlo?**
   - Abre la consola del navegador (F12)
   - Empieza a escribir en el input
   - Con 1 o 2 caracteres → verás "⚠️ El texto debe tener al menos 3 caracteres"
   - Con 3 o más caracteres → verás "✅ Texto válido"

#### Conceptos Aprendidos

**1. Acceder al valor de un input:**
```jsx
e.target.value
```

**2. Propiedad length:**
```jsx
"hola".length    // 4
"hi".length      // 2
"".length        // 0
```

**3. Condicionales en JavaScript:**
```jsx
if (condicion) {
  // código si es verdadero
} else {
  // código si es falso
}
```

**4. Template strings:**
```jsx
const nombre = "Ana";
console.log(`Hola ${nombre}`);  // "Hola Ana"
```

---

## Estructura del Proyecto

```
src/
├── App.jsx                        # Contiene las soluciones a los ejercicios
├── App.css                        # Estilos del componente principal
├── main.jsx                       # Punto de entrada
├── index.css                      # Estilos globales
└── components/
    ├── ButtonComponent.jsx        # Botón con evento onClick
    ├── ButtonComponent.css        # Estilos del botón
    ├── HeaderComponent.jsx        # Encabezado
    └── HeaderComponent.css        # Estilos del encabezado
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

4. **Importante:** Abre la consola del navegador (F12) para ver los mensajes de los eventos

## Resumen de Eventos Utilizados

| Evento | Elemento | ¿Cuándo se dispara? | Qué hace |
|--------|----------|---------------------|----------|
| `onClick` | h2 | Al hacer clic | Muestra "Hello! 😄" |
| `onMouseEnter` | h2 | Al pasar el mouse encima | Muestra "¡El mouse está sobre el título! 🖱️" |
| `onChange` | input | Al escribir en el input | Valida si tiene 3 o más caracteres |
| `onClick` | button | Al hacer clic en el botón | Muestra "Hello! 😄" |

## Diferencias con React-Basics-04-events

Este proyecto **añade**:
- ✨ Evento `onMouseEnter` en el título
- ✅ Validación del input con condicional if/else
- 📝 Mejor feedback en los mensajes de consola
- 🎨 Placeholder en el input para mejor UX

## Mejoras Propuestas (Ejercicios Adicionales)

1. **Validación visual:** En lugar de mostrar mensajes en la consola, muestra un mensaje debajo del input (necesitarás aprender sobre `useState` primero)

2. **Evento onMouseLeave:** Agrega un mensaje cuando el mouse sale del título

3. **Validación más compleja:** 
   - El texto debe tener al menos 3 caracteres
   - Y no debe contener números
   - Usa expresiones regulares para validar

4. **Contador de caracteres:** Muestra cuántos caracteres ha escrito el usuario

## Próximos Pasos

En el siguiente proyecto aprenderemos sobre **useState** para poder:
- Actualizar la interfaz de usuario cuando cambian los datos
- Crear contadores que se incrementan al hacer clic
- Mostrar mensajes de validación en la pantalla, no solo en la consola
- Crear formularios interactivos

## Conceptos Clave Aprendidos

- Un elemento puede tener múltiples eventos al mismo tiempo
- `onMouseEnter` se dispara al pasar el mouse sobre un elemento
- `e.target.value` nos da el valor actual de un input
- Podemos usar condicionales para validar datos
- Template strings (` `) facilitan la concatenación de texto y variables
