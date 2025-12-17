// Componente Square: representa una casilla individual del tablero
// Por ahora, todas las casillas muestran "X" de forma estática
function Square() {
    // Retorna un botón que representa una casilla del tablero
    // La clase "square" se usa para aplicar estilos CSS
    return <button className="square">X</button>;
}

// Exportamos el componente Square para poder usarlo en otros archivos
export default Square;