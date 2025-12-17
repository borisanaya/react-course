// Importamos los estilos CSS para el header
import "./HeaderComponent.css";

// Componente del encabezado de la página
// Recibe props (propiedades) del componente padre
function HeaderComponent(props) {
  // Desestructuración: extraemos greetings y links del objeto props
  // Equivalente a: const greetings = props.greetings; const links = props.links;
  const { greetings, links } = props;

  // Retornamos el JSX del encabezado
  return (
    <header className="header">
      {/* Mostramos el mensaje de bienvenida que viene de props */}
      <h1 className="title">{greetings}</h1>
      {/* Menú de navegación */}
      <nav>
        <ul className="header-list">
          {/* Cada enlace usa los valores del objeto links */}
          <li>
            <a href="#" className="link">
              {links.home}
            </a>
          </li>
          <li>
            <a href="#" className="link">
              {links.blog}
            </a>
          </li>
          <li>
            <a href="#" className="link">
              {links.news}
            </a>
          </li>
          <li>
            <a href="#" className="link">
              {links.contact}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

// Exportamos el componente
export default HeaderComponent;
