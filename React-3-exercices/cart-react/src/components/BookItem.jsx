// Componente BookItem - Muestra un libro individual
// Recibe las props del componente padre (BookList)
function BookItem({ book, index, onAddToCart }) {
  
  // Función que se ejecuta al hacer click en la imagen
  // Llama a la función del padre (callback) pasando el libro
  const handleClick = () => {
    onAddToCart(book);
  };

  return (
    <div>
      {/* Imagen del libro con evento onClick */}
      <img 
        src={`/images/${book.img}`} 
        alt={book.title}
        height="170" 
        width="108"
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
      />
      <br />
      {/* Título del libro */}
      <strong>{book.title}</strong>
      <br />
      {/* Autor del libro */}
      {book.author}
    </div>
  );
}

// Exportamos el componente
export default BookItem;
