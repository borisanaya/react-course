// Importamos los estilos CSS para este componente
import "./App.css";
// Importamos los componentes hijos
import HeaderComponent from "./components/HeaderComponent";
import Login from "./components/Login";
// Importamos el hook useState de React para manejar el estado
import { useState } from "react";

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
  // Inicia como objeto vacío {} (sin usuario logueado)
  const [user, setUser] = useState({});

  // Función callback que recibe datos del componente hijo Login
  const login = (userInfo) => {
    console.log(userInfo);
    setUser(userInfo); // Actualiza el estado con los datos del usuario
  };

  // Variable booleana para demostrar renderizado condicional
  // Cambia este valor a true o false para ver diferentes resultados
  const condition = false;

  return (
    <>
      <HeaderComponent greetings={greetings} links={links}></HeaderComponent>

      <main className="main-content">
        {/* 
          RENDERIZADO CONDICIONAL #1: Operador && (AND lógico)
          - Si user.username existe (es truthy), renderiza el <h2>
          - Si user.username NO existe (es falsy), no renderiza nada
          - Útil cuando solo quieres mostrar algo si la condición es verdadera
        */}
        {user.username && <h2>Saludos {user.username}!</h2>}
        
        <Login handleLogin={login}></Login>

        {/* 
          RENDERIZADO CONDICIONAL #2: Operador && con condición positiva
          - Si condition es true, renderiza el <h2>
          - Si condition es false, no renderiza nada
        */}
        {condition && <h2>La condición se cumple</h2>}
        
        {/* 
          RENDERIZADO CONDICIONAL #3: Operador && con negación (!)
          - Si condition es false, !condition es true y renderiza el <h2>
          - Si condition es true, !condition es false y no renderiza nada
        */}
        {!condition && <h2>La condición No se cumple</h2>}

        {/* 
          RENDERIZADO CONDICIONAL #4: Operador ternario (? :)
          - Si condition es true, renderiza lo que está antes de los :
          - Si condition es false, renderiza lo que está después de los :
          - Útil cuando quieres mostrar una cosa u otra (dos opciones)
        */}
        {condition ? (
          <h2>La condición se cumple</h2>
        ) : (
          <h2>La condición No se cumple</h2>
        )}
      </main>
    </>
  );
}

// Exportamos el componente para que pueda ser usado en otros archivos
export default App;
