// Componente Cart - Muestra el carrito de compras
// Recibe la lista de items del carrito y función para eliminar
function Cart({ cartItems, onRemoveFromCart }) {
  return (
    <div className="pane-sm sidebar">
      <ul className="list-group">
        {/* Renderizado de lista: mapeamos cada item del carrito */}
        {cartItems.map((book, index) => (
          <li key={index} className="list-group-item">
            {/* Imagen pequeña del libro */}
            <img 
              className="img-circle media-object pull-left" 
              src={`/images/${book.img}`} 
              alt={book.title}
              width="32" 
              height="32"
            />
            
            {/* Información del libro */}
            <div className="media-body">
              <strong>{book.title}</strong>
              <p>{book.author}</p>
              
              {/* Botón para eliminar el libro del carrito */}
              {/* onClick llama a la función del padre pasando el índice */}
              <button 
                className="btn btn-mini btn-default"
                onClick={() => onRemoveFromCart(index)}
              >
                ❌
              </button>
            </div>
          </li>
        ))}
        
        {/* Renderizado condicional: si el carrito está vacío, mostramos un mensaje */}
        {cartItems.length === 0 && (
          <li className="list-group-item">
            <p style={{ textAlign: 'center', color: '#999' }}>
              El carrito está vacío
            </p>
          </li>
        )}
      </ul>
    </div>
  );
}

// Exportamos el componente
export default Cart;
