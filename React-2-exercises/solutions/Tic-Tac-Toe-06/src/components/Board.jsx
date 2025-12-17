// Importamos el componente Square
import Square from "./Square";
// Importamos useState para manejar el estado del tablero
import { useState } from "react";

// Componente Board: versión completa del juego con detección de ganador
function Board() {
  // Estado que indica si es el turno de X (true) o de O (false)
  const [xIsNext, setXIsNext] = useState(true);
  
  // Estado que guarda los valores de las 9 casillas del tablero
  const [squares, setSquares] = useState(Array(9).fill(null));

  // Función que se ejecuta cuando se hace clic en una casilla
  function handleClick(i) {
    // Si ya hay un ganador O la casilla ya está ocupada, no hacemos nada
    // calculateWinner(squares) devuelve 'X', 'O' o null
    if (calculateWinner(squares) || squares[i]) {
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
    
    // Actualizamos el estado del tablero
    setSquares(nextSquares);
    
    // Cambiamos el turno al siguiente jugador
    setXIsNext(!xIsNext);
  }

  // Verificamos si hay un ganador
  const winner = calculateWinner(squares);
  
  // Variable que guarda el mensaje a mostrar en pantalla
  let status;
  if (winner) {
    // Si hay ganador, mostramos quién ganó
    status = 'Winner: ' + winner;
  } else {
    // Si no hay ganador, mostramos de quién es el turno
    // (xIsNext ? 'X' : 'O') es un operador ternario: si xIsNext es true, devuelve 'X', sino 'O'
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      {/* Mostramos el estado del juego (turno o ganador) */}
      <div className="status">{status}</div>
      
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

// Función que calcula si hay un ganador
// Recibe el array de casillas y devuelve 'X', 'O' o null
function calculateWinner(squares) {
  // Array con todas las posibles combinaciones ganadoras
  // Cada sub-array representa una línea ganadora (horizontal, vertical o diagonal)
  const lines = [
    [0, 1, 2], // Fila superior
    [3, 4, 5], // Fila del medio
    [6, 7, 8], // Fila inferior
    [0, 3, 6], // Columna izquierda
    [1, 4, 7], // Columna del medio
    [2, 5, 8], // Columna derecha
    [0, 4, 8], // Diagonal de arriba-izquierda a abajo-derecha
    [2, 4, 6], // Diagonal de arriba-derecha a abajo-izquierda
  ];
  
  // Recorremos todas las posibles líneas ganadoras
  for (let i = 0; i < lines.length; i++) {
    // Extraemos las tres posiciones de la línea actual
    // Ejemplo: si lines[i] es [0, 1, 2], entonces a=0, b=1, c=2
    const [a, b, c] = lines[i];
    
    // Verificamos si las tres casillas tienen el mismo valor (y no son null)
    // squares[a] && ... asegura que la casilla no está vacía
    // squares[a] === squares[b] && squares[a] === squares[c] verifica que las tres son iguales
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      // Si encontramos tres en línea, devolvemos el ganador ('X' o 'O')
      return squares[a];
    }
  }
  
  // Si no hay ganador, devolvemos null
  return null;
}

// Exportamos el componente Board
export default Board;