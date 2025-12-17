// Importamos los estilos CSS para este componente
import "./App.css";
// Importamos los componentes hijos
import HeaderComponent from "./components/HeaderComponent";
import Login from "./components/Login";
// Importamos el hook useState de React para manejar el estado
import { useState } from "react";

// Componente principal de la aplicación (PADRE)
function App() {
  // Estado para el mensaje de bienvenida
  const [greetings, setGreetings] = useState("Bienvenidos a mi Web!");
  
  // Objeto con los enlaces del menú
  const links = {
    home: "Home",
    blog: "Blog",
    news: "News",
    contact: "Contact Us",
  };

  // Estado para almacenar la información del usuario
  // Se inicializa como objeto vacío y se actualizará cuando el hijo envíe datos
  const [user, setUser] = useState({});

  // FUNCIÓN CALLBACK: Esta función se pasará al componente hijo (Login)
  // El hijo la llamará para enviar datos AL PADRE
  // Esto permite la comunicación de HIJO A PADRE
  const login = (userInfo) => {
    console.log(userInfo);
    // Actualizamos el estado del padre con los datos recibidos del hijo
    setUser(userInfo);
  };

  return (
    <>
      {/* Componente Header: recibe props de padre a hijo */}
      <HeaderComponent greetings={greetings} links={links}></HeaderComponent>

      <main className="main-content">
        {/* Mostramos el nombre de usuario que viene del estado actualizado por el hijo */}
        <h2>Saludos {user.username}!</h2>
        
        {/* 
          PASAMOS LA FUNCIÓN COMO PROP:
          handleLogin={login} - Pasamos la función 'login' al componente hijo
          El hijo podrá ejecutar esta función para enviar datos al padre
        */}
        <Login handleLogin={login}></Login>
      </main>
    </>
  );
}

// Exportamos el componente para que pueda ser usado en otros archivos
export default App;
