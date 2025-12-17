# Tic-Tac-Toe 03 - Interactividad con useState

## Objetivo

Agregar **interactividad** al juego permitiendo que las casillas cambien su contenido cuando el usuario hace clic en ellas. Aprenderemos a usar el hook `useState` para manejar el estado local de un componente.

## ¿Qué aprenderás?

- Qué es el estado (state) en React
- Cómo usar el hook `useState`
- Qué es la inmutabilidad
- Manejo de eventos (onClick)
- Por qué React re-renderiza cuando cambia el estado

## Requisitos Previos

- Haber completado Tic-Tac-Toe-02
- Entender qué son las props
- Conocer la sintaxis básica de funciones flecha

## Configuración Inicial

1. **Asegúrate de tener Node.js instalado** (versión 16 o superior)
2. **Instala las dependencias del proyecto:**
   ```bash
   npm install
   ```

## Partiendo del Proyecto Anterior

Este proyecto parte de Tic-Tac-Toe-02. Si estás construyéndolo desde cero:
1. Copia la carpeta del proyecto anterior
2. Renombra a `tic-tac-toe-03`
3. Sigue las modificaciones indicadas abajo

## Modificaciones a Realizar

### Paso 1: Agregar useState a Square.jsx

**Antes (Tic-Tac-Toe-02):**
```jsx
function Square({ value }) {
    return <button className="square">{value}</button>;
}
```

**Después (Tic-Tac-Toe-03):**

**Archivo:** `src/components/Square.jsx`

```jsx
// Importamos useState desde React
// useState es un hook que permite agregar estado a componentes funcionales
import { useState } from "react";

// Componente Square: representa una casilla individual del tablero
// Ya NO recibe props porque ahora maneja su propio estado interno
function Square() {
    // useState crea una variable de estado llamada "value"
    // - value: el valor actual del estado (inicialmente null)
    // - setValue: función para actualizar el valor
    // - useState(null): valor inicial del estado
    const [value, setValue] = useState(null);

    // Función que se ejecuta cuando el usuario hace clic en la casilla
    function handleClick() {
        // setValue actualiza el estado y hace que React re-renderice el componente
        // Cuando el estado cambia, React vuelve a ejecutar la función Square
        // y el componente se actualiza con el nuevo valor
        setValue('X');
    }

    // Retorna el botón con el manejador de eventos onClick
    // onClick={handleClick}: cuando se hace clic, ejecuta handleClick
    // {value}: muestra el valor actual del estado (null o 'X')
    return (
        <button className="square" onClick={handleClick}>
            {value}
        </button>
    );
}

// Exportamos el componente Square para poder usarlo en otros archivos
export default Square;
```

**Explicación detallada:**

1. **Importación de useState:**
   ```jsx
   import { useState } from "react";
   ```
   - Importamos el hook `useState` desde la biblioteca de React
   - Los hooks son funciones especiales que permiten "enganchar" características de React

2. **Declaración del estado:**
   ```jsx
   const [value, setValue] = useState(null);
   ```
   - `useState(null)` crea un estado con valor inicial `null`
   - Retorna un array con dos elementos (desestructuración):
     - `value`: la variable que contiene el valor actual
     - `setValue`: función para actualizar el valor
   - Es como declarar: "Esta casilla tiene un valor que puede cambiar"

3. **Función handleClick:**
   ```jsx
   function handleClick() {
       setValue('X');
   }
   ```
   - Define qué hacer cuando se hace clic
   - `setValue('X')` actualiza el estado a 'X'
   - Cuando el estado cambia, React automáticamente re-renderiza el componente

4. **Conectar el evento:**
   ```jsx
   <button className="square" onClick={handleClick}>
   ```
   - `onClick={handleClick}`: conecta el clic con la función
   - **Importante:** Se pasa `handleClick`, NO `handleClick()`
   - Si escribieras `onClick={handleClick()}`, la función se ejecutaría inmediatamente

### Paso 2: Actualizar Board.jsx

**Archivo:** `src/components/Board.jsx`

```jsx
// Importamos el componente Square (casilla individual del tablero)
import Square from "./Square";

// Componente Board: representa el tablero completo del juego Tic-Tac-Toe
function Board() {
  return (
    <>
      {/* Primera fila del tablero */}
      <div className="board-row">
        {/* Ahora Square NO recibe props porque maneja su propio estado */}
        <Square />
        <Square />
        <Square />
      </div>
      
      {/* Segunda fila del tablero */}
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      
      {/* Tercera fila del tablero */}
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

// Exportamos el componente Board
export default Board;
```

**Cambio importante:**
- Ya NO pasamos `value="1"` a Square
- Cada Square ahora maneja su propio estado independientemente

## Resultado Esperado

Al ejecutar el proyecto:
1. Verás un tablero de 3x3 casillas vacías
2. Al hacer clic en cualquier casilla, aparecerá una "X"
3. Cada casilla "recuerda" si ya fue clickeada
4. Puedes hacer clic en todas las casillas

## Conceptos Clave

### ¿Qué es el Estado (State)?

El **estado** es información que un componente "recuerda" entre renderizados:
- Es **local** al componente (cada Square tiene su propio estado)
- Es **mutable** (puede cambiar con el tiempo)
- Cuando cambia, React re-renderiza el componente automáticamente

### ¿Cómo funciona useState?

```jsx
const [valor, setValor] = useState(valorInicial);
```

- **Primer render:** `valor` = `valorInicial`
- **Llamar a setValor:** Actualiza `valor` y re-renderiza
- **Siguiente render:** `valor` tiene el nuevo valor

### Flujo de Interactividad

```
1. Usuario hace clic en casilla
         ↓
2. onClick ejecuta handleClick
         ↓
3. handleClick llama a setValue('X')
         ↓
4. React detecta que el estado cambió
         ↓
5. React re-renderiza Square con value='X'
         ↓
6. La casilla muestra "X"
```

### Reglas Importantes de useState

1. **Solo se puede usar en componentes funcionales**
2. **Debe llamarse en el nivel superior** (no dentro de loops o condicionales)
3. **El estado es inmutable:** no modifiques directamente, usa la función set
4. **Cada componente tiene su propio estado independiente**

## Problema Actual

Aunque las casillas son interactivas, hay un problema:
- **Todas las casillas siempre muestran "X"**
- No hay forma de alternar entre "X" y "O"
- El estado está distribuido en cada casilla individual

En el siguiente proyecto (Tic-Tac-Toe-04) resolveremos esto **centralizando el estado** en el componente Board.

## Ejercicio Adicional

Experimenta con el código:
1. Cambia `setValue('X')` por `setValue('O')` 
2. Intenta hacer que la casilla muestre el número de clics
3. Agrega un `console.log(value)` en handleClick para ver cómo cambia el estado

## Comandos Útiles

```bash
npm run dev      # Iniciar servidor de desarrollo
npm run build    # Construir para producción
npm run preview  # Previsualizar versión de producción
```


