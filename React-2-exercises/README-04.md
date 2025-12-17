# Tic-Tac-Toe 04 - Compartir Estado (Lifting State Up)

## Objetivo

Aprender el concepto fundamental de **"levantar el estado"** (lifting state up). Moveremos el estado de las casillas individuales al componente padre (Board) para que pueda coordinar el juego y detectar ganadores en el futuro.

## ¿Qué aprenderás?

- Qué significa "levantar el estado" (lifting state up)
- Por qué es necesario compartir estado entre componentes
- Cómo pasar funciones como props
- Inmutabilidad con arrays
- El patrón padre controlador / hijo controlado

## Requisitos Previos

- Haber completado Tic-Tac-Toe-03
- Entender useState básico
- Conocer props y eventos

## Configuración Inicial

1. **Asegúrate de tener Node.js instalado** (versión 16 o superior)
2. **Instala las dependencias del proyecto:**
   ```bash
   npm install
   ```

## Partiendo del Proyecto Anterior

Este proyecto parte de Tic-Tac-Toe-03. Si estás construyéndolo desde cero:
1. Copia la carpeta del proyecto anterior
2. Renombra a `tic-tac-toe-04`
3. Sigue las modificaciones indicadas abajo

## El Problema a Resolver

En Tic-Tac-Toe-03:
- Cada casilla tiene su propio estado independiente
- No hay forma de saber qué hay en otras casillas
- Imposible detectar un ganador
- Imposible alternar entre "X" y "O"

**Solución:** Mover TODO el estado al componente Board

## Modificaciones a Realizar

### Paso 1: Simplificar Square.jsx (Quitar Estado)

**Antes (Tic-Tac-Toe-03):**
```jsx
import { useState } from "react";

function Square() {
    const [value, setValue] = useState(null);
    
    function handleClick() {
        setValue('X');
    }

    return (
        <button className="square" onClick={handleClick}>
            {value}
        </button>
    );
}
```

**Después (Tic-Tac-Toe-04):**

**Archivo:** `src/components/Square.jsx`

```jsx
// Componente Square: representa una casilla individual del tablero
// Ahora Square es un componente "controlado" - recibe todo por props
// NO tiene estado propio, es completamente controlado por su padre (Board)
function Square({ value, onSquareClick }) {
    // Props:
    // - value: el contenido de la casilla ('X', 'O', o null)
    // - onSquareClick: función a ejecutar cuando se hace clic

    // Retorna un botón simple que:
    // 1. Muestra el valor recibido por props
    // 2. Ejecuta onSquareClick cuando se hace clic
    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    );
}

// Exportamos el componente Square para poder usarlo en otros archivos
export default Square;
```

**Cambios importantes:**
- **Eliminado:** `import { useState }` y `const [value, setValue] = useState(null)`
- **Agregado:** Props `value` y `onSquareClick`
- Square ya NO controla su propio estado
- Es un componente "tonto" o "presentacional"

### Paso 2: Agregar Estado Centralizado a Board.jsx

**Archivo:** `src/components/Board.jsx`

```jsx
// Importamos useState para manejar el estado del tablero completo
import { useState } from "react";
// Importamos el componente Square (casilla individual del tablero)
import Square from "./Square";

// Componente Board: representa el tablero completo del juego Tic-Tac-Toe
// Ahora Board es el "dueño" del estado - controla todas las casillas
function Board() {
  // Estado: array de 9 elementos que representa todas las casillas del tablero
  // Índices: 0-8 corresponden a las casillas en orden:
  // [0, 1, 2]  <- primera fila
  // [3, 4, 5]  <- segunda fila
  // [6, 7, 8]  <- tercera fila
  // Valor inicial: Array(9).fill(null) = [null, null, null, null, null, null, null, null, null]
  const [squares, setSquares] = useState(Array(9).fill(null));

  // Función que maneja el clic en una casilla específica
  // Parámetro 'i': índice de la casilla clickeada (0-8)
  function handleClick(i) {
    // Creamos una COPIA del array squares
    // IMPORTANTE: En React NO debemos modificar el estado directamente
    // Esto se llama "inmutabilidad" - creamos una nueva copia en lugar de modificar la original
    const nextSquares = squares.slice();
    
    // Modificamos la posición 'i' en la copia, no en el original
    nextSquares[i] = 'X';
    
    // Actualizamos el estado con la nueva copia
    // Esto hace que React re-renderice el componente con los nuevos valores
    setSquares(nextSquares);
  }

  return (
    <>
      {/* Primera fila del tablero - casillas 0, 1, 2 */}
      <div className="board-row">
        {/* Cada Square recibe:
            - value: el valor actual de esa posición en el array
            - onSquareClick: una función flecha que llama a handleClick con el índice correcto */}
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      
      {/* Segunda fila del tablero - casillas 3, 4, 5 */}
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      
      {/* Tercera fila del tablero - casillas 6, 7, 8 */}
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

// Exportamos el componente Board
export default Board;
```

**Explicaciones clave:**

1. **Array de estado:**
   ```jsx
   const [squares, setSquares] = useState(Array(9).fill(null));
   ```
   - Crea un array: `[null, null, null, null, null, null, null, null, null]`
   - Representa las 9 casillas del tablero
   - `null` significa casilla vacía

2. **Función handleClick:**
   ```jsx
   function handleClick(i) {
       const nextSquares = squares.slice();  // Copia inmutable
       nextSquares[i] = 'X';                 // Modifica la copia
       setSquares(nextSquares);              // Actualiza estado
   }
   ```
   - `slice()` crea una copia del array (inmutabilidad)
   - `nextSquares[i] = 'X'` marca la casilla clickeada
   - `setSquares()` actualiza el estado y causa re-render

3. **Pasar funciones con parámetros:**
   ```jsx
   <Square onSquareClick={() => handleClick(0)} />
   ```
   - `() => handleClick(0)` es una función flecha
   - Cuando Square hace clic, ejecuta esta función
   - La función flecha llama a `handleClick` con el índice correcto
   - **Importante:** No escribir `handleClick(0)` directamente (se ejecutaría inmediatamente)

## Resultado Esperado

Al ejecutar el proyecto:
1. Tablero de 3x3 casillas vacías
2. Al hacer clic en cualquier casilla, aparece "X"
3. Todas las casillas se coordinan desde Board
4. Puedes hacer clic en todas las casillas

## Conceptos Clave

### ¿Qué es "Lifting State Up"?

**Levantar el estado** significa mover el estado desde componentes hijos a un componente padre común cuando:
- Múltiples componentes necesitan acceder al mismo estado
- Los componentes necesitan comunicarse entre sí
- Necesitas coordinar o sincronizar componentes

### Antes vs Después

**Antes (Tic-Tac-Toe-03):**
```
Board
 ├─ Square (estado propio)
 ├─ Square (estado propio)
 └─ Square (estado propio)
```
❌ Cada casilla independiente
❌ No pueden comunicarse

**Después (Tic-Tac-Toe-04):**
```
Board (estado centralizado)
 ├─ Square (controlado)
 ├─ Square (controlado)
 └─ Square (controlado)
```
✅ Board controla todo
✅ Puede coordinar las casillas

### Inmutabilidad

**❌ Incorrecto (muta el estado directamente):**
```jsx
function handleClick(i) {
    squares[i] = 'X';        // Modifica el array original
    setSquares(squares);     // React no detecta el cambio
}
```

**✅ Correcto (crea una copia):**
```jsx
function handleClick(i) {
    const nextSquares = squares.slice();  // Copia nueva
    nextSquares[i] = 'X';                  // Modifica la copia
    setSquares(nextSquares);               // React detecta el cambio
}
```

**¿Por qué?**
- React compara referencias de objetos/arrays
- Si modificas el original, React no detecta cambios
- Crear una copia nueva permite a React detectar cambios

### Flujo de Datos

```
1. Usuario hace clic en casilla
         ↓
2. Square ejecuta onSquareClick
         ↓
3. Se ejecuta () => handleClick(i)
         ↓
4. handleClick crea copia de squares
         ↓
5. Modifica la copia: nextSquares[i] = 'X'
         ↓
6. setSquares actualiza el estado
         ↓
7. React re-renderiza Board
         ↓
8. Board pasa nuevos values a cada Square
         ↓
9. Casillas se actualizan
```

## Problema Actual

Aunque el estado está centralizado:
- **Todas las casillas siguen mostrando "X"**
- No alterna entre "X" y "O"

En el siguiente proyecto (Tic-Tac-Toe-05) implementaremos la lógica para alternar turnos.

## Ejercicio Adicional

1. Agrega `console.log(squares)` en handleClick para ver cómo cambia el array
2. Intenta modificar handleClick para mostrar "O" en lugar de "X"
3. Experimenta quitando `.slice()` y observa qué pasa (spoiler: no funcionará bien)

## Comandos Útiles

```bash
npm run dev      # Iniciar servidor de desarrollo
npm run build    # Construir para producción
npm run preview  # Previsualizar versión de producción
```


