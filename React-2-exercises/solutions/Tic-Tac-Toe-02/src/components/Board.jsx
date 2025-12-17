// Importamos el componente Square (casilla individual del tablero)
import Square from "./Square";

// Componente Board: representa el tablero completo del juego Tic-Tac-Toe
function Board() {
  return (
    <>
      {/* Primera fila del tablero - ahora cada casilla recibe un valor diferente */}
      <div className="board-row">
        {/* Pasamos la prop "value" a cada Square para mostrar números diferentes */}
        <Square value="1"/> {/* Casilla muestra "1" */}
        <Square value="2"/> {/* Casilla muestra "2" */}
        <Square value="3"/> {/* Casilla muestra "3" */}
      </div>
      
      {/* Segunda fila del tablero */}
      <div className="board-row">
        <Square value="4"/> {/* Casilla muestra "4" */}
        <Square value="5"/> {/* Casilla muestra "5" */}
        <Square value="6"/> {/* Casilla muestra "6" */}
      </div>
      
      {/* Tercera fila del tablero */}
      <div className="board-row">
        <Square value="7"/> {/* Casilla muestra "7" */}
        <Square value="8"/> {/* Casilla muestra "8" */}
        <Square value="9"/> {/* Casilla muestra "9" */}
      </div>
    </>
  );
}

// Exportamos el componente Board
export default Board;