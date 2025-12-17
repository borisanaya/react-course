// Componente Header - Muestra la cabecera con título y contador del carrito
// Recibe props del componente padre (App)
function Header({ cartCount, onToggleCart }) {
  return (
    <header className="cabecera">
      {/* Título de la tienda */}
      <span className="titulo">Your Book Store</span>
      
      {/* Contador de items en el carrito */}
      {/* onClick llama a la función del padre para mostrar/ocultar el carrito */}
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
