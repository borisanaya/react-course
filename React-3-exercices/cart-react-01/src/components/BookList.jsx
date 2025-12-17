// Componente BookList - Muestra la lista de libros disponibles
// Por ahora, los libros están hardcodeados directamente en el componente
function BookList() {
  return (
    <div className="wrapper">
      {/* Libro 1 */}
      <div>
        <img 
          src="/images/0.jpg" 
          alt="Q"
          height="170" 
          width="108"
        />
        <br />
        <strong>Q</strong>
        <br />
        Luther Blissett
      </div>

      {/* Libro 2 */}
      <div>
        <img 
          src="/images/1.jpg" 
          alt="El amor en tiempos de cólera"
          height="170" 
          width="108"
        />
        <br />
        <strong>El amor en tiempos de cólera</strong>
        <br />
        Gabriel García Márquez
      </div>

      {/* Libro 3 */}
      <div>
        <img 
          src="/images/2.jpg" 
          alt="Watchmen"
          height="170" 
          width="108"
        />
        <br />
        <strong>Watchmen</strong>
        <br />
        Alan Moore y Dave Gibbons
      </div>
    </div>
  );
}

// Exportamos el componente
export default BookList;
