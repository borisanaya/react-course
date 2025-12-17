// Componente Header - Muestra la cabecera de la tienda
function Header({ cartCount }) {
  return (
    <header className="cabecera">
      <span className="titulo">Your Book Store</span>
      <span id="contador" className="blue">
        {cartCount}
      </span>
    </header>
  );
}

export default Header;
