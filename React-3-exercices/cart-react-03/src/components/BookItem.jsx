// Componente BookItem - Muestra un libro individual
// Ahora recibe onAddToCart para manejar el clic
function BookItem({ book, onAddToCart }) {
  
  // Función que se ejecuta al hacer clic en la imagen
  // Llama a la función del padre (callback) pasando el libro
  const handleClick = () => {
    onAddToCart(book);
  };

  return (
    <div>
      {/* Agregamos el evento onClick a la imagen */}
      {/* También agregamos cursor pointer para indicar que es clickeable */}
      <img 
        src={`/images/${book.img}`} 
        alt={book.title}
        height="170" 
        width="108"
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
      />
      <br />
      <strong>{book.title}</strong>
      <br />
      {book.author}
    </div>
  );
}

// Exportamos el componente
export default BookItem;
