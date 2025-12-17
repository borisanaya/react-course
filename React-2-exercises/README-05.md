# Tic-Tac-Toe 05 - Alternando Turnos

## Objetivo

Implementar la lógica para que los jugadores alternen turnos entre "X" y "O". Aprenderemos a usar múltiples variables de estado que interactúan entre sí.

## ¿Qué aprenderás?

- Cómo gestionar múltiples estados relacionados
- Lógica condicional en funciones
- Operador ternario para alternar valores
- Prevenir acciones en casillas ya ocupadas
- Actualizar múltiples estados en una función

## Requisitos Previos

- Haber completado Tic-Tac-Toe-04
- Entender estado centralizado
- Conocer inmutabilidad de arrays

## Configuración Inicial

1. **Asegúrate de tener Node.js instalado** (versión 16 o superior)
2. **Instala las dependencias del proyecto:**
   ```bash
   npm install
   ```

## Partiendo del Proyecto Anterior

Este proyecto parte de Tic-Tac-Toe-04. Si estás construyéndolo desde cero:
1. Copia la carpeta del proyecto anterior
2. Renombra a `tic-tac-toe-05`
3. Sigue las modificaciones indicadas abajo

## El Problema a Resolver

En Tic-Tac-Toe-04:
- Todas las casillas muestran "X"
- No hay turnos alternados
- Puedes hacer clic múltiples veces en la misma casilla

**Solución:** Agregar un segundo estado que rastree de quién es el turno

## Modificaciones a Realizar

### Paso Único: Modificar Board.jsx

**Archivo:** `src/components/Board.jsx`

Los cambios principales son:
1. Agregar un nuevo estado `xIsNext`
2. Usar lógica condicional para determinar qué símbolo colocar
3. Prevenir clics en casillas ya ocupadas
4. Alternar el turno después de cada jugada

**Código completo con comentarios:**

```jsx
// Importamos useState para manejar el estado del tablero completo
import { useState } from "react";
// Importamos el componente Square (casilla individual del tablero)
import Square from "./Square";

// Componente Board: representa el tablero completo del juego Tic-Tac-Toe
function Board() {
  // Estado 1: Array de 9 elementos que representa todas las casillas del tablero
  const [squares, setSquares] = useState(Array(9).fill(null));
  
  // Estado 2: Boolean que indica si el siguiente turno es de X (true) o de O (false)
  // Comenzamos con true porque X siempre juega primero
  const [xIsNext, setXIsNext] = useState(true);

  // Función que maneja el clic en una casilla específica
  function handleClick(i) {
    // VALIDACIÓN: Si la casilla ya tiene un valor (X o O), no hacer nada
    // Esto previene que un jugador sobrescriba una casilla ya ocupada
    if (squares[i]) {
      return; // Salir de la función sin hacer cambios
    }

    // Creamos una COPIA del array squares (inmutabilidad)
    const nextSquares = squares.slice();
    
    // LÓGICA DE TURNOS: Decidir qué símbolo colocar
    // Si xIsNext es true, colocamos 'X', si no, colocamos 'O'
    // Operador ternario: condición ? valorSiTrue : valorSiFalse
    if (xIsNext) {
      nextSquares[i] = 'X';  // Turno de X
    } else {
      nextSquares[i] = 'O';  // Turno de O
    }
    
    // Actualizamos el array de casillas
    setSquares(nextSquares);
    
    // CAMBIO DE TURNO: Invertimos xIsNext
    // Si era true (turno de X), ahora será false (turno de O)
    // Si era false (turno de O), ahora será true (turno de X)
    setXIsNext(!xIsNext);
  }

  return (
    <>
      {/* Primera fila del tablero - casillas 0, 1, 2 */}
      <div className="board-row">
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

### Explicación Detallada de los Cambios

#### 1. Nuevo Estado: xIsNext

```jsx
const [xIsNext, setXIsNext] = useState(true);
```

- **Tipo:** Boolean (true o false)
- **Propósito:** Rastrear de quién es el turno
- **Valor inicial:** `true` (X juega primero)
- **true** = Es el turno de X
- **false** = Es el turno de O

#### 2. Validación de Casilla Ocupada

```jsx
if (squares[i]) {
    return;
}
```

**¿Por qué esta validación?**
- `squares[i]` contiene `'X'`, `'O'`, o `null`
- Si contiene `'X'` o `'O'`, la casilla ya está ocupada
- En JavaScript, strings no vacíos son "truthy"
- Si hay valor, `return` sale de la función sin hacer nada

**Valores truthy vs falsy:**
- `null` → falsy (casilla vacía, permite clic)
- `'X'` → truthy (casilla ocupada, bloquea clic)
- `'O'` → truthy (casilla ocupada, bloquea clic)

#### 3. Lógica de Turnos con if/else

```jsx
if (xIsNext) {
    nextSquares[i] = 'X';
} else {
    nextSquares[i] = 'O';
}
```

**Alternativa con operador ternario:**
```jsx
nextSquares[i] = xIsNext ? 'X' : 'O';
```

Ambas formas son válidas. La versión con if/else es más clara para principiantes.

#### 4. Alternar el Turno

```jsx
setXIsNext(!xIsNext);
```

- `!` es el operador NOT (negación)
- `!true` → `false`
- `!false` → `true`
- Invierte el valor actual de `xIsNext`

**Secuencia de turnos:**
```
Inicio: xIsNext = true
Jugada 1: Coloca 'X', luego xIsNext = false
Jugada 2: Coloca 'O', luego xIsNext = true
Jugada 3: Coloca 'X', luego xIsNext = false
...y así sucesivamente
```

## Resultado Esperado

Al ejecutar el proyecto:
1. Tablero de 3x3 casillas vacías
2. Primera jugada coloca "X"
3. Segunda jugada coloca "O"
4. Alterna automáticamente entre "X" y "O"
5. No puedes hacer clic en casillas ya ocupadas

## Conceptos Clave

### Múltiples Estados Relacionados

```jsx
const [squares, setSquares] = useState(Array(9).fill(null));
const [xIsNext, setXIsNext] = useState(true);
```

- Puedes tener múltiples `useState` en un componente
- Los estados pueden depender unos de otros
- Ambos se actualizan en la misma función (handleClick)

### Operador Ternario

**Sintaxis:**
```jsx
condición ? valorSiTrue : valorSiFalse
```

**Ejemplos:**
```jsx
const symbol = xIsNext ? 'X' : 'O';
const message = isWinner ? 'Ganaste' : 'Sigue jugando';
const className = isActive ? 'active' : 'inactive';
```

### Negación Lógica (!)

```jsx
!true   // false
!false  // true
!!value // Convierte a boolean
```

### Valores Truthy y Falsy

**Falsy (equivalen a false):**
- `false`
- `0`
- `''` (string vacío)
- `null`
- `undefined`
- `NaN`

**Todo lo demás es Truthy:**
- `'X'`, `'O'`, `'cualquier string'`
- `1`, `42`, `-5` (cualquier número excepto 0)
- `[]`, `{}` (arrays y objetos, incluso vacíos)

## Flujo Completo de una Jugada

```
1. Usuario hace clic en casilla vacía (índice i)
         ↓
2. Se ejecuta handleClick(i)
         ↓
3. Validación: ¿squares[i] ya tiene valor?
   └─ SÍ → return (no hacer nada)
   └─ NO → continuar
         ↓
4. Crear copia: nextSquares = squares.slice()
         ↓
5. ¿xIsNext es true?
   └─ SÍ → nextSquares[i] = 'X'
   └─ NO → nextSquares[i] = 'O'
         ↓
6. setSquares(nextSquares) → Actualiza casillas
         ↓
7. setXIsNext(!xIsNext) → Cambia turno
         ↓
8. React re-renderiza Board
         ↓
9. Todas las casillas se actualizan con nuevos valores
```

## Problema Actual

El juego es funcional pero:
- No indica de quién es el turno
- No detecta cuando alguien gana
- El juego nunca termina

En el siguiente proyecto (Tic-Tac-Toe-06) agregaremos la **detección de ganador**.

## Ejercicio Adicional

1. Agrega `console.log('Turno de:', xIsNext ? 'X' : 'O')` antes de la validación
2. Intenta hacer que O juegue primero (cambia el valor inicial de xIsNext)
3. Experimenta eliminando la validación `if (squares[i])` y observa qué pasa

## Comandos Útiles

```bash
npm run dev      # Iniciar servidor de desarrollo
npm run build    # Construir para producción
npm run preview  # Previsualizar versión de producción
```


