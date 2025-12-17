// Importamos los estilos CSS para el botón
import "./ButtonComponent.css";

// Componente reutilizable de botón
// Recibe 'props' que contienen el texto del botón
function ButtonComponent(props) {
  // Retornamos un botón con el texto que viene de las props
  return <button className="btn">{props.text}</button>;
}

// Exportamos el componente para poder usarlo en otros archivos
export default ButtonComponent;
