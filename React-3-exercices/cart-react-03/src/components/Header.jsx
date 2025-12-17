// Componente Header - Muestra la cabecera de la tienda
function Header({ cartCount }) {
  return (
    <header className="cabecera">
      {/* Título de la tienda */}
      <span className="titulo">Your Book Store</span>
      
      {/* Contador dinámico de items en el carrito */}
      <span id="contador" className="blue">
        {cartCount}
      </span>
    </header>
  );
}

// Exportamos el componente
export default Header;
