// Importamos los estilos CSS para este componente
import "./HeaderComponent.css";

// Componente HeaderComponent (HIJO)
// Recibe props del componente padre (App)
function HeaderComponent(props) {
  // Desestructuramos las props recibidas del padre
  const { greetings, links } = props;

  return (
    <header className="header">
      {/* Usamos la prop 'greetings' recibida del padre */}
      <h1 className="title">{greetings}</h1>
      <nav>
        <ul className="header-list">
          {/* Usamos el objeto 'links' recibido del padre */}
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
