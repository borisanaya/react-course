// Importamos el componente BookItem
import BookItem from "./BookItem";

// Componente BookList - Muestra la lista de libros disponibles
// Ahora usa .map() para renderizar dinámicamente todos los libros
function BookList({ books, onAddToCart }) {
  return (
    <div className="wrapper">
      {/* .map() itera sobre cada elemento del array books */}
      {/* Por cada libro, renderiza un componente BookItem */}
      {books.map((book, index) => (
        <BookItem 
          key={index}           // Prop especial: identifica cada elemento de forma única
          book={book}           // Pasamos el objeto libro
          onAddToCart={onAddToCart}  // Pasamos la función callback
        />
      ))}
    </div>
  );
}

// Exportamos el componente
export default BookList;
