// Importamos los estilos CSS para este componente
import "./App.css";
// Importamos los componentes hijos que vamos a utilizar
import HeaderComponent from "./components/HeaderComponent";
import ButtonComponent from "./components/ButtonComponent";
// Importamos el hook useState de React para manejar el estado
import { useState } from "react";

// Componente principal de la aplicación (PADRE)
function App() {
  // useState nos permite crear una variable de estado 'greetings'
  // greetings: contiene el valor actual
  // setGreetings: función para actualizar el valor
  const [greetings, setGreetings] = useState("Bienvenidos a mi Web!");
  
  // Creamos un objeto con los enlaces del menú
  const links = {
    home: "Home",
    blog: "Blog",
    news: "News",
    contact: "Contact Us",
  };

  return (
    <>
      {/* 
        PASANDO PROPS DE PADRE A HIJO:
        - greetings={greetings}: pasamos el estado 'greetings' como prop al hijo
        - links={links}: pasamos el objeto 'links' como prop al hijo
        Estos datos estarán disponibles en HeaderComponent a través de props
      */}
      <HeaderComponent greetings={greetings} links={links}></HeaderComponent>

      <main className="main-content">
        <h2>Saludos!</h2>
        {/* 
          También pasamos una prop 'text' al componente ButtonComponent
          El valor "Click Me" será recibido por el componente hijo
        */}
        <ButtonComponent text={"Click Me"}></ButtonComponent>
      </main>
    </>
  );
}

// Exportamos el componente para que pueda ser usado en otros archivos
export default App;
