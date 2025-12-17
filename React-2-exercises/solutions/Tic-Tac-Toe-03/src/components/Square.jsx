// Importamos el hook useState para manejar el estado del componente
import { useState } from 'react';

// Componente Square: representa una casilla individual del tablero
// Ahora tiene su propio estado y puede cambiar cuando se hace clic
function Square() {
  // useState crea una variable de estado "value" que puede cambiar
  // - value: el valor actual de la casilla (inicialmente null/vacío)
  // - setValue: función para actualizar el valor
  // - useState(null): el valor inicial es null (vacío)
  const [value, setValue] = useState(null);

  // Función que se ejecuta cuando se hace clic en la casilla
  function handleClick() {
    // Cambia el valor del estado a 'X'
    // Esto hace que React re-renderice el componente y muestre la "X"
    setValue('X');
  }

  return (
    <button
      className="square"
      onClick={handleClick} // Conectamos el evento click con nuestra función
    >
      {/* Mostramos el valor actual del estado (null o 'X') */}
      {value}
    </button>
  );
}

// Exportamos el componente Square
export default Square;