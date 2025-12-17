// Importamos el componente Square
import Square from "./Square";
// Importamos useState para manejar el estado del tablero
import { useState } from "react";

// Componente Board: ahora alterna entre jugadores X y O
function Board() {
  // Estado que indica si es el turno de X (true) o de O (false)
  // Inicialmente es true, por lo que X juega primero
  const [xIsNext, setXIsNext] = useState(true);
  
  // Estado que guarda los valores de las 9 casillas del tablero
  const [squares, setSquares] = useState(Array(9).fill(null));

  // Función que se ejecuta cuando se hace clic en una casilla
  function handleClick(i) {
    // Si la casilla ya tiene un valor (X u O), no hacemos nada
    // Esto evita que se sobrescriba una jugada
    if (squares[i]) {
      return; // Salimos de la función sin hacer cambios
    }
    
    // Creamos una copia del array de casillas
    const nextSquares = squares.slice();
    
    // Decidimos qué símbolo poner según el turno actual
    if (xIsNext) {
      nextSquares[i] = 'X'; // Si es turno de X, ponemos 'X'
    } else {
      nextSquares[i] = 'O'; // Si es turno de O, ponemos 'O'
    }
    
    // Actualizamos el estado del tablero con el nuevo array
    setSquares(nextSquares);
    
    // Cambiamos el turno al siguiente jugador
    // !xIsNext invierte el valor: si era true se vuelve false, y viceversa
    setXIsNext(!xIsNext);
  }

  return (
    <>
      {/* Primera fila - casillas 0, 1, 2 */}
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      
      {/* Segunda fila - casillas 3, 4, 5 */}
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      
      {/* Tercera fila - casillas 6, 7, 8 */}
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