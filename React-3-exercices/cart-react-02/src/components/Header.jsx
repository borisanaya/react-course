// Componente Header - Muestra la cabecera de la tienda
// Ahora recibe la cantidad de items en el carrito como prop
function Header({ cartCount }) {
  return (
    <header className="cabecera">
      {/* Título de la tienda */}
      <span className="titulo">Your Book Store</span>
      
      {/* Contador dinámico de items en el carrito */}
      {/* Muestra el valor recibido por props en lugar de un valor fijo */}
      <span id="contador" className="blue">
        {cartCount}
      </span>
    </header>
  );
}

// Exportamos el componente
export default Header;
