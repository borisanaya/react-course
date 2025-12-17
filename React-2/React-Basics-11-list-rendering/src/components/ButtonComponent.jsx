import "./ButtonComponent.css";

function ButtonComponent(props) {
  return <button className="btn">{props.text}</button>;
}

export default ButtonComponent;
