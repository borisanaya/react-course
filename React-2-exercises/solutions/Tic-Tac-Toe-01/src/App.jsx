// Importamos los estilos del componente App
import "./App.css";
// Importamos el componente Board (tablero del juego)
import Board from "./components/Board";
// Importamos el componente Square (aunque no lo usamos directamente aquí)
import Square from "./components/Square";

// Componente principal de la aplicación
function App() {
  return (
     <>
        {/* Renderizamos el componente Board que contiene todo el tablero */}
        <Board></Board>
    </>
  );
}

// Exportamos el componente para que pueda ser usado en otros archivos
export default App;
