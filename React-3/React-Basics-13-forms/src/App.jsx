// Importamos los estilos CSS para este componente
import "./App.css";
// Importamos los componentes que vamos a usar
import HeaderComponent from "./components/HeaderComponent";
import Login from "./components/Login";
// Importamos el hook useState para manejar el estado
import { useState } from "react";

// Componente principal de la aplicación
function App() {
  // Estado para el mensaje de bienvenida del header
  const [greetings, setGreetings] = useState("Bienvenidos a mi Web!");
  
  // Objeto con los enlaces del menú de navegación
  const links = {
    home: "Home",
    blog: "Blog",
    news: "News",
    contact: "Contact Us",
  };

  // Estado para almacenar los datos del usuario después del login
  // Inicialmente es un objeto vacío {}
  const [user, setUser] = useState({});

  // Función que se ejecuta cuando el usuario hace login
  // Recibe los datos del formulario (userInfo) y actualiza el estado
  const login = (userInfo) => {
    console.log(userInfo);
    // Actualizamos el estado user con los datos recibidos del formulario
    setUser(userInfo);
  };

  // Retornamos el JSX que se va a renderizar
  return (
    <>
      {/* Componente del encabezado con props */}
      <HeaderComponent greetings={greetings} links={links}></HeaderComponent>

      <main className="main-content">
        {/* Renderizado condicional: solo muestra el saludo si user.username existe */}
        {/* && significa "si lo de la izquierda es verdadero, renderiza lo de la derecha" */}
        {user.username && <h2>Saludos {user.username}!</h2>}
        
        {/* Componente Login, le pasamos la función login como prop handleLogin */}
        <Login handleLogin={login}></Login>
      </main>
    </>
  );
}

// Exportamos el componente para poder usarlo en otros archivos
export default App;
