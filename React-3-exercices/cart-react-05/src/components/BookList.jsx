// Importamos el componente BookItem
import BookItem from "./BookItem";

// Componente BookList - Muestra la lista de libros disponibles
function BookList({ books, onAddToCart }) {
  return (
    <div className="wrapper">
      {books.map((book, index) => (
        <BookItem 
          key={index}
          book={book}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

// Exportamos el componente
export default BookList;
