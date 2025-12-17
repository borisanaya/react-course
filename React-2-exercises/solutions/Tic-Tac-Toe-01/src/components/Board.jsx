// Importamos el componente Square (casilla individual del tablero)
import Square from "./Square";

// Componente Board: representa el tablero completo del juego Tic-Tac-Toe
function Board() {
  return (
    <>
      {/* Primera fila del tablero - contiene 3 casillas */}
      <div className="board-row">
        <Square /> {/* Casilla 1 */}
        <Square /> {/* Casilla 2 */}
        <Square /> {/* Casilla 3 */}
      </div>
      
      {/* Segunda fila del tablero - contiene 3 casillas */}
      <div className="board-row">
        <Square /> {/* Casilla 4 */}
        <Square /> {/* Casilla 5 */}
        <Square /> {/* Casilla 6 */}
      </div>
      
      {/* Tercera fila del tablero - contiene 3 casillas */}
      <div className="board-row">
        <Square /> {/* Casilla 7 */}
        <Square /> {/* Casilla 8 */}
        <Square /> {/* Casilla 9 */}
      </div>
    </>
  );
}

// Exportamos el componente Board
export default Board;