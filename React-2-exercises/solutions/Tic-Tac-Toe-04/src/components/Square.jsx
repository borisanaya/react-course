// Componente Square: ahora es un componente "tonto" o "presentacional"
// No tiene su propio estado, solo recibe datos y funciones por props
// Recibe dos props:
// - value: el valor a mostrar en la casilla (null, 'X', o 'O')
// - onSquareClick: la función que se ejecuta cuando se hace clic
function Square({ value, onSquareClick }) {
  return (
    <button 
      className="square" 
      onClick={onSquareClick} // Ejecuta la función recibida por props
    >
      {/* Muestra el valor recibido por props */}
      {value}
    </button>
  );
}

// Exportamos el componente Square
export default Square;