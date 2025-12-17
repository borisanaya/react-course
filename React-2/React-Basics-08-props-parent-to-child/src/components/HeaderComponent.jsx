// Importamos los estilos CSS para este componente
import "./HeaderComponent.css";

// Componente HeaderComponent (HIJO)
// Recibe 'props' como parámetro - props es un objeto que contiene todos los datos enviados desde el padre
function HeaderComponent(props) {
  // DESESTRUCTURACIÓN: Extraemos 'greetings' y 'links' del objeto props
  // Esto es equivalente a: const greetings = props.greetings; const links = props.links;
  const { greetings, links } = props;

  return (
    <header className="header">
      {/* Usamos la prop 'greetings' recibida del componente padre */}
      <h1 className="title">{greetings}</h1>
      <nav>
        <ul className="header-list">
          {/* Usamos las propiedades del objeto 'links' recibido del padre */}
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

// Exportamos el componente para que pueda ser importado en otros archivos
export default HeaderComponent;
