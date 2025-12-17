// Importamos el componente BookItem que mostrará cada libro individual
import BookItem from "./BookItem";

// Componente BookList - Muestra la lista de libros disponibles
// Recibe un array de libros desde el componente padre
function BookList({ books }) {
  return (
    <div className="wrapper">
      {/* Renderizamos cada libro usando el componente BookItem */}
      {/* Pasamos cada objeto libro como prop "book" */}
      
      {/* Libro 1 */}
      <BookItem book={books[0]} />
      
      {/* Libro 2 */}
      <BookItem book={books[1]} />
      
      {/* Libro 3 */}
      <BookItem book={books[2]} />
    </div>
  );
}

// Exportamos el componente
export default BookList;
