// Componente Square: representa una casilla individual del tablero
// Ahora recibe una prop "value" que determina qué mostrar en la casilla
// { value } es desestructuración de props - extrae la propiedad "value" del objeto props
function Square({ value }) {
    // Retorna un botón que muestra el valor recibido por props
    // {value} muestra el contenido dinámico que se pasó desde Board
    return <button className="square">{value}</button>;
}

// Exportamos el componente Square para poder usarlo en otros archivos
export default Square;