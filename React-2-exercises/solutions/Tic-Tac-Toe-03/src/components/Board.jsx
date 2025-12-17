// Importamos el componente Square (casilla individual del tablero)
import Square from "./Square";

// Componente Board: representa el tablero completo del juego Tic-Tac-Toe
// Ahora cada Square maneja su propio estado (valor "X" o vacío)
function Board() {
  return (
    <>
      {/* Primera fila del tablero - 3 casillas interactivas */}
      <div className="board-row">
        <Square /> {/* Cada casilla tiene su propio estado independiente */}
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