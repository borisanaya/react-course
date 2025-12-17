import "./ButtonComponent.css";

function ButtonComponent() {
  const handleClick = () => {
    console.log("Hello! 😄");
  };

  return <button className="btn" onClick={handleClick}>Soy un botón</button>;
}

export default ButtonComponent;
