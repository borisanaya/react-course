// Importamos los estilos CSS para este componente
import "./ButtonComponent.css";

// Componente ButtonComponent (HIJO)
// Componente reutilizable para crear botones
function ButtonComponent(props) {
  // Retornamos un botón que muestra el texto recibido a través de props
  return <button className="btn">{props.text}</button>;
}

// Exportamos el componente
export default ButtonComponent;
