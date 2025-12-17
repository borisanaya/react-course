// Componente Cart - Muestra el carrito de compras
function Cart({ cartItems, onRemoveFromCart }) {
  return (
    <div className="pane-sm sidebar">
      <ul className="list-group">
        {cartItems.map((book, index) => (
          <li key={index} className="list-group-item">
            <img 
              className="img-circle media-object pull-left" 
              src={`/images/${book.img}`} 
              alt={book.title}
              width="32" 
              height="32"
            />
            
            <div className="media-body">
              <strong>{book.title}</strong>
              <p>{book.author}</p>
              
              <button 
                className="btn btn-mini btn-default"
                onClick={() => onRemoveFromCart(index)}
              >
                ❌
              </button>
            </div>
          </li>
        ))}
        
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

export default Cart;
