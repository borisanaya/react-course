import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import HeaderComponent from "./components/HeaderComponent";

function App() {
  // Ejercicio 1: Evento onMouseEnter en el título
  const sayHello = () => {
    console.log("Hello! 😄");
  };

  const handleMouseEnter = () => {
    console.log("¡El mouse está sobre el título! 🖱️");
  };

  // Ejercicio 3: Validación del input
  const handleChange = (e) => {
    const value = e.target.value;
    console.log(`Valor actual: ${value}`);
    
    if (value.length < 3) {
      console.log("⚠️ El texto debe tener al menos 3 caracteres");
    } else {
      console.log("✅ Texto válido");
    }
  };

  return (
    <>
      <HeaderComponent></HeaderComponent>

      <main className="main-content">
        <h2 onClick={sayHello} onMouseEnter={handleMouseEnter}>
          Saludos!
        </h2>
        
        <p>Escribe al menos 3 caracteres en el campo:</p>
        <input type="text" onChange={handleChange} placeholder="Escribe aquí..." />

        <br />
        <br />
        <ButtonComponent></ButtonComponent>
      </main>
    </>
  );
}

export default App;
