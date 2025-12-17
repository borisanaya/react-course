# Tic-Tac-Toe 06 - Declarar un Ganador (Juego Completo)

## Objetivo

Completar el juego implementando la **detección de ganador**. Aprenderemos a crear funciones auxiliares, validar condiciones de victoria, y detener el juego cuando termine.

## ¿Qué aprenderás?

- Cómo crear y usar funciones auxiliares
- Lógica para detectar patrones ganadores
- Mostrar mensajes de estado del juego
- Prevenir jugadas después de que alguien gane
- Renderizado condicional de mensajes

## Requisitos Previos

- Haber completado Tic-Tac-Toe-05
- Entender múltiples estados
- Conocer condicionales y loops

## Configuración Inicial

1. **Asegúrate de tener Node.js instalado** (versión 16 o superior)
2. **Instala las dependencias del proyecto:**
   ```bash
   npm install
   ```

## Partiendo del Proyecto Anterior

Este proyecto parte de Tic-Tac-Toe-05. Si estás construyéndolo desde cero:
1. Copia la carpeta del proyecto anterior
2. Renombra a `tic-tac-toe-06`
3. Sigue las modificaciones indicadas abajo

## El Problema a Resolver

En Tic-Tac-Toe-05:
- El juego nunca termina
- No se detectan ganadores
- No hay indicador de turno
- Puedes seguir jugando después de ganar

**Solución:** Agregar función `calculateWinner` y mensaje de estado

## Modificaciones a Realizar

### Paso 1: Agregar la Función calculateWinner

**Archivo:** `src/components/Board.jsx`

Esta función se coloca **fuera** del componente Board, al final del archivo antes del export.

```jsx
// Función auxiliar que determina si hay un ganador en el tablero
// Parámetro 'squares': array de 9 elementos con los valores del tablero
// Retorna: 'X', 'O', o null (si no hay ganador)
function calculateWinner(squares) {
  // Array con todas las combinaciones ganadoras posibles
  // Cada elemento es un array de 3 índices que forman una línea ganadora
  const lines = [
    [0, 1, 2], // Fila superior
    [3, 4, 5], // Fila del medio
    [6, 7, 8], // Fila inferior
    [0, 3, 6], // Columna izquierda
    [1, 4, 7], // Columna del medio
    [2, 5, 8], // Columna derecha
    [0, 4, 8], // Diagonal principal (↘)
    [2, 4, 6], // Diagonal secundaria (↙)
  ];

  // Recorremos cada posible combinación ganadora
  for (let i = 0; i < lines.length; i++) {
    // Desestructuramos los 3 índices de la línea actual
    // Ejemplo: [0, 1, 2] → a=0, b=1, c=2
    const [a, b, c] = lines[i];
    
    // Verificamos si hay un ganador en esta línea:
    // 1. squares[a] debe tener un valor (no null)
    // 2. squares[a] === squares[b] (mismas posiciones a y b)
    // 3. squares[a] === squares[c] (mismas posiciones a y c)
    // Si las 3 condiciones se cumplen, hay un ganador en esta línea
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      // Retornamos el símbolo ganador ('X' o 'O')
      return squares[a];
    }
  }
  
  // Si recorrimos todas las líneas y no encontramos ganador, retornamos null
  return null;
}
```

### Paso 2: Actualizar el Componente Board

Reemplaza todo el contenido del componente Board con este código:

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
  const [xIsNext, setXIsNext] = useState(true);

  // Función que maneja el clic en una casilla específica
  function handleClick(i) {
    // NUEVA VALIDACIÓN 1: Verificar si ya hay un ganador
    // Si calculateWinner retorna un valor (no null), el juego terminó
    if (calculateWinner(squares)) {
      return; // Salir sin hacer nada - el juego ya terminó
    }

    // VALIDACIÓN 2: Si la casilla ya tiene un valor (X o O), no hacer nada
    if (squares[i]) {
      return;
    }

    // Creamos una COPIA del array squares (inmutabilidad)
    const nextSquares = squares.slice();
    
    // Decidir qué símbolo colocar según el turno
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    
    // Actualizar el array de casillas
    setSquares(nextSquares);
    // Cambiar el turno
    setXIsNext(!xIsNext);
  }

  // NUEVA FUNCIONALIDAD: Calcular y mostrar el estado del juego
  // Llamamos a calculateWinner para verificar si hay ganador
  const winner = calculateWinner(squares);
  // Variable para el mensaje de estado
  let status;
  
  if (winner) {
    // Si hay ganador, mostrar mensaje de victoria
    status = 'Ganador: ' + winner;
  } else {
    // Si no hay ganador, mostrar de quién es el turno
    status = 'Siguiente jugador: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      {/* NUEVO: Mostrar el estado del juego */}
      <div className="status">{status}</div>
      
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

// Función auxiliar que determina si hay un ganador en el tablero
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
    [0, 4, 8], [2, 4, 6],            // Diagonales
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
```

## Resultado Esperado

Al ejecutar el proyecto:
1. Tablero de 3x3 casillas vacías
2. Mensaje "Siguiente jugador: X" en la parte superior
3. Alternar entre "X" y "O" con cada jugada
4. Cuando alguien gane, mostrar "Ganador: X" o "Ganador: O"
5. Después de ganar, no se puede seguir jugando
6. Casillas ya ocupadas no se pueden cambiar

## Conceptos Clave

### Función Auxiliar (Helper Function)

```jsx
function calculateWinner(squares) {
  // ...lógica
}
```

- Se define **fuera** del componente (al final del archivo)
- No es un componente React (no retorna JSX)
- Es una función pura: mismo input → mismo output
- No accede a estado ni props directamente
- Recibe datos por parámetros

### Array de Combinaciones Ganadoras

```jsx
const lines = [
  [0, 1, 2],  // Índices: □ □ □ | X X X | _ _ _
  [3, 4, 5],  // Índices: _ _ _ | X X X | _ _ _
  [6, 7, 8],  // Índices: _ _ _ | _ _ _ | X X X
  [0, 3, 6],  // Índices: X _ _ | X _ _ | X _ _
  [1, 4, 7],  // Índices: _ X _ | _ X _ | _ X _
  [2, 5, 8],  // Índices: _ _ X | _ _ X | _ _ X
  [0, 4, 8],  // Índices: X _ _ | _ X _ | _ _ X (diagonal)
  [2, 4, 6],  // Índices: _ _ X | _ X _ | X _ _ (diagonal)
];
```

Cada sub-array representa una línea ganadora.

### Desestructuración en Loop

```jsx
for (let i = 0; i < lines.length; i++) {
  const [a, b, c] = lines[i];  // Extrae los 3 valores del array
  // ...
}
```

**Equivalente sin desestructuración:**
```jsx
const a = lines[i][0];
const b = lines[i][1];
const c = lines[i][2];
```

### Lógica de Detección de Ganador

```jsx
if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
```

**Condición compuesta con 3 partes:**

1. `squares[a]` → La casilla debe tener un valor (no null)
2. `squares[a] === squares[b]` → Casilla a y b tienen el mismo símbolo
3. `squares[a] === squares[c]` → Casilla a y c tienen el mismo símbolo

**Ejemplo de victoria:**
```
Tablero: ['X', 'X', 'X', null, 'O', null, null, 'O', null]
Línea [0, 1, 2]:
  - squares[0] = 'X' (truthy ✓)
  - squares[0] === squares[1] → 'X' === 'X' ✓
  - squares[0] === squares[2] → 'X' === 'X' ✓
  → Retorna 'X'
```

### Renderizado Condicional

```jsx
const winner = calculateWinner(squares);
let status;

if (winner) {
  status = 'Ganador: ' + winner;
} else {
  status = 'Siguiente jugador: ' + (xIsNext ? 'X' : 'O');
}

return (
  <>
    <div className="status">{status}</div>
    {/* ... */}
  </>
);
```

- Calculamos el mensaje **antes** del return
- Usamos una variable `status` que cambia según la condición
- En el JSX solo mostramos `{status}`

### Prevenir Jugadas Después de Ganar

```jsx
function handleClick(i) {
  if (calculateWinner(squares)) {
    return;  // Salir si ya hay ganador
  }
  // ...resto del código
}
```

Esta validación debe ir **antes** de modificar el estado.

## Flujo Completo con Detección de Ganador

```
1. Usuario hace clic en casilla
         ↓
2. Se ejecuta handleClick(i)
         ↓
3. ¿calculateWinner(squares) retorna algo?
   └─ SÍ → return (no hacer nada, juego terminado)
   └─ NO → continuar
         ↓
4. ¿squares[i] tiene valor?
   └─ SÍ → return (casilla ocupada)
   └─ NO → continuar
         ↓
5. Crear copia y colocar símbolo
         ↓
6. Actualizar estados (squares y xIsNext)
         ↓
7. React re-renderiza
         ↓
8. Calcular winner = calculateWinner(squares)
         ↓
9. Actualizar mensaje status
         ↓
10. Mostrar nuevo estado en pantalla
```

## Posibles Mejoras Futuras

Este proyecto completa el juego básico. Algunas mejoras que podrías agregar:

1. **Botón de reinicio:** Para jugar otra partida
2. **Detectar empate:** Cuando se llenan las 9 casillas sin ganador
3. **Historial de movimientos:** Ver y volver a jugadas anteriores
4. **Destacar línea ganadora:** Resaltar las 3 casillas ganadoras
5. **Contador de victorias:** Llevar registro de partidas ganadas

## Ejercicio Adicional

1. Modifica el mensaje de ganador para que sea más emocionante: "🎉 ¡Ganador: X! 🎉"
2. Agrega un `console.log` en calculateWinner para ver cuándo se llama
3. Intenta agregar una función que detecte empate (todas las casillas llenas, sin ganador)

## Comandos Útiles

```bash
npm run dev      # Iniciar servidor de desarrollo
npm run build    # Construir para producción
npm run preview  # Previsualizar versión de producción
```

## ¡Felicitaciones!

Has completado el tutorial de Tic-Tac-Toe y aprendido conceptos fundamentales de React:

✅ Componentes y composición  
✅ Props (pasar datos de padre a hijo)  
✅ useState (manejo de estado)  
✅ Eventos (onClick)  
✅ Lifting state up (estado compartido)  
✅ Inmutabilidad  
✅ Renderizado condicional  
✅ Funciones auxiliares  

¡Ahora estás listo para construir aplicaciones más complejas en React!


