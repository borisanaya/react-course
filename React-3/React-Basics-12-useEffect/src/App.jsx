// Importamos los estilos CSS para este componente
import "./App.css";
// Importamos los componentes que vamos a usar
import HeaderComponent from "./components/HeaderComponent";
import Login from "./components/Login";
import MovieList from "./components/MovieList";
// Importamos los hooks useEffect y useState de React
import { useEffect, useState } from "react";

// Componente principal de la aplicación
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

  // Estado para almacenar la información del usuario (inicialmente un objeto vacío)
  const [user, setUser] = useState({});

  // Estado booleano para mostrar/ocultar la lista de películas
  const [showMovies, setShowMovies] = useState(true);

  // Función que actualiza el estado del usuario cuando hace login
  const login = (userInfo) => {
    console.log(userInfo);
    setUser(userInfo);
  };

  // EJEMPLO 1 (comentado): useEffect SIN array de dependencias
  // Se ejecuta en CADA renderización del componente (¡cuidado, puede causar bucles!)
  // useEffect(() => {
  //   console.log("Ejecución con cada renderización del componente raíz");
  // });

  // EJEMPLO 2: useEffect CON array de dependencias [user]
  // Se ejecuta solo cuando el estado 'user' cambia
  // Útil para reaccionar a cambios específicos en el estado
  useEffect(() => {
    console.log("Ejecución con cada cambio de la variable reactiva user");
  }, [user]); // Este useEffect solo se ejecuta cuando 'user' cambia

  // Retornamos el JSX que se va a renderizar
  return (
    <>
      {/* Componente del encabezado */}
      <HeaderComponent greetings={greetings} links={links}></HeaderComponent>

      <main className="main-content">
        {/* Renderizado condicional: solo muestra el saludo si existe user.username */}
        {user.username && <h2>Saludos {user.username}!</h2>}
        
        {/* Componente de login, le pasamos la función login como prop */}
        <Login handleLogin={login}></Login>

        {/* Botón que alterna (toggle) el valor de showMovies entre true y false */}
        <button onClick={() => setShowMovies(!showMovies)}>
          Toggle Movies
        </button>
        
        {/* Renderizado condicional: solo muestra MovieList si showMovies es true */}
        {/* Esto demuestra el montaje y desmontaje de componentes */}
        {showMovies && <MovieList></MovieList>}
      </main>
    </>
  );
}

// Exportamos el componente para poder usarlo en otros archivos
export default App;
