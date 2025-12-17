// Importamos los estilos CSS para este componente
import "./App.css";
// Importamos el hook useState de React para manejar el estado del componente
import { useState } from "react";
// Importamos los componentes que vamos a usar en nuestra aplicación
import HeaderComponent from "./components/HeaderComponent";
import MemeList from "./components/MemeList";

// Componente principal de la aplicación
function App() {
  // useState nos permite crear una variable de estado (greetings) y una función para modificarla (setGreetings)
  // El valor inicial es "Bienvenidos a mi Web!"
  const [greetings, setGreetings] = useState("Bienvenidos a mi Web!");
  
  // Creamos un objeto con los enlaces del menú de navegación
  const links = {
    home: "Home",
    blog: "Blog",
    news: "News",
    contact: "Contact Us",
  };

  // El return devuelve lo que se va a mostrar en pantalla (JSX)
  return (
    <>
      {/* Pasamos las props (propiedades) greetings y links al HeaderComponent */}
      <HeaderComponent greetings={greetings} links={links}></HeaderComponent>

      {/* Sección principal que contiene la lista de memes */}
      <main className="main-content">
        {/* Componente que hace fetch a la API y muestra los memes */}
        <MemeList></MemeList>
      </main>
    </>
  );
}

// Exportamos el componente para poder usarlo en otros archivos
export default App;
