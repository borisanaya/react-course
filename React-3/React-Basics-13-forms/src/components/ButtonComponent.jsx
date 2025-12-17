// Importamos los estilos CSS para el botón
import "./ButtonComponent.css";

// Componente reutilizable de botón
// Recibe el texto del botón a través de props
function ButtonComponent(props) {
  // Retornamos un botón con el texto que viene de props
  return <button className="btn">{props.text}</button>;
}

// Exportamos el componente
export default ButtonComponent;
