// Importamos el componente BookItem que mostrará cada libro individual
import BookItem from "./BookItem";

// Componente BookList - Muestra la lista de libros disponibles
// Recibe un array de libros y una función callback del padre
function BookList({ books, onAddToCart }) {
  return (
    <div className="wrapper">
      {/* Renderizado de lista usando .map() */}
      {/* Por cada libro en el array, renderizamos un BookItem */}
      {books.map((book, index) => (
        <BookItem 
          key={index} 
          book={book} 
          index={index}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

// Exportamos el componente
export default BookList;
