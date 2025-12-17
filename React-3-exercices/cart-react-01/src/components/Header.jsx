// Componente Header - Muestra la cabecera de la tienda
// Por ahora es estático, solo muestra el título y un contador fijo
function Header() {
  return (
    <header className="cabecera">
      {/* Título de la tienda */}
      <span className="titulo">Your Book Store</span>
      
      {/* Contador de items en el carrito (por ahora fijo en 0) */}
      <span id="contador" className="blue">
        0
      </span>
    </header>
  );
}

// Exportamos el componente para poder usarlo en App.jsx
export default Header;
