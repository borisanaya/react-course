// Componente Header - Muestra la cabecera de la tienda
// Ahora también maneja el toggle (mostrar/ocultar) del carrito
function Header({ cartCount, onToggleCart }) {
  return (
    <header className="cabecera">
      {/* Título de la tienda */}
      <span className="titulo">Your Book Store</span>
      
      {/* Contador de items en el carrito */}
      {/* Ahora es clickeable para mostrar/ocultar el carrito */}
      <span 
        id="contador" 
        className="blue" 
        onClick={onToggleCart}
        style={{ cursor: 'pointer' }}
      >
        {cartCount}
      </span>
    </header>
  );
}

// Exportamos el componente
export default Header;
