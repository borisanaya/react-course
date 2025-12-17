// Importamos el componente BookItem
import BookItem from "./BookItem";

// Componente BookList - Muestra la lista de libros disponibles
// Ahora también recibe la función onAddToCart que pasará a cada BookItem
function BookList({ books, onAddToCart }) {
  return (
    <div className="wrapper">
      {/* Pasamos tanto el libro como la función a cada BookItem */}
      <BookItem book={books[0]} onAddToCart={onAddToCart} />
      <BookItem book={books[1]} onAddToCart={onAddToCart} />
      <BookItem book={books[2]} onAddToCart={onAddToCart} />
    </div>
  );
}

// Exportamos el componente
export default BookList;
