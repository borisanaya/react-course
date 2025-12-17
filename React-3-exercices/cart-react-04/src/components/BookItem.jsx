// Componente BookItem - Muestra un libro individual
function BookItem({ book, onAddToCart }) {
  
  // Función que se ejecuta al hacer clic en la imagen
  const handleClick = () => {
    onAddToCart(book);
  };

  return (
    <div>
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

export default BookItem;
