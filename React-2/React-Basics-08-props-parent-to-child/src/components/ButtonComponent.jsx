// Importamos los estilos CSS para este componente
import "./ButtonComponent.css";

// Componente ButtonComponent (HIJO)
// Recibe 'props' como parámetro
function ButtonComponent(props) {
  // Retornamos un botón que muestra el texto recibido a través de props.text
  // En este caso, el padre (App) le pasa text="Click Me"
  return <button className="btn">{props.text}</button>;
}

// Exportamos el componente para poder usarlo en otros archivos
export default ButtonComponent;
