// Componente Header - Muestra la cabecera de la tienda
function Header({ cartCount, onToggleCart }) {
  return (
    <header className="cabecera">
      <span className="titulo">Your Book Store</span>
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

export default Header;
