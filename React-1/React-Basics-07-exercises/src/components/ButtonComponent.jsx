import { useState } from "react";
import "./ButtonComponent.css";

function ButtonComponent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button className="btn" onClick={handleClick}>
        Haz clic aquí
      </button>
      <div className="counter-display">
        Has hecho clic {count} {count === 1 ? 'vez' : 'veces'}
      </div>
    </div>
  );
}

export default ButtonComponent;
