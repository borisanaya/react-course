import { useState } from "react";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import HeaderComponent from "./components/HeaderComponent";

function App() {
  // useState para cambiar el texto del título
  const [titleText, setTitleText] = useState("Saludos!");

  // useState para la validación del input
  const [inputValue, setInputValue] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const [isValid, setIsValid] = useState(null);

  const handleTitleClick = () => {
    setTitleText("¡Hiciste clic! 😄");
  };

  const handleMouseEnter = () => {
    setTitleText("¡El mouse está aquí! 🖱️");
  };

  const handleMouseLeave = () => {
    setTitleText("Saludos!");
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    
    if (value.length === 0) {
      setValidationMessage("");
      setIsValid(null);
    } else if (value.length < 3) {
      setValidationMessage("⚠️ El texto debe tener al menos 3 caracteres");
      setIsValid(false);
    } else {
      setValidationMessage("✅ Texto válido");
      setIsValid(true);
    }
  };

  return (
    <>
      <HeaderComponent></HeaderComponent>

      <main className="main-content">
        <h2 
          onClick={handleTitleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {titleText}
        </h2>
        
        <div className="input-container">
          <p>Escribe al menos 3 caracteres en el campo:</p>
          <input 
            type="text" 
            value={inputValue}
            onChange={handleChange} 
            placeholder="Escribe aquí..." 
          />
          
          {validationMessage && (
            <div className={`validation-message ${isValid ? 'success' : 'error'}`}>
              {validationMessage}
            </div>
          )}
        </div>

        <br />
        <ButtonComponent></ButtonComponent>
      </main>
    </>
  );
}

export default App;
