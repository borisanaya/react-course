// Importamos el componente Square
import Square from "./Square";
// Importamos useState para manejar el estado del tablero
import { useState } from "react";

// Componente Board: ahora controla el estado de TODAS las casillas
// Esto se llama "lifting state up" (elevar el estado)
function Board() {
  // Estado que guarda los valores de las 9 casillas del tablero
  // Array(9).fill(null) crea un array de 9 elementos, todos null (vacíos)
  // Ejemplo: [null, null, null, null, null, null, null, null, null]
  const [squares, setSquares] = useState(Array(9).fill(null));
  
  // Función que se ejecuta cuando se hace clic en una casilla
  // Recibe "i" como parámetro: el índice de la casilla (0-8)
  function handleClick(i) {
    // Creamos una copia del array de casillas
    // .slice() crea una copia para no modificar el original directamente
    const nextSquares = squares.slice();
    
    // Modificamos solo la casilla en la posición "i" para que muestre 'X'
    nextSquares[i] = 'X';
    
    // Actualizamos el estado con el nuevo array
    // Esto hace que React re-renderice el tablero completo
    setSquares(nextSquares);
  }

  return (
    <>
      {/* Primera fila - casillas 0, 1, 2 */}
      <div className="board-row">
        {/* Pasamos el valor desde el estado y una función para manejar el click */}
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