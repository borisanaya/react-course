// Componente BookItem - Muestra un libro individual
// Recibe las props del componente padre (BookList)
// { book } es desestructuración: extrae la propiedad "book" del objeto props
function BookItem({ book }) {
  return (
    <div>
      {/* Usamos template literals para construir la ruta de la imagen */}
      <img 
        src={`/images/${book.img}`} 
        alt={book.title}
        height="170" 
        width="108"
      />
      <br />
      {/* Mostramos el título del libro desde las props */}
      <strong>{book.title}</strong>
      <br />
      {/* Mostramos el autor del libro desde las props */}
      {book.author}
    </div>
  );
}

// Exportamos el componente
export default BookItem;
